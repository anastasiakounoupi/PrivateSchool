const submitTrainerBtn = document.querySelector('.btn-trainer');
const submitStudentBtn = document.querySelector('.btn-student');
const submitCourseBtn = document.querySelector('.btn-course');
const submitAssignmentBtn = document.querySelector('.btn-assignment');
const submitTrainerCourseBtn = document.querySelector('.btn-trainer_course');
const submitStudentCourseBtn = document.querySelector('.btn-student_course');
const submitAsCourseBtn = document.querySelector('.btn-assignment_course');
const submitAsStCourseBtn = document.querySelector('.btn_asstC');

const trainerFirstName = document.getElementById('firstname');
const trainerLastName = document.getElementById('lastname');
const subject = document.getElementById('subject');
const trainerList = document.getElementById("trainerul");

const studentFirstName = document.getElementById('stfirstname');
const studentLastName = document.getElementById('stlastname');
const dateOfBirth = document.getElementById('birthday');
const studentList = document.getElementById("studentul");

const stream = document.getElementById('stream');
const startDate = document.getElementById('startDate');
const endDate = document.getElementById('endDate');
const courseList = document.getElementById("courseul");

const assignment = document.getElementById('assignment');
const subDate = document.getElementById('subDate');
const totalMark = document.getElementById('totalMark');
const oralMark = document.getElementById('oralMark');
const assignList = document.getElementById("assignmentul");

const trainerCourseFirstName = document.getElementById('firstname_trainerC');
const trainerCourseLastName = document.getElementById('lastname_trainerC');
const trainerCourseSubject = document.getElementById('stream_trainerC');
const trainerCoursestartDate = document.getElementById('startDate_trainerC');
const trainerCourseendDate = document.getElementById('endDate_trainerC');

const studentCourseFirstName = document.getElementById('stfirstname_studentC');
const studentCourseLastName = document.getElementById('stlastname_studentC');
const studentCoursedateOfBirth = document.getElementById('birthday_studentC');
const studentCourseSubject = document.getElementById('stream_studentC');
const studentCoursestartDate = document.getElementById('startDate_studentC');
const studentCourseendDate = document.getElementById('endDate_studentC');

const asCourseAssignment = document.getElementById('assignment_assignmentC');
const asCourseSubDate = document.getElementById('subDate_assignmentC');
const asCourseTotalMark = document.getElementById('totalMark_assignmentC');
const asCourseOralMark = document.getElementById('oralMark_assignmentC');
const asCourseSubject = document.getElementById('stream_assignmentC');
const asCoursestartDate = document.getElementById('startDate_assignmentC');
const asCourseendDate = document.getElementById('endDate_assignmentC');

const asStCourseFirstName = document.getElementById('stfirstname_asstC');
const asStCourseLastName = document.getElementById('stlastname_asstC');
const asStCoursedateOfBirth = document.getElementById('birthday_asstC');
const asStCourseAssignment = document.getElementById('assignment_asstC');
const asStCourseSubDate = document.getElementById('subDate_asstC');
const asStCourseTotalMark = document.getElementById('totalMark_asstC');
const asStCourseOralMark = document.getElementById('oralMark_asstC');
const asStCourseSubject = document.getElementById('stream_asstC');
const asStCoursestartDate = document.getElementById('startDate_asstC');
const asStCourseendDate = document.getElementById('endDate_asstC');

const trainerCourse = document.getElementById('trainerPerCourse');
const studentpCourse = document.getElementById('studentPerCourse');
const assignCourse = document.getElementById('assignPerCourse');
const assignStCourse = document.getElementById('assignPerStudentperCourse');

const label = document.querySelector('.notvalid')

let tuitionRadio;
let typeRadio;
let trainerCourseTypeRadio;
let studentCourseTuitionRadio;
let studentCourseTypeRadio;
let asCourseTypeRadio;
let asStCourseTuitionRadio;
let asStCourseTypeRadio;

let trainerArray = [];
let studentArray = [];
let courseArray = [];
let assignmentArray = [];
let trainerPerCourseArray = [];
let studentPerCourseArray = [];
let asPerCourseArray = [];
let asStPerCourseArray = [];
let listArrays = [];

