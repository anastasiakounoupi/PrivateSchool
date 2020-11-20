//----------------------Variables for the Assignment per Student per Course Form---------------------------
const submitAsStCourseBtn = document.querySelector('.btn_asstC');
const editAssignmentStudentCourseBtn = document.querySelector('.btn-editassignmentstudent_course');
const asStCourseFirstName = document.getElementById('stfirstname_asstC');
const asStCourseLastName = document.getElementById('stlastname_asstC');
const asStCoursedateOfBirth = document.getElementById('birthday_asstC');
const asStCourseUpfrontTuition = document.getElementById('upfront_asstC');
const asStCourseMonthlyTuition = document.getElementById('monthly_asstC');
const asStCourseAssignment = document.getElementById('assignment_asstC');
const asStCourseSubDate = document.getElementById('subDate_asstC');
const asStCourseTotalMark = document.getElementById('totalMark_asstC');
const asStCourseOralMark = document.getElementById('oralMark_asstC');
const asStCourseSubject = document.getElementById('stream_asstC');
const asStCoursestartDate = document.getElementById('startDate_asstC');
const asStCourseendDate = document.getElementById('endDate_asstC');
const asStCoursePartType = document.getElementById('part_asstC');
const asStCourseFullType = document.getElementById('full_asstC');
const editAssignmentStudentCourse = document.getElementById('editassignmentstudent-course');
let asStPerCourseArray = [];

// ---------------------Assignment per Student per Course Class to create Assignment per Student per Course Objects-------------------
class AssignmentperStudentperCourse {
    constructor(firstName, lastName, birthday, tuition, subject, subDate, oralMark, totalMark, stream, startDate, endDate, type) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.birthday = birthday;
        this.tuition = tuition;
        this.subject = subject;
        this.subDate = subDate;
        this.oralMark = oralMark;
        this.totalMark = totalMark;
        this.stream = stream;
        this.startDate = startDate;
        this.endDate = endDate;
        this.type = type;
    }
}

//-----------------------Storing Data from the Assignment per Student per Course Form input into localStorage after form Validation-------------
function storeAsStCourseData() {
    asStCourseTypeRadio = document.querySelector('input[name="type_asstC"]:checked');
    asStCourseTuitionRadio = document.querySelector('input[name="tuition_asstC"]:checked');
    validateAssignmentStudentperCourseForm();
    if (validateAssignmentStudentperCourseForm()) {
        const AssignmentStudentCourse1 = new AssignmentperStudentperCourse(asStCourseFirstName.value, asStCourseLastName.value, asStCoursedateOfBirth.value, asStCourseTuitionRadio.value, asStCourseAssignment.value, asStCourseSubDate.value, asStCourseOralMark.value, asStCourseTotalMark.value, asStCourseSubject.value, asStCoursestartDate.value, asStCourseendDate.value, asStCourseTypeRadio.value);
        asStPerCourseArray.push(AssignmentStudentCourse1);
        updateSavedColumns();
        alert('submitted succesfully');
    } else {
        console.log('wrong input');
    }
}

submitAsStCourseBtn.addEventListener('click', storeAsStCourseData);

//---------------------------Edit & Update already submited Assignment per Student per Course Data-----------------------------
function EditAssignmentStudentCourseDom() {
    if (editAssignmentStudentCourse.value !== 'empty') {
        let y = editAssignmentStudentCourse.selectedIndex - 1;
        asStCourseFirstName.value = asStPerCourseArray[y].firstName;
        asStCourseLastName.value = asStPerCourseArray[y].lastName;
        asStCoursedateOfBirth.value = asStPerCourseArray[y].birthday;
        if (asStPerCourseArray[y].tuition === 'Pay Upfront') {
            asStCourseUpfrontTuition.checked = true;
        } else {
            asStCourseMonthlyTuition.checked = true;
        }
        asStCourseAssignment.value = asStPerCourseArray[y].subject;
        asStCourseSubDate.value = asStPerCourseArray[y].subDate;
        asStCourseOralMark.value = asStPerCourseArray[y].oralMark;
        asStCourseTotalMark.value = asStPerCourseArray[y].totalMark;
        asStCourseSubject.value = asStPerCourseArray[y].stream;
        asStCoursestartDate.value = asStPerCourseArray[y].startDate;
        asStCourseendDate.value = asStPerCourseArray[y].endDate;
        if (asStPerCourseArray[y].type === 'Part-Time') {
            asStCoursePartType.checked = true;
        } else {
            asStCourseFullType.checked = true;
        }
        submitAsStCourseBtn.style.display = 'none';
        editAssignmentStudentCourseBtn.style.display = 'block';
    }
    else if (editAssignmentStudentCourse.value === 'empty') {
        submitAsStCourseBtn.style.display = 'block';
        editAssignmentStudentCourseBtn.style.display = 'none';
    }
}

