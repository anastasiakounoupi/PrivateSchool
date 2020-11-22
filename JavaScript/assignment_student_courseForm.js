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
const assignmentStudentCourseForm = document.getElementById('assignmentStudentCourseForm');
const errAssignmentStudentCourse = document.querySelector('.error');
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
    if (validateAssignmentStudentperCourseForm()) {
        const AssignmentStudentCourse1 = new AssignmentperStudentperCourse(asStCourseFirstName.value, asStCourseLastName.value, asStCoursedateOfBirth.value, asStCourseTuitionRadio.value, asStCourseAssignment.value, asStCourseSubDate.value, asStCourseOralMark.value, asStCourseTotalMark.value, asStCourseSubject.value, asStCoursestartDate.value, asStCourseendDate.value, asStCourseTypeRadio.value);
        asStPerCourseArray.push(AssignmentStudentCourse1);
        assignmentStudentCourseForm.submit();
        updateSavedColumns();
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
        assignmentStudentCourseForm.submit();
        updateSavedColumns();
    }
}
editAssignmentStudentCourseBtn.style.display = 'none';
editAssignmentStudentCourse.addEventListener('change', EditAssignmentStudentCourseDom);
editAssignmentStudentCourseBtn.addEventListener('click', UpdateAssignmentStudentCourseDom);

//------------------------- Validation for the Assignment per Student per Course Form----------------------------