class Trainer {
    constructor(firstName, lastName, subject) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.subject = subject;
    }
}

class Student {
    constructor(firstName, lastName, birthday, tuition) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.birthday = birthday;
        this.tuition = tuition;
    }
}

class Course {
    constructor(stream, startDate, endDate, type) {
        this.stream = stream;
        this.startDate = startDate;
        this.endDate = endDate;
        this.type = type;
    }
}

class Assignment {
    constructor(subject, subDate, oralMark, totalMark) {
        this.subject = subject;
        this.subDate = subDate;
        this.oralMark = oralMark;
        this.totalMark = totalMark;
    }
}

class TrainerperCourse {
    constructor(firstName, lastName, stream, startDate, endDate, type) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.stream = stream;
        this.startDate = startDate;
        this.endDate = endDate;
        this.type = type;
    }
}

class StudentperCourse {
    constructor(firstName, lastName, birthday, tuition, stream, startDate, endDate, type) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.birthday = birthday;
        this.tuition = tuition;
        this.stream = stream;
        this.startDate = startDate;
        this.endDate = endDate;
        this.type = type;
    }
}

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

function storeTrainerData() {
    validateTrainerForm();
    if (validateTrainerForm()) {
        const Trainer1 = new Trainer(trainerFirstName.value, trainerLastName.value, subject.value);
        trainerArray.push(Trainer1);
        updateSavedColumns();
        alert('submitted succesfully');
    } else {
        console.log('wrong input');
    }
}

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

function storeTrainerCourseData() {
    trainerCourseTypeRadio = document.querySelector('input[name="type_trainerC"]:checked');
    validateTrainerperCourseForm();
    if (validateTrainerperCourseForm()) {
        const TrainerCourse1 = new TrainerperCourse(trainerCourseFirstName.value, trainerCourseLastName.value, trainerCourseSubject.value, trainerCoursestartDate.value, trainerCourseendDate.value, trainerCourseTypeRadio.value);
        trainerPerCourseArray.push(TrainerCourse1);
        updateSavedColumns();
        alert('submitted succesfully');
    } else {
        console.log('wrong input');
    }
}

function storeStudentCourseData() {
    studentCourseTypeRadio = document.querySelector('input[name="type_studentC"]:checked');
    studentCourseTuitionRadio = document.querySelector('input[name="tuition_studentC"]:checked');
    validateStudentperCourseForm();
    if (validateStudentperCourseForm()) {
        const StudentCourse1 = new StudentperCourse(studentCourseFirstName.value, studentCourseLastName.value, studentCoursedateOfBirth.value, studentCourseTuitionRadio.value, studentCourseSubject.value, studentCoursestartDate.value, studentCourseendDate.value, studentCourseTypeRadio.value);
        studentPerCourseArray.push(StudentCourse1);
        updateSavedColumns();
        alert('submitted succesfully');
    } else {
        console.log('wrong input');
    }

}

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
//----------------------------------localSorage SetUp-------------------------------------------

// Get Arrays from localStorage
function getSavedColumns() {
    try {
        trainerArray = JSON.parse(localStorage.trainerData);
        studentArray = JSON.parse(localStorage.studentData);
        courseArray = JSON.parse(localStorage.courseData);
        assignmentArray = JSON.parse(localStorage.assignmentData);
        trainerPerCourseArray = JSON.parse(localStorage.trainerpercourseData);
        studentPerCourseArray = JSON.parse(localStorage.studentpercourseData);
        asPerCourseArray = JSON.parse(localStorage.aspercourseData);
        asStPerCourseArray = JSON.parse(localStorage.asstpercourseData);
    } catch (err) {
        console.log('no data in local storage');
    }
}