function UpdateAssignmentStudentCourseDom() {
    let y = editAssignmentStudentCourse.selectedIndex - 1;
    validateAssignmentStudentperCourseForm();
    if (validateAssignmentStudentperCourseForm()) {
        asStPerCourseArray[y].firstName = asStCourseFirstName.value;
        asStPerCourseArray[y].lastName = asStCourseLastName.value;
        asStPerCourseArray[y].birthday = asStCoursedateOfBirth.value;
        if (asStCourseUpfrontTuition.checked) {
            asStPerCourseArray[y].tuition = 'Pay Upfront';
        } else {
            asStPerCourseArray[y].tuition = 'Pay Monthly';
        }
        asStPerCourseArray[y].subject = asStCourseAssignment.value;
        asStPerCourseArray[y].subDate = asStCourseSubDate.value;
        asStPerCourseArray[y].oralMark = asStCourseOralMark.value;
        asStPerCourseArray[y].totalMark = asStCourseTotalMark.value;
        asStPerCourseArray[y].stream = asStCourseSubject.value;
        asStPerCourseArray[y].startDate = asStCoursestartDate.value;
        asStPerCourseArray[y].endDate = asStCourseendDate.value;
        if (asStCoursePartType.checked) {
            asStPerCourseArray[y].type = 'Part-Time';
        } else {
            asStPerCourseArray[y].type = 'Full-Time';
        }
        updateSavedColumns();
        alert('updated succesfully');

    }
}
editAssignmentStudentCourseBtn.style.display = 'none';
editAssignmentStudentCourse.addEventListener('change', EditAssignmentStudentCourseDom);
editAssignmentStudentCourseBtn.addEventListener('click', UpdateAssignmentStudentCourseDom);
//------------------------- Validation for the Assignment per Student per Course Form----------------------------
function validateAssignmentStudentperCourseForm() {
    const birthday = asStCoursedateOfBirth.value;
    const parts = birthday.split("-");
    const day = parseInt(parts[2], 10);
    const month = parseInt(parts[1], 10);
    const year = parseInt(parts[0], 10);
    if (asStCourseFirstName.value === null || asStCourseFirstName.value === '') {
        asStCourseFirstName.placeholder = 'please fill out';
        asStCourseFirstName.classList.add('invalid');
        return false;
    }
    else if (asStCourseLastName.value === null || asStCourseLastName.value === '') {
        asStCourseLastName.placeholder = 'please fill out';
        asStCourseLastName.classList.add('invalid');
        return false;
    } else if (asStCoursedateOfBirth.value === '' || year < 1950 || year > 2001 || month == 0 || month > 12 || day < 0 || day > 31) {
        asStCoursedateOfBirth.classList.add('invalid');
        return false;
    }
    else if (asStCourseSubject.value === null || asStCourseSubject.value === '#') {
        asStCourseSubject.classList.add('invalid');
        return false;
    }
    else if (asStCoursestartDate.value === '') {
        asStCoursestartDate.classList.add('invalid');
        return false;
    }
    else if (asStCourseendDate.value === '') {
        asStCourseendDate.classList.add('invalid');
        return false;
    }
    else if (asStCourseAssignment.value === null || asStCourseAssignment.value === '#') {
        asStCourseAssignment.classList.add('invalid');
        return false;
    }
    else if (asStCourseSubDate.value === '') {
        asStCourseSubDate.classList.add('invalid');
        return false;
    }
    else if (asStCourseOralMark.value === '' || asStCourseOralMark.value > 20) {
        asStCourseOralMark.classList.add('invalid');
        return false;
    }
    else if (asStCourseTotalMark.value === '' || asStCourseTotalMark.value < 80 || asStCourseTotalMark.value > 100) {
        asStCourseTotalMark.classList.add('invalid');
        return false;
    }
    else {
        return true;
    }
}


