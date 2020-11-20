//----------------------Variables for the Course Form---------------------------
const submitCourseBtn = document.querySelector('.btn-course');
const editCourseBtn = document.querySelector('.btn-editCourse');
const stream = document.getElementById('stream');
const startDate = document.getElementById('startDate');
const endDate = document.getElementById('endDate');
const partType = document.getElementById('part');
const fullType = document.getElementById('full');
const editCourse = document.getElementById('editCourse');
let courseArray = [];

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
    validateCourseForm();
    if (validateCourseForm()) {
        const Course1 = new Course(stream.value, startDate.value, endDate.value, typeRadio.value);
        courseArray.push(Course1);
        updateSavedColumns();
        alert('submitted succesfully');
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
    validateCourseForm();
    if (validateCourseForm()) {
        courseArray[y].stream = stream.value;
        courseArray[y].startDate = startDate.value;
        courseArray[y].endDate = endDate.value;
        if (partType.checked) {
            courseArray[y].type = 'Part-Time';
        } else {
            courseArray[y].type = 'Full-Time';
        }

        updateSavedColumns();
        alert('updated succesfully');

    }
}

editCourseBtn.style.display = 'none';
editCourse.addEventListener('change', EditCourseDom);
editCourseBtn.addEventListener('click', UpdateCourseDom);

//------------------------- Validation for the Course Form----------------------------
function validateCourseForm() {
    if (stream.value === null || stream.value === '#') {
        stream.classList.add('invalid');
        return false;
    }
    else if (startDate.value === '') {
        startDate.classList.add('invalid');
        return false;
    }
    else if (endDate.value === '') {
        endDate.classList.add('invalid');
        return false;
    }
    else {
        return true;
    }
}