function validateAssignmentStudentperCourseForm() {
    const regex = /^[a-zA-Z ]{2,15}$/;
    const birthday = asStCoursedateOfBirth.value;
    const parts = birthday.split("-");
    const day = parseInt(parts[2], 10);
    const month = parseInt(parts[1], 10);
    const year = parseInt(parts[0], 10);
    const start = asStCoursestartDate.value;
    const end = asStCourseendDate.value;
    const partsStart = start.split("-");
    const partsEnd = end.split("-");
    const dayStart = parseInt(partsStart[2], 10);
    const monthStart = parseInt(partsStart[1], 10);
    const yearStart = parseInt(partsStart[0], 10);
    const dayEnd = parseInt(partsEnd[2], 10);
    const monthEnd = parseInt(partsEnd[1], 10);
    const yearEnd = parseInt(partsEnd[0], 10);
    const sub = asStCourseSubDate.value;
    const partsSub = sub.split("-");
    const daySub = parseInt(partsSub[2], 10);
    const monthSub = parseInt(partsSub[1], 10);
    const yearSub = parseInt(partsSub[0], 10);
    if (asStCourseFirstName.value === null || asStCourseFirstName.value === '' || regex.test(asStCourseFirstName.value) === false) {
        errAssignmentStudentCourse.innerText = 'First Name up to 15 letters / no numbers';
        asStCourseFirstName.classList.add('invalid');
        asStCourseLastName.classList.remove('invalid');
        asStCoursedateOfBirth.classList.remove('invalid');
        asStCourseSubject.classList.remove('invalid');
        asStCoursestartDate.classList.remove('invalid');
        asStCourseendDate.classList.remove('invalid');
        asStCourseAssignment.classList.remove('invalid');
        asStCourseSubDate.classList.remove('invalid');
        asStCourseOralMark.classList.remove('invalid');
        asStCourseTotalMark.classList.remove('invalid');
        return false;
    }
    else if (asStCourseLastName.value === null || asStCourseLastName.value === '' || regex.test(asStCourseLastName.value) === false) {
        errAssignmentStudentCourse.innerText = 'Last Name up to 15 letters / no numbers';
        asStCourseLastName.classList.add('invalid');
        asStCourseFirstName.classList.remove('invalid');
        asStCoursedateOfBirth.classList.remove('invalid');
        asStCourseSubject.classList.remove('invalid');
        asStCoursestartDate.classList.remove('invalid');
        asStCourseendDate.classList.remove('invalid');
        asStCourseAssignment.classList.remove('invalid');
        asStCourseSubDate.classList.remove('invalid');
        asStCourseOralMark.classList.remove('invalid');
        asStCourseTotalMark.classList.remove('invalid');
        return false;
    } else if (asStCoursedateOfBirth.value === '' || year < 1950 || year > 2001 || month == 0 || month > 12 || day < 0 || day > 31) {
        errAssignmentStudentCourse.innerText = 'Enter your date of Birth';
        asStCoursedateOfBirth.classList.add('invalid');
        asStCourseLastName.classList.remove('invalid');
        asStCourseFirstName.classList.remove('invalid');
        asStCourseSubject.classList.remove('invalid');
        asStCoursestartDate.classList.remove('invalid');
        asStCourseendDate.classList.remove('invalid');
        asStCourseAssignment.classList.remove('invalid');
        asStCourseSubDate.classList.remove('invalid');
        asStCourseOralMark.classList.remove('invalid');
        asStCourseTotalMark.classList.remove('invalid');
        return false;
    }
    else if (!asStCourseUpfrontTuition.checked && !asStCourseMonthlyTuition.checked) {
        errAssignmentStudentCourse.innerText = 'Choose payment type';
        asStCoursedateOfBirth.classList.remove('invalid');
        asStCourseLastName.classList.remove('invalid');
        asStCourseFirstName.classList.remove('invalid');
        asStCourseSubject.classList.remove('invalid');
        asStCoursestartDate.classList.remove('invalid');
        asStCourseendDate.classList.remove('invalid');
        asStCourseAssignment.classList.remove('invalid');
        asStCourseSubDate.classList.remove('invalid');
        asStCourseOralMark.classList.remove('invalid');
        asStCourseTotalMark.classList.remove('invalid');
        return false;
    }
    else if (asStCourseSubject.value === null || asStCourseSubject.value === '#') {
        asStCourseSubject.classList.add('invalid');
        asStCoursedateOfBirth.classList.remove('invalid');
        asStCourseLastName.classList.remove('invalid');
        asStCourseFirstName.classList.remove('invalid');
        asStCoursestartDate.classList.remove('invalid');
        asStCourseendDate.classList.remove('invalid');
        asStCourseAssignment.classList.remove('invalid');
        asStCourseSubDate.classList.remove('invalid');
        asStCourseOralMark.classList.remove('invalid');
        asStCourseTotalMark.classList.remove('invalid');
        errAssignmentStudentCourse.innerText = 'Please choose course';
        return false;
    }
    else if (asStCoursestartDate.value === '' || yearStart < 2020 || monthStart == 0 || monthStart < 12 || dayStart < 0 || dayStart > 31) {
        asStCoursestartDate.classList.add('invalid');
        asStCourseSubject.classList.remove('invalid');
        asStCoursedateOfBirth.classList.remove('invalid');
        asStCourseLastName.classList.remove('invalid');
        asStCourseFirstName.classList.remove('invalid');
        asStCourseendDate.classList.remove('invalid');
        asStCourseAssignment.classList.remove('invalid');
        asStCourseSubDate.classList.remove('invalid');
        asStCourseOralMark.classList.remove('invalid');
        asStCourseTotalMark.classList.remove('invalid');
        errAssignmentStudentCourse.innerText = 'Start Date has to be set and cant be before next month';
        return false;
    }
    else if (asStCourseendDate.value === '' || yearEnd < 2021 || monthEnd == 0 || monthEnd < 3 || dayEnd < 0 || dayEnd > 31) {
        asStCourseendDate.classList.add('invalid');
        asStCoursestartDate.classList.remove('invalid');
        asStCourseSubject.classList.remove('invalid');
        asStCoursedateOfBirth.classList.remove('invalid');
        asStCourseLastName.classList.remove('invalid');
        asStCourseFirstName.classList.remove('invalid');
        asStCourseAssignment.classList.remove('invalid');
        asStCourseSubDate.classList.remove('invalid');
        asStCourseOralMark.classList.remove('invalid');
        asStCourseTotalMark.classList.remove('invalid');
        errAssignmentStudentCourse.innerText = 'End Date has to be at least three months after the start';
        return false;
    }
    else if (!asStCoursePartType.checked && !asStCourseFullType.checked) {
        errAssignmentStudentCourse.innerText = 'Choose a course type';
        asStCourseendDate.classList.remove('invalid');
        asStCoursestartDate.classList.remove('invalid');
        asStCourseSubject.classList.remove('invalid');
        asStCoursedateOfBirth.classList.remove('invalid');
        asStCourseLastName.classList.remove('invalid');
        asStCourseFirstName.classList.remove('invalid');
        asStCourseAssignment.classList.remove('invalid');
        asStCourseSubDate.classList.remove('invalid');
        asStCourseOralMark.classList.remove('invalid');
        asStCourseTotalMark.classList.remove('invalid');
        return false;
    }
    else if (asStCourseAssignment.value === null || asStCourseAssignment.value === '#') {
        asStCourseAssignment.classList.add('invalid');
        asStCourseendDate.classList.remove('invalid');
        asStCoursestartDate.classList.remove('invalid');
        asStCourseSubject.classList.remove('invalid');
        asStCoursedateOfBirth.classList.remove('invalid');
        asStCourseLastName.classList.remove('invalid');
        asStCourseFirstName.classList.remove('invalid');
        asStCourseSubDate.classList.remove('invalid');
        asStCourseOralMark.classList.remove('invalid');
        asStCourseTotalMark.classList.remove('invalid');
        errAssignmentStudentCourse.innerText = 'Please choose assignment';
        return false;
    }
    else if (asStCourseSubDate.value === '' || yearSub < 2020 || monthSub == 0 || monthSub < 12 || daySub < 0 || daySub > 31) {
        asStCourseSubDate.classList.add('invalid');
        asStCourseAssignment.classList.remove('invalid');
        asStCourseendDate.classList.remove('invalid');
        asStCoursestartDate.classList.remove('invalid');
        asStCourseSubject.classList.remove('invalid');
        asStCoursedateOfBirth.classList.remove('invalid');
        asStCourseLastName.classList.remove('invalid');
        asStCourseFirstName.classList.remove('invalid');
        asStCourseOralMark.classList.remove('invalid');
        asStCourseTotalMark.classList.remove('invalid');
        errAssignmentStudentCourse.innerText = 'Please add a Submission Date / cant be before next month';
        return false;
    }
    else if (asStCourseOralMark.value === '' || asStCourseOralMark.value > 20 || asStCourseOralMark.value < 0) {
        asStCourseOralMark.classList.add('invalid');
        asStCourseSubDate.classList.remove('invalid');
        asStCourseAssignment.classList.remove('invalid');
        asStCourseendDate.classList.remove('invalid');
        asStCoursestartDate.classList.remove('invalid');
        asStCourseSubject.classList.remove('invalid');
        asStCoursedateOfBirth.classList.remove('invalid');
        asStCourseLastName.classList.remove('invalid');
        asStCourseFirstName.classList.remove('invalid');
        asStCourseTotalMark.classList.remove('invalid');
        errAssignmentStudentCourse.innerText = 'Define the oral mark value up to 20';
        return false;
    }
    else if (asStCourseTotalMark.value === '' || asStCourseTotalMark.value < 80 || asStCourseTotalMark.value > 100) {
        asStCourseTotalMark.classList.add('invalid');
        asStCourseOralMark.classList.remove('invalid');
        asStCourseSubDate.classList.remove('invalid');
        asStCourseAssignment.classList.remove('invalid');
        asStCourseendDate.classList.remove('invalid');
        asStCoursestartDate.classList.remove('invalid');
        asStCourseSubject.classList.remove('invalid');
        asStCoursedateOfBirth.classList.remove('invalid');
        asStCourseLastName.classList.remove('invalid');
        asStCourseFirstName.classList.remove('invalid');
        errAssignmentStudentCourse.innerText = 'Define the total mark value between 80 and 100';
        return false;
    }
    else if (parseInt(asStCourseTotalMark.value) + parseInt(asStCourseOralMark.value) !== 100) {
        asStCourseTotalMark.classList.add('invalid');
        asStCourseOralMark.classList.add('invalid');
        asStCourseSubDate.classList.remove('invalid');
        asStCourseAssignment.classList.remove('invalid');
        asStCourseendDate.classList.remove('invalid');
        asStCoursestartDate.classList.remove('invalid');
        asStCourseSubject.classList.remove('invalid');
        asStCoursedateOfBirth.classList.remove('invalid');
        asStCourseLastName.classList.remove('invalid');
        asStCourseFirstName.classList.remove('invalid');
        errAssignmentStudentCourse.innerText = 'oral and total mark have to add up to 100';
        return false;
    }
    else {
        return true;
    }
}