// Set localStorage Arrays
function updateSavedColumns() {
    listArrays = [trainerArray, studentArray, courseArray, assignmentArray, trainerPerCourseArray, studentPerCourseArray, asPerCourseArray, asStPerCourseArray];
    const arrayNames = ['trainer', 'student', 'course', 'assignment', 'trainerpercourse', 'studentpercourse', 'aspercourse', 'asstpercourse'];
    arrayNames.forEach((arrayName, index) => {
        localStorage.setItem(`${arrayName}Data`, JSON.stringify(listArrays[index]));
    });
}

getSavedColumns();

//--------------------------UpDate DOM with the Form Data---------------------------
function createDOMElement(myArray) {
    for (let i = 0; i < myArray.length; i++) {
        const element = document.createElement("li");
        element.classList.add('listelement');
        if (myArray === trainerArray) {
            element.innerHTML = `First Name: ${myArray[i].firstName} /Last Name: ${myArray[i].lastName} /Course: ${myArray[i].subject}`
            trainerList.appendChild(element);
        }
        else if (myArray === studentArray) {
            element.innerHTML = `First Name ${myArray[i].firstName} /Last Name: ${myArray[i].lastName} /Birthday: ${myArray[i].birthday} /Tuition ${myArray[i].tuition}`
            studentList.appendChild(element);
        }
        else if (myArray === courseArray) {
            element.innerHTML = `Course: ${myArray[i].stream} /Start-Date: ${myArray[i].startDate} /End-Date: ${myArray[i].endDate} /Type: ${myArray[i].type}`
            courseList.appendChild(element);
        }
        else if (myArray === assignmentArray) {
            element.innerHTML = `Subject: ${myArray[i].subject} /Submissin-Date: ${myArray[i].subDate} /Oral-Mark: ${myArray[i].oralMark} /Total-Mark: ${myArray[i].totalMark}`
            assignList.appendChild(element);
        }
        else if (myArray === trainerPerCourseArray) {
            element.innerHTML = `First Name: ${myArray[i].firstName} /Last Name: ${myArray[i].lastName} /Course: ${myArray[i].subject} /Course: ${myArray[i].stream} /Start-Date: ${myArray[i].startDate} /End-Date: ${myArray[i].endDate} /Type: ${myArray[i].type}`
            trainerCourse.appendChild(element);
        }
        else if (myArray === studentPerCourseArray) {
            element.innerHTML = `First Name ${myArray[i].firstName} /Last Name: ${myArray[i].lastName} /Birthday: ${myArray[i].birthday} /Tuition ${myArray[i].tuition} /Course: ${myArray[i].stream} /Start-Date: ${myArray[i].startDate} /End-Date: ${myArray[i].endDate} /Type: ${myArray[i].type}`
            studentpCourse.appendChild(element);
        }
        else if (myArray === asPerCourseArray) {
            element.innerHTML = `Subject: ${myArray[i].subject} /Submissin-Date: ${myArray[i].subDate} /Oral-Mark: ${myArray[i].oralMark} /Total-Mark: ${myArray[i].totalMark} /Course: ${myArray[i].stream} /Start-Date: ${myArray[i].startDate} /End-Date: ${myArray[i].endDate} /Type: ${myArray[i].type}`
            assignCourse.appendChild(element);
        }
        else if (myArray === asStPerCourseArray) {
            element.innerHTML = `First Name ${myArray[i].firstName} /Last Name: ${myArray[i].lastName} /Birthday: ${myArray[i].birthday} /Tuition ${myArray[i].tuition} /Subject: ${myArray[i].subject} /Submissin-Date: ${myArray[i].subDate} /Oral-Mark: ${myArray[i].oralMark} /Total-Mark: ${myArray[i].totalMark} /Course: ${myArray[i].stream} /Start-Date: ${myArray[i].startDate} /End-Date: ${myArray[i].endDate} /Type: ${myArray[i].type}`
            assignStCourse.appendChild(element);
        }
    }
}

if (trainerList, studentList, courseList, assignList) {
    createDOMElement(trainerArray);
    createDOMElement(studentArray);
    createDOMElement(courseArray);
    createDOMElement(assignmentArray);
    createDOMElement(trainerPerCourseArray);
    createDOMElement(studentPerCourseArray);
    createDOMElement(asPerCourseArray);
    createDOMElement(asStPerCourseArray);
} else {
    console.log('cannot appendchild in this document');
}
//------------------------------------------------------------------------------

