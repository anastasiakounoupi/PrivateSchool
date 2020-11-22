//----------------------Variables for the Course Form---------------------------
const submitCourseBtn = document.querySelector('.btn-course');
const editCourseBtn = document.querySelector('.btn-editCourse');
const stream = document.getElementById('stream');
const startDate = document.getElementById('startDate');
const endDate = document.getElementById('endDate');
const partType = document.getElementById('part');
const fullType = document.getElementById('full');
const editCourse = document.getElementById('editCourse');
const courseForm = document.getElementById('courseForm');
const errCourse = document.querySelector('.error');

// ---------------------Course Class to create Course Objects-------------------
class Course {
    constructor(stream, startDate, endDate, type) {
        this.stream = stream;
        this.startDate = startDate;
        this.endDate = endDate;
        this.type = type;
    }
}
//-----------------------Storing Data from the Course Form input into localStorage after form Validation-------------

function storeCourseData() {
    typeRadio = document.querySelector('input[name="type"]:checked');
    if (validateCourseForm()) {
        const Course1 = new Course(stream.value, startDate.value, endDate.value, typeRadio.value);
        courseArray.push(Course1);
        courseForm.submit();
        updateSavedColumns();
    } else {
        console.log('wrong input');
    }

}

submitCourseBtn.addEventListener('click', storeCourseData);

//---------------------------Edit & Update already submited Course Data-----------------------------
function EditCourseDom() {
    if (editCourse.value !== 'empty') {
        let y = editCourse.selectedIndex - 1;
        stream.value = courseArray[y].stream;
        startDate.value = courseArray[y].startDate;
        endDate.value = courseArray[y].endDate;
        if (courseArray[y].type === 'Part-Time') {
            partType.checked = true;
        } else {
            fullType.checked = true;
        }
        submitCourseBtn.style.display = 'none';
        editCourseBtn.style.display = 'block';
    }
    else if (editCourse.value === 'empty') {
        submitCourseBtn.style.display = 'block';
        editCourseBtn.style.display = 'none';
    }
}

function UpdateCourseDom() {
    console.log('entered func');
    let y = editCourse.selectedIndex - 1;
    if (validateCourseForm()) {
        courseArray[y].stream = stream.value;
        courseArray[y].startDate = startDate.value;
        courseArray[y].endDate = endDate.value;
        if (partType.checked) {
            courseArray[y].type = 'Part-Time';
        } else {
            courseArray[y].type = 'Full-Time';
        }
        courseForm.submit();
        updateSavedColumns();
    }
}

editCourseBtn.style.display = 'none';
editCourse.addEventListener('change', EditCourseDom);
editCourseBtn.addEventListener('click', UpdateCourseDom);

//------------------------- Validation for the Course Form----------------------------
function validateCourseForm() {
    const start = startDate.value;
    const end = endDate.value;
    const partsStart = start.split("-");
    const partsEnd = end.split("-");
    const dayStart = parseInt(partsStart[2], 10);
    const monthStart = parseInt(partsStart[1], 10);
    const yearStart = parseInt(partsStart[0], 10);
    const dayEnd = parseInt(partsEnd[2], 10);
    const monthEnd = parseInt(partsEnd[1], 10);
    const yearEnd = parseInt(partsEnd[0], 10);
    if (stream.value === null || stream.value === '#') {
        stream.classList.add('invalid');
        startDate.classList.remove('invalid');
        endDate.classList.remove('invalid');
        errCourse.innerText = 'Please choose course';
        return false;
    }
    else if (startDate.value === '' || yearStart < 2020 || monthStart == 0 || monthStart < 12 || dayStart < 0 || dayStart > 31) {
        startDate.classList.add('invalid');
        stream.classList.remove('invalid');
        endDate.classList.remove('invalid');
        errCourse.innerText = 'Start Date has to be set and cant be before next month';
        return false;
    }
    else if (endDate.value === '' || yearEnd < 2021 || monthEnd == 0 || monthEnd < 3 || dayEnd < 0 || dayEnd > 31) {
        endDate.classList.add('invalid');
        startDate.classList.remove('invalid');
        stream.classList.remove('invalid');
        errCourse.innerText = 'End Date has to be at least three months after the start';
        return false;
    }
    else if (!partType.checked && !fullType.checked) {
        errCourse.innerText = 'Choose a course type';
        stream.classList.remove('invalid');
        startDate.classList.remove('invalid');
        endDate.classList.remove('invalid');
        return false;
    }
    else {
        errCourse.innerText = '';
        return true;
    }
}