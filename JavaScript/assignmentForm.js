//----------------------Variables for the Assignment Form---------------------------
const submitAssignmentBtn = document.querySelector('.btn-assignment');
const editAssignmentBtn = document.querySelector('.btn-editAssignment');
const assignment = document.getElementById('assignment');
const subDate = document.getElementById('subDate');
const totalMark = document.getElementById('totalMark');
const oralMark = document.getElementById('oralMark');
const editAssignment = document.getElementById('editAssignment');
let assignmentArray = [];

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
    validateAssignmentForm();
    if (validateAssignmentForm()) {
        const Assignment1 = new Assignment(assignment.value, subDate.value, oralMark.value, totalMark.value);
        assignmentArray.push(Assignment1);
        updateSavedColumns();
        alert('submitted succesfully');
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
    console.log('entered func');
    let y = editAssignment.selectedIndex - 1;
    validateAssignmentForm();
    if (validateAssignmentForm()) {
        assignmentArray[y].subject = assignment.value;
        assignmentArray[y].subDate = subDate.value;
        assignmentArray[y].oralMark = oralMark.value;
        assignmentArray[y].totalMark = totalMark.value;

        updateSavedColumns();
        alert('updated succesfully');
    }
}

editAssignmentBtn.style.display = 'none';
editAssignment.addEventListener('change', EditAssignmentDom);
editAssignmentBtn.addEventListener('click', UpdateAssignmentDom);
//------------------------- Validation for the Assignment Form----------------------------

function validateAssignmentForm() {
    if (assignment.value === null || assignment.value === '#') {
        assignment.classList.add('invalid');
        return false;
    }
    else if (subDate.value === '') {
        subDate.classList.add('invalid');
        return false;
    }
    else if (oralMark.value === '' || oralMark.value > 20) {
        oralMark.classList.add('invalid');
        return false;
    }
    else if (totalMark.value === '' || totalMark.value < 80 || totalMark.value > 100) {
        totalMark.classList.add('invalid');
        return false;
    }
    else {
        return true;
    }
}