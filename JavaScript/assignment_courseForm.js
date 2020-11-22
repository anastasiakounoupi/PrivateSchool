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
const assignmentCourseForm = document.getElementById('assignmentCourseForm');
const errAssignmentCourse = document.querySelector('.error');

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
    if (validateAssignmentperCourseForm()) {
        const AssignmentCourse1 = new AssignmentperCourse(asCourseAssignment.value, asCourseSubDate.value, asCourseOralMark.value, asCourseTotalMark.value, asCourseSubject.value, asCoursestartDate.value, asCourseendDate.value, asCourseTypeRadio.value);
        asPerCourseArray.push(AssignmentCourse1);
        assignmentCourseForm.submit();
        updateSavedColumns();
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
    let y = editAssignmentCourse.selectedIndex - 1;
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
        assignmentCourseForm.submit();
        updateSavedColumns();
    }
}

editAssignmentCourseBtn.style.display = 'none';
editAssignmentCourse.addEventListener('change', EditAssignmentCourseDom);
editAssignmentCourseBtn.addEventListener('click', UpdateAssignmentCourseDom);

//------------------------- Validation for the Assignment per Course Form----------------------------

function validateAssignmentperCourseForm() {
    const start = asCoursestartDate.value;
    const end = asCourseendDate.value;
    const partsStart = start.split("-");
    const partsEnd = end.split("-");
    const dayStart = parseInt(partsStart[2], 10);
    const monthStart = parseInt(partsStart[1], 10);
    const yearStart = parseInt(partsStart[0], 10);
    const dayEnd = parseInt(partsEnd[2], 10);
    const monthEnd = parseInt(partsEnd[1], 10);
    const yearEnd = parseInt(partsEnd[0], 10);
    const sub = asCourseSubDate.value;
    const partsSub = sub.split("-");
    const daySub = parseInt(partsSub[2], 10);
    const monthSub = parseInt(partsSub[1], 10);
    const yearSub = parseInt(partsSub[0], 10);
    if (asCourseSubject.value === null || asCourseSubject.value === '#') {
        asCourseSubject.classList.add('invalid');
        asCoursestartDate.classList.remove('invalid');
        asCourseendDate.classList.remove('invalid');
        asCourseAssignment.classList.remove('invalid');
        asCourseSubDate.classList.remove('invalid');
        asCourseOralMark.classList.remove('invalid');
        asCourseTotalMark.classList.remove('invalid');
        errAssignmentCourse.innerText = 'Please choose course';
        return false;
    }
    else if (asCoursestartDate.value === '' || yearStart < 2020 || monthStart == 0 || monthStart < 12 || dayStart < 0 || dayStart > 31) {
        asCoursestartDate.classList.add('invalid');
        asCourseSubject.classList.remove('invalid');
        asCourseendDate.classList.remove('invalid');
        asCourseAssignment.classList.remove('invalid');
        asCourseSubDate.classList.remove('invalid');
        asCourseOralMark.classList.remove('invalid');
        asCourseTotalMark.classList.remove('invalid');
        errAssignmentCourse.innerText = 'Please choose course';
        errAssignmentCourse.innerText = 'Start Date has to be set and cant be before next month';
        return false;
    }
    else if (asCourseendDate.value === '' || yearEnd < 2021 || monthEnd == 0 || monthEnd < 3 || dayEnd < 0 || dayEnd > 31) {
        asCourseendDate.classList.add('invalid');
        asCoursestartDate.classList.remove('invalid');
        asCourseSubject.classList.remove('invalid');
        asCourseAssignment.classList.remove('invalid');
        asCourseSubDate.classList.remove('invalid');
        asCourseOralMark.classList.remove('invalid');
        asCourseTotalMark.classList.remove('invalid');
        errAssignmentCourse.innerText = 'End Date has to be at least three months after the start';
        return false;
    }
    else if (!asCoursePartType.checked && !asCourseFullType.checked) {
        errAssignmentCourse.innerText = 'Choose a course type';
        asCourseAssignment.classList.remove('invalid');
        asCourseendDate.classList.remove('invalid');
        asCoursestartDate.classList.remove('invalid');
        asCourseSubject.classList.remove('invalid');
        asCourseSubDate.classList.remove('invalid');
        asCourseOralMark.classList.remove('invalid');
        asCourseTotalMark.classList.remove('invalid');
        return false;
    }
    else if (asCourseAssignment.value === null || asCourseAssignment.value === '#') {
        asCourseAssignment.classList.add('invalid');
        asCourseendDate.classList.remove('invalid');
        asCoursestartDate.classList.remove('invalid');
        asCourseSubject.classList.remove('invalid');
        asCourseSubDate.classList.remove('invalid');
        asCourseOralMark.classList.remove('invalid');
        asCourseTotalMark.classList.remove('invalid');
        errAssignmentCourse.innerText = 'Please choose assignment';
        return false;
    }
    else if (asCourseSubDate.value === '' || yearSub < 2020 || monthSub == 0 || monthSub < 12 || daySub < 0 || daySub > 31) {
        asCourseSubDate.classList.add('invalid');
        asCourseAssignment.classList.remove('invalid');
        asCourseendDate.classList.remove('invalid');
        asCoursestartDate.classList.remove('invalid');
        asCourseSubject.classList.remove('invalid');
        asCourseOralMark.classList.remove('invalid');
        asCourseTotalMark.classList.remove('invalid');
        errAssignmentCourse.innerText = 'Please add a Submission Date / cant be before next month';
        return false;
    }
    else if (asCourseOralMark.value === '' || asCourseOralMark.value > 20 || asCourseOralMark.value < 0) {
        asCourseOralMark.classList.add('invalid');
        asCourseSubDate.classList.remove('invalid');
        asCourseAssignment.classList.remove('invalid');
        asCourseendDate.classList.remove('invalid');
        asCoursestartDate.classList.remove('invalid');
        asCourseSubject.classList.remove('invalid');
        asCourseTotalMark.classList.remove('invalid');
        errAssignmentCourse.innerText = 'Define the oral mark value up to 20';
        return false;
    }
    else if (asCourseTotalMark.value === '' || asCourseTotalMark.value < 80 || asCourseTotalMark.value > 100) {
        asCourseTotalMark.classList.add('invalid');
        asCourseOralMark.classList.remove('invalid');
        asCourseSubDate.classList.remove('invalid');
        asCourseAssignment.classList.remove('invalid');
        asCourseendDate.classList.remove('invalid');
        asCoursestartDate.classList.remove('invalid');
        asCourseSubject.classList.remove('invalid');
        errAssignmentCourse.innerText = 'Define the total mark value between 80 and 100';
        return false;
    }
    else if (parseInt(asCourseTotalMark.value) + parseInt(asCourseOralMark.value) !== 100) {
        asCourseTotalMark.classList.add('invalid');
        asCourseOralMark.classList.add('invalid');
        asCourseSubDate.classList.remove('invalid');
        asCourseAssignment.classList.remove('invalid');
        asCourseendDate.classList.remove('invalid');
        asCoursestartDate.classList.remove('invalid');
        asCourseSubject.classList.remove('invalid');
        errAssignmentCourse.innerText = 'oral and total mark have to add up to 100';
        return false;
    }
    else {
        errAssignmentCourse.innerText = '';
        return true;
    }
}

