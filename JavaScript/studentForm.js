//----------------------Variables for the Student Form---------------------------

const submitStudentBtn = document.querySelector('.btn-student');
const editStudentBtn = document.querySelector('.btn-editStudent');
const studentFirstName = document.getElementById('stfirstname');
const studentLastName = document.getElementById('stlastname');
const dateOfBirth = document.getElementById('birthday');
const upfrontTuition = document.getElementById('upfront');
const monthlyTuition = document.getElementById('monthly');
const editStudent = document.getElementById('editStudent');
let studentArray = [];

// ---------------------Student Class to create Student Objects-------------------

class Student {
    constructor(firstName, lastName, birthday, tuition) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.birthday = birthday;
        this.tuition = tuition;
    }
}

//-----------------------Storing Data from the Student Form input into localStorage after form Validation-------------

function storeStudentData() {
    tuitionRadio = document.querySelector('input[name="tuition"]:checked');
    validateStudentForm();
    if (validateStudentForm()) {
        const Student1 = new Student(studentFirstName.value, studentLastName.value, dateOfBirth.value, tuitionRadio.value);
        studentArray.push(Student1);
        updateSavedColumns();
        alert('submitted succesfully');
    } else {
        console.log('wrong input');
    }

}

submitStudentBtn.addEventListener('click', storeStudentData);

//---------------------------Edit & Update already submited Student Data-----------------------------

function EditStudentDom() {
    if (editStudent.value !== 'empty') {
        let y = editStudent.selectedIndex - 1;
        studentFirstName.value = studentArray[y].firstName;
        studentLastName.value = studentArray[y].lastName;
        dateOfBirth.value = studentArray[y].birthday;
        if (studentArray[y].tuition === 'Pay Upfront') {
            upfrontTuition.checked = true;
        } else {
            monthlyTuition.checked = true;
        }
        submitStudentBtn.style.display = 'none';
        editStudentBtn.style.display = 'block';
    }
    else if (editStudent.value === 'empty') {
        submitStudentBtn.style.display = 'block';
        editStudentBtn.style.display = 'none';
    }
}

function UpdateStudentDom() {
    console.log('entered func');
    let y = editStudent.selectedIndex - 1;
    validateStudentForm();
    if (validateStudentForm()) {
        studentArray[y].firstName = studentFirstName.value;
        studentArray[y].lastName = studentLastName.value;
        studentArray[y].birthday = dateOfBirth.value;
        if (upfrontTuition.checked) {
            studentArray[y].tuition = 'Pay Upfront';
        } else {
            studentArray[y].tuition = 'Pay Monthly';
        }
        updateSavedColumns();
        alert('updated succesfully');

    }
}

editStudentBtn.style.display = 'none';
editStudent.addEventListener('change', EditStudentDom);
editStudentBtn.addEventListener('click', UpdateStudentDom);

//------------------------- Validation for the Student Form----------------------------

function validateStudentForm() {
    const birthday = dateOfBirth.value;
    const parts = birthday.split("-");
    const day = parseInt(parts[2], 10);
    const month = parseInt(parts[1], 10);
    const year = parseInt(parts[0], 10);
    if (studentFirstName.value === null || studentFirstName.value === '') {
        studentFirstName.placeholder = 'please fill out';
        studentFirstName.classList.add('invalid');
        return false;
    }
    else if (studentLastName.value === null || studentLastName.value === '') {
        studentLastName.placeholder = 'please fill out';
        studentLastName.classList.add('invalid');
        return false;
    }
    else if (dateOfBirth.value === '' || year < 1950 || year > 2001 || month == 0 || month > 12 || day < 0 || day > 31) {
        dateOfBirth.classList.add('invalid');
        return false;
    }
    else {
        return true;
    }
}
