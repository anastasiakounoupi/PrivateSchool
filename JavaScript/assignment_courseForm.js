//----------------------Variables for the Assignment per Course Form---------------------------
const submitAsCourseBtn = document.querySelector('.btn-assignment_course');
const editAssignmentCourseBtn = document.querySelector('.btn-editassignment_course');
const asCourseAssignment = document.getElementById('assignment_assignmentC');
const asCourseSubDate = document.getElementById('subDate_assignmentC');
const asCourseTotalMark = document.getElementById('totalMark_assignmentC');
const asCourseOralMark = document.getElementById('oralMark_assignmentC');
const asCourseSubject = document.getElementById('stream_assignmentC');
const asCoursestartDate = document.getElementById('startDate_assignmentC');
const asCourseendDate = document.getElementById('endDate_assignmentC');
const asCoursePartType = document.getElementById('part_assignmentC');
const asCourseFullType = document.getElementById('full_assignmentC');
const editAssignmentCourse = document.getElementById('editassignment-course');
let asPerCourseArray = [];

// ---------------------Assignment per Course Class to create Assignment per Course Objects-------------------
class AssignmentperCourse {
    constructor(subject, subDate, oralMark, totalMark, stream, startDate, endDate, type) {
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

//-----------------------Storing Data from the Assignment per Course Form input into localStorage after form Validation-------------
function storeAsCourseData() {
    asCourseTypeRadio = document.querySelector('input[name="type_assignmentC"]:checked');
    validateAssignmentperCourseForm();
    if (validateAssignmentperCourseForm()) {
        const AssignmentCourse1 = new AssignmentperCourse(asCourseAssignment.value, asCourseSubDate.value, asCourseOralMark.value, asCourseTotalMark.value, asCourseSubject.value, asCoursestartDate.value, asCourseendDate.value, asCourseTypeRadio.value);
        asPerCourseArray.push(AssignmentCourse1);
        updateSavedColumns();
        alert('submitted succesfully');
    } else {
        console.log('wrong input');
    }
}

submitAsCourseBtn.addEventListener('click', storeAsCourseData);

//---------------------------Edit & Update already submited Assignment per Course Data-----------------------------
function EditAssignmentCourseDom() {
    if (editAssignmentCourse.value !== 'empty') {
        let y = editAssignmentCourse.selectedIndex - 1;
        asCourseAssignment.value = asPerCourseArray[y].subject;
        asCourseSubDate.value = asPerCourseArray[y].subDate;
        asCourseOralMark.value = asPerCourseArray[y].oralMark;
        asCourseTotalMark.value = asPerCourseArray[y].totalMark;
        asCourseSubject.value = asPerCourseArray[y].stream;
        asCoursestartDate.value = asPerCourseArray[y].startDate;
        asCourseendDate.value = asPerCourseArray[y].endDate;
        if (asPerCourseArray[y].type === 'Part-Time') {
            asCoursePartType.checked = true;
        } else {
            asCourseFullType.checked = true;
        }
        submitAsCourseBtn.style.display = 'none';
        editAssignmentCourseBtn.style.display = 'block';
    }
    else if (editAssignmentCourse.value === 'empty') {
        submitAsCourseBtn.style.display = 'block';
        editAssignmentCourseBtn.style.display = 'none';
    }
}

function UpdateAssignmentCourseDom() {
    console.log('entered func');
    let y = editAssignmentCourse.selectedIndex - 1;
    validateAssignmentperCourseForm();
    if (validateAssignmentperCourseForm()) {
        asPerCourseArray[y].subject = asCourseAssignment.value;
        asPerCourseArray[y].subDate = asCourseSubDate.value;
        asPerCourseArray[y].oralMark = asCourseOralMark.value;
        asPerCourseArray[y].totalMark = asCourseTotalMark.value;
        asPerCourseArray[y].stream = asCourseSubject.value;
        asPerCourseArray[y].startDate = asCoursestartDate.value;
        asPerCourseArray[y].endDate = asCourseendDate.value;
        if (asCoursePartType.checked) {
            asPerCourseArray[y].type = 'Part-Time';
        } else {
            asPerCourseArray[y].type = 'Full-Time';
        }
        updateSavedColumns();
        alert('updated succesfully');

    }
}

editAssignmentCourseBtn.style.display = 'none';
editAssignmentCourse.addEventListener('change', EditAssignmentCourseDom);
editAssignmentCourseBtn.addEventListener('click', UpdateAssignmentCourseDom);

//------------------------- Validation for the Assignment per Course Form----------------------------

function validateAssignmentperCourseForm() {
    if (asCourseSubject.value === null || asCourseSubject.value === '#') {
        asCourseSubject.classList.add('invalid');
        return false;
    }
    else if (asCoursestartDate.value === '') {
        asCoursestartDate.classList.add('invalid');
        return false;
    }
    else if (asCourseendDate.value === '') {
        asCourseendDate.classList.add('invalid');
        return false;
    }
    else if (asCourseAssignment.value === null || asCourseAssignment.value === '#') {
        asCourseAssignment.classList.add('invalid');
        return false;
    }
    else if (asCourseSubDate.value === '') {
        asCourseSubDate.classList.add('invalid');
        return false;
    }
    else if (asCourseOralMark.value === '' || asCourseOralMark.value > 20) {
        asCourseOralMark.classList.add('invalid');
        return false;
    }
    else if (asCourseTotalMark.value === '' || asCourseTotalMark.value < 80 || asCourseTotalMark.value > 100) {
        asCourseTotalMark.classList.add('invalid');
        return false;
    }
    else {
        return true;
    }
}