if (submitTrainerBtn) {
    submitTrainerBtn.addEventListener('click', storeTrainerData);
} else if (submitStudentBtn) {
    submitStudentBtn.addEventListener('click', storeStudentData);
} else if (submitCourseBtn) {
    submitCourseBtn.addEventListener('click', storeCourseData);
} else if (submitAssignmentBtn) {
    submitAssignmentBtn.addEventListener('click', storeAssignmentData);
} else if (submitTrainerCourseBtn) {
    submitTrainerCourseBtn.addEventListener('click', storeTrainerCourseData);
} else if (submitStudentCourseBtn) {
    submitStudentCourseBtn.addEventListener('click', storeStudentCourseData);
} else if (submitAsCourseBtn) {
    submitAsCourseBtn.addEventListener('click', storeAsCourseData);
} else if (submitAsStCourseBtn) {
    submitAsStCourseBtn.addEventListener('click', storeAsStCourseData);
} else {
    console.log('btn not necessary');
}


//-----------------Validation for the Forms-------------------------------

function validateTrainerForm() {
    if (trainerFirstName.value === null || trainerFirstName.value === '') {
        trainerFirstName.placeholder = 'please fill out';
        trainerFirstName.classList.add('invalid');
        return false;
    }
    else if (trainerLastName.value === null || trainerLastName.value === '') {
        trainerLastName.placeholder = 'please fill out';
        trainerLastName.classList.add('invalid');
        return false;
    }
    else if (subject.value === null || subject.value === '#') {
        subject.classList.add('invalid');
        return false;
    }
    else {
        return true;
    }
}

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


function validateTrainerperCourseForm() {
    if (trainerCourseFirstName.value === null || trainerCourseFirstName.value === '') {
        trainerCourseFirstName.placeholder = 'please fill out';
        trainerCourseFirstName.classList.add('invalid');
        return false;
    }
    else if (trainerCourseLastName.value === null || trainerCourseLastName.value === '') {
        trainerCourseLastName.placeholder = 'please fill out';
        trainerCourseLastName.classList.add('invalid');
        return false;
    }
    else if (trainerCourseSubject.value === null || trainerCourseSubject.value === '#') {
        trainerCourseSubject.classList.add('invalid');
        return false;
    }
    else if (trainerCoursestartDate.value === '') {
        trainerCoursestartDate.classList.add('invalid');
        return false;
    }
    else if (trainerCourseendDate.value === '') {
        trainerCourseendDate.classList.add('invalid');
        return false;
    }
    else {
        return true;
    }
}

function validateStudentperCourseForm() {
    const birthday = studentCoursedateOfBirth.value;
    const parts = birthday.split("-");
    const day = parseInt(parts[2], 10);
    const month = parseInt(parts[1], 10);
    const year = parseInt(parts[0], 10);
    if (studentCourseFirstName.value === null || studentCourseFirstName.value === '') {
        studentCourseFirstName.placeholder = 'please fill out';
        studentCourseFirstName.classList.add('invalid');
        return false;
    }
    else if (studentCourseLastName.value === null || studentCourseLastName.value === '') {
        studentCourseLastName.placeholder = 'please fill out';
        studentCourseLastName.classList.add('invalid');
        return false;
    } else if (studentCoursedateOfBirth.value === '' || year < 1950 || year > 2001 || month == 0 || month > 12 || day < 0 || day > 31) {
        studentCoursedateOfBirth.classList.add('invalid');
        return false;
    }
    else if (studentCourseSubject.value === null || studentCourseSubject.value === '#') {
        studentCourseSubject.classList.add('invalid');
        return false;
    }
    else if (studentCoursestartDate.value === '') {
        studentCoursestartDate.classList.add('invalid');
        return false;
    }
    else if (studentCourseendDate.value === '') {
        studentCourseendDate.classList.add('invalid');
        return false;
    }
    else {
        return true;
    }
}

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

function clearData() {
    localStorage.clear();
    location.reload();
}