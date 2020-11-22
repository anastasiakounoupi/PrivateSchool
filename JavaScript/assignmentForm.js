//----------------------Variables for the Assignment Form---------------------------
const submitAssignmentBtn = document.querySelector('.btn-assignment');
const editAssignmentBtn = document.querySelector('.btn-editAssignment');
const assignment = document.getElementById('assignment');
const subDate = document.getElementById('subDate');
const totalMark = document.getElementById('totalMark');
const oralMark = document.getElementById('oralMark');
const editAssignment = document.getElementById('editAssignment');
const errAssignment = document.querySelector('.error');
const assignmentForm = document.getElementById('assignmentForm');
// ---------------------Assignment Class to create Assignment Objects-------------------
class Assignment {
    constructor(subject, subDate, oralMark, totalMark) {
        this.subject = subject;
        this.subDate = subDate;
        this.oralMark = oralMark;
        this.totalMark = totalMark;
    }
}
//-----------------------Storing Data from the Assignment Form input into localStorage after form Validation-------------
function storeAssignmentData() {

    if (validateAssignmentForm()) {
        const Assignment1 = new Assignment(assignment.value, subDate.value, oralMark.value, totalMark.value);
        assignmentArray.push(Assignment1);
        assignmentForm.submit();
        updateSavedColumns();
    } else {
        console.log('wrong input');
    }
}

submitAssignmentBtn.addEventListener('click', storeAssignmentData);

//---------------------------Edit & Update already submited Assignment Data-----------------------------
function EditAssignmentDom() {
    if (editAssignment.value !== 'empty') {
        let y = editAssignment.selectedIndex - 1;
        assignment.value = assignmentArray[y].subject;
        subDate.value = assignmentArray[y].subDate;
        oralMark.value = assignmentArray[y].oralMark;
        totalMark.value = assignmentArray[y].totalMark;
        submitAssignmentBtn.style.display = 'none';
        editAssignmentBtn.style.display = 'block';
    }
    else if (editAssignment.value === 'empty') {
        submitAssignmentBtn.style.display = 'block';
        editAssignmentBtn.style.display = 'none';
    }
}

function UpdateAssignmentDom() {
    let y = editAssignment.selectedIndex - 1;
    if (validateAssignmentForm()) {
        assignmentArray[y].subject = assignment.value;
        assignmentArray[y].subDate = subDate.value;
        assignmentArray[y].oralMark = oralMark.value;
        assignmentArray[y].totalMark = totalMark.value;
        assignmentForm.submit();
        updateSavedColumns();
    } else {
        console.log('wrong input');
    }
}

editAssignmentBtn.style.display = 'none';
editAssignment.addEventListener('change', EditAssignmentDom);
editAssignmentBtn.addEventListener('click', UpdateAssignmentDom);
//------------------------- Validation for the Assignment Form----------------------------

function validateAssignmentForm() {
    const sub = subDate.value;
    const partsSub = sub.split("-");
    const daySub = parseInt(partsSub[2], 10);
    const monthSub = parseInt(partsSub[1], 10);
    const yearSub = parseInt(partsSub[0], 10);
    if (assignment.value === null || assignment.value === '#') {
        assignment.classList.add('invalid');
        subDate.classList.remove('invalid');
        oralMark.classList.remove('invalid');
        totalMark.classList.remove('invalid');
        errAssignment.innerText = 'Please choose assignment';
        return false;
    }
    else if (subDate.value === '' || yearSub < 2020 || monthSub == 0 || monthSub < 12 || daySub < 0 || daySub > 31) {
        subDate.classList.add('invalid');
        assignment.classList.remove('invalid');
        oralMark.classList.remove('invalid');
        totalMark.classList.remove('invalid');
        errAssignment.innerText = 'Please add a Submission Date / cant be before next month';
        return false;
    }
    else if (oralMark.value === '' || oralMark.value > 20 || oralMark.value < 0) {
        oralMark.classList.add('invalid');
        subDate.classList.remove('invalid');
        assignment.classList.remove('invalid');
        totalMark.classList.remove('invalid');
        errAssignment.innerText = 'Define the oral mark value up to 20';
        return false;
    }
    else if (totalMark.value === '' || totalMark.value < 80 || totalMark.value > 100) {
        totalMark.classList.add('invalid');
        oralMark.classList.remove('invalid');
        subDate.classList.remove('invalid');
        assignment.classList.remove('invalid');
        errAssignment.innerText = 'Define the total mark value between 80 and 100';
        return false;
    }
    else if (parseInt(totalMark.value) + parseInt(oralMark.value) !== 100) {
        totalMark.classList.add('invalid');
        oralMark.classList.add('invalid');
        subDate.classList.remove('invalid');
        assignment.classList.remove('invalid');
        errAssignment.innerText = 'oral and total mark have to add up to 100';
        return false;
    }
    else {
        errAssignment.innerText = '';
        return true;
    }
}

