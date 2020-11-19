const submitTrainerBtn = document.querySelector('.btn-trainer');
const submitStudentBtn = document.querySelector('.btn-student');
const submitCourseBtn = document.querySelector('.btn-course');
const submitAssignmentBtn = document.querySelector('.btn-assignment');
const submitTrainerCourseBtn = document.querySelector('.btn-trainer_course');
const submitStudentCourseBtn = document.querySelector('.btn-student_course');
const submitAsCourseBtn = document.querySelector('.btn-assignment_course');
const submitAsStCourseBtn = document.querySelector('.btn_asstC');
const editTrainerBtn = document.querySelector('.btn-editTrainer');
const editStudentBtn = document.querySelector('.btn-editStudent');
const editCourseBtn = document.querySelector('.btn-editCourse');
const editAssignmentBtn = document.querySelector('.btn-editAssignment');
const editTrainerCourseBtn = document.querySelector('.btn-edittrainer_course');
const editStudentCourseBtn = document.querySelector('.btn-editstudent_course');
const editAssignmentCourseBtn = document.querySelector('.btn-editassignment_course');
const editAssignmentStudentCourseBtn = document.querySelector('.btn-editassignmentstudent_course');

const trainerFirstName = document.getElementById('firstname');
const trainerLastName = document.getElementById('lastname');
const subject = document.getElementById('subject');
const editTrainer = document.getElementById('editTrainer');
const trainerList = document.getElementById("trainerul");

const studentFirstName = document.getElementById('stfirstname');
const studentLastName = document.getElementById('stlastname');
const dateOfBirth = document.getElementById('birthday');
const upfrontTuition = document.getElementById('upfront');
const monthlyTuition = document.getElementById('monthly');
const editStudent = document.getElementById('editStudent');
const studentList = document.getElementById("studentul");

const stream = document.getElementById('stream');
const startDate = document.getElementById('startDate');
const endDate = document.getElementById('endDate');
const partType = document.getElementById('part');
const fullType = document.getElementById('full');
const editCourse = document.getElementById('editCourse');
const courseList = document.getElementById("courseul");

const assignment = document.getElementById('assignment');
const subDate = document.getElementById('subDate');
const totalMark = document.getElementById('totalMark');
const oralMark = document.getElementById('oralMark');
const editAssignment = document.getElementById('editAssignment');
const assignList = document.getElementById("assignmentul");

const trainerCourseFirstName = document.getElementById('firstname_trainerC');
const trainerCourseLastName = document.getElementById('lastname_trainerC');
const trainerCourseSubject = document.getElementById('stream_trainerC');
const trainerCoursestartDate = document.getElementById('startDate_trainerC');
const trainerCourseendDate = document.getElementById('endDate_trainerC');
const trainerCoursePartType = document.getElementById('part_trainerC');
const trainerCourseFullType = document.getElementById('full_trainerC');
const editTrainerCourse = document.getElementById('edittrainer-course');

const studentCourseFirstName = document.getElementById('stfirstname_studentC');
const studentCourseLastName = document.getElementById('stlastname_studentC');
const studentCoursedateOfBirth = document.getElementById('birthday_studentC');
const studentCourseUpfrontTuition = document.getElementById('upfront_studentC');
const studentCourseMonthlyTuition = document.getElementById('monthly_studentC');
const studentCourseSubject = document.getElementById('stream_studentC');
const studentCoursestartDate = document.getElementById('startDate_studentC');
const studentCourseendDate = document.getElementById('endDate_studentC');
const studentCoursePartType = document.getElementById('part_studentC');
const studentCourseFullType = document.getElementById('full_studentC');
const editStudentCourse = document.getElementById('editstudent-course');

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

const trainerCourse = document.getElementById('trainerPerCourse');
const studentpCourse = document.getElementById('studentPerCourse');
const assignCourse = document.getElementById('assignPerCourse');
const assignStCourse = document.getElementById('assignPerStudentperCourse');

let trainerArray = [];
let studentArray = [];
let courseArray = [];
let assignmentArray = [];
let trainerPerCourseArray = [];
let studentPerCourseArray = [];
let asPerCourseArray = [];
let asStPerCourseArray = [];
let listArrays = [];

//---------------------------Classes for the forms-------------------------------
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

//-------------------Store Data collected from inputs in localStorage---------------

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

//--------------------------UpDate DOM with the Form Data---------------------------
function createDOMElement(myArray) {
    for (let i = 0; i < myArray.length; i++) {
        // const element = document.createElement("li");
        // element.classList.add('listelement');
        const option = document.createElement("option");

        if (myArray === trainerArray) {
            option.innerHTML = `${myArray[i].firstName} ${myArray[i].lastName}`;
            option.value = `${myArray[i].firstName} ${myArray[i].lastName}`;
            editTrainer.appendChild(option);
            // element.innerHTML = `<b>First Name:</b> ${myArray[i].firstName} <br> <b>Last Name:</b> ${myArray[i].lastName} <br> <b>Subject:</b> ${myArray[i].subject}`
            // trainerList.appendChild(element);
        }
        else if (myArray === studentArray) {
            option.innerHTML = `${myArray[i].firstName} ${myArray[i].lastName}`;
            option.value = `${myArray[i].firstName} ${myArray[i].lastName}`;
            editStudent.appendChild(option);
            // element.innerHTML = `<b>First Name:</b> ${myArray[i].firstName} <br> <b>Last Name:</b> ${myArray[i].lastName} <br> <b>Birthday:</b> ${myArray[i].birthday} <br> <b>Tuition:</b> ${myArray[i].tuition}`
            // studentList.appendChild(element);
        }
        else if (myArray === courseArray) {
            option.innerHTML = `${myArray[i].stream} ${myArray[i].type}`;
            option.value = `${myArray[i].stream} ${myArray[i].type}`;
            editCourse.appendChild(option);
            // element.innerHTML = `<b>Course:</b> ${myArray[i].stream} <br> <b>Start-Date:</b> ${myArray[i].startDate} <br> <b>End-Date:</b> ${myArray[i].endDate} <br> <b>Type:</b> ${myArray[i].type}`
            // courseList.appendChild(element);
        }
        else if (myArray === assignmentArray) {
            option.innerHTML = `${myArray[i].subject} ${myArray[i].subDate}`;
            option.value = `${myArray[i].subject} ${myArray[i].subDate}`;
            editAssignment.appendChild(option);
            // element.innerHTML = `<b>Subject:</b> ${myArray[i].subject} <br> <b>Submissin-Date:</b> ${myArray[i].subDate} <br> <b>Oral-Mark:</b> ${myArray[i].oralMark} <br> <b>Total-Mark:</b> ${myArray[i].totalMark}`
            // assignList.appendChild(element);
        }
        else if (myArray === trainerPerCourseArray) {
            option.innerHTML = `${myArray[i].firstName} ${myArray[i].lastName} ${myArray[i].stream}`;
            option.value = `${myArray[i].firstName} ${myArray[i].lastName} ${myArray[i].stream}`;
            editTrainerCourse.appendChild(option);
            // element.innerHTML = `<b>First Name:</b> ${myArray[i].firstName} <br> <b>Last Name:</b>  ${myArray[i].lastName} <br> <b>Subject:</b> ${myArray[i].subject} <br> <b>Course:</b>: ${myArray[i].stream} <br> <b>Start-Date:</b>: ${myArray[i].startDate} <br> <b>End-Date:</b> ${myArray[i].endDate} <br> <b>Type:</b> ${myArray[i].type}`
            // trainerCourse.appendChild(element);
        }
        else if (myArray === studentPerCourseArray) {
            option.innerHTML = `${myArray[i].firstName} ${myArray[i].lastName} ${myArray[i].stream}`;
            option.value = `${myArray[i].firstName} ${myArray[i].lastName} ${myArray[i].stream}`;
            editStudentCourse.appendChild(option);
            // element.innerHTML = `<b>First Name:</b> ${myArray[i].firstName} <br> <b>Last Name:</b>  ${myArray[i].lastName} <br> <b>Birthday:</b> ${myArray[i].birthday} <br> <b>Tuition:</b> ${myArray[i].tuition} <br> <b>Course:</b>: ${myArray[i].stream} <br> <b>Start-Date:</b> ${myArray[i].startDate} <br> <b>End-Date:</b> ${myArray[i].endDate} <br> <b>Type:</b> ${myArray[i].type}`
            // studentpCourse.appendChild(element);
        }
        else if (myArray === asPerCourseArray) {
            option.innerHTML = `${myArray[i].subject} ${myArray[i].subDate}`;
            option.value = `${myArray[i].subject} ${myArray[i].subDate}`;
            editAssignmentCourse.appendChild(option);
            // element.innerHTML = `<b>Subject:</b> ${myArray[i].subject} <br> <b>Submissin-Date:</b> ${myArray[i].subDate} <br> <b>Oral-Mark:</b> ${myArray[i].oralMark} <br> <b>Total-Mark:</b> ${myArray[i].totalMark} <br> <b>Course:</b>: ${myArray[i].stream} <br> <b>Start-Date:</b> ${myArray[i].startDate} <br> <b>End-Date:</b> ${myArray[i].endDate} <br> <b>Type:</b> ${myArray[i].type}`
            // assignCourse.appendChild(element);
        }
        else if (myArray === asStPerCourseArray) {
            option.innerHTML = `${myArray[i].firstName} ${myArray[i].lastName} ${myArray[i].subject}`;
            option.value = `${myArray[i].firstName} ${myArray[i].lastName} ${myArray[i].subject}`;
            editAssignmentStudentCourse.appendChild(option);
            // element.innerHTML = `<b>First Name:</b> ${myArray[i].firstName} <br> <b>Last Name:</b>  ${myArray[i].lastName} <br> <b>Birthday:</b> ${myArray[i].birthday} <br> <b>Tuition:</b> ${myArray[i].tuition} <br> <b>Subject:</b> ${myArray[i].subject} <br> <b>Submissin-Date:</b> ${myArray[i].subDate} <br> <b>Oral-Mark:</b> ${myArray[i].oralMark} <br> <b>Total-Mark:</b> ${myArray[i].totalMark} <br> <b>Course:</b> ${myArray[i].stream} <b>Start-Date:</b> ${myArray[i].startDate} <b>End-Date:</b> ${myArray[i].endDate} <b>Type:</b> ${myArray[i].type}`
            // assignStCourse.appendChild(element);
        }
    }

}

// if (trainerList || editTrainer) {
//     createDOMElement(trainerArray);
// }


// if (trainerList, studentList, courseList, assignList) {
//     createDOMElement(trainerArray);
//     createDOMElement(studentArray);
//     createDOMElement(courseArray);
//     createDOMElement(assignmentArray);
//     createDOMElement(trainerPerCourseArray);
//     createDOMElement(studentPerCourseArray);
//     createDOMElement(asPerCourseArray);
//     createDOMElement(asStPerCourseArray);
// } else {
//     console.log('cannot appendchild in this document');
// }

//-------------------Edit & Update the Data -----------------------------

//-------Edit & Update Trainer-------
function EditTrainerDom() {
    if (editTrainer.value !== 'empty') {
        let y = editTrainer.selectedIndex - 1;
        trainerFirstName.value = trainerArray[y].firstName;
        trainerLastName.value = trainerArray[y].lastName;
        subject.value = trainerArray[y].subject;
        submitTrainerBtn.style.display = 'none';
        editTrainerBtn.style.display = 'block';
    }
    else if (editTrainer.value === 'empty') {
        submitTrainerBtn.style.display = 'block';
        editTrainerBtn.style.display = 'none';
    }
}

function UpdateTrainerDom() {
    console.log('entered func');
    let y = editTrainer.selectedIndex - 1;
    validateTrainerForm();
    if (validateTrainerForm()) {
        trainerArray[y].firstName = trainerFirstName.value
        trainerArray[y].lastName = trainerLastName.value
        trainerArray[y].subject = subject.value
        updateSavedColumns();
        alert('updated succesfully');

    }
}

if (editTrainer) {
    createDOMElement(trainerArray);
    editTrainerBtn.style.display = 'none';
    editTrainer.addEventListener('change', EditTrainerDom);
    editTrainerBtn.addEventListener('click', UpdateTrainerDom);
}

//-------Edit & Update Student-------
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

if (editStudent) {
    createDOMElement(studentArray);
    editStudentBtn.style.display = 'none';
    editStudent.addEventListener('change', EditStudentDom);
    editStudentBtn.addEventListener('click', UpdateStudentDom);
}

//-------Edit & Update Course-------
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

if (editCourse) {
    createDOMElement(courseArray);
    editCourseBtn.style.display = 'none';
    editCourse.addEventListener('change', EditCourseDom);
    editCourseBtn.addEventListener('click', UpdateCourseDom);
}

//-------Edit & Update Assignment-------
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

if (editAssignment) {
    createDOMElement(assignmentArray);
    editAssignmentBtn.style.display = 'none';
    editAssignment.addEventListener('change', EditAssignmentDom);
    editAssignmentBtn.addEventListener('click', UpdateAssignmentDom);
}

//-------Edit & Update Trainer per Course-------
function EditTrainerCourseDom() {
    if (editTrainerCourse.value !== 'empty') {
        let y = editTrainerCourse.selectedIndex - 1;
        trainerCourseFirstName.value = trainerPerCourseArray[y].firstName;
        trainerCourseLastName.value = trainerPerCourseArray[y].lastName;
        trainerCourseSubject.value = trainerPerCourseArray[y].stream;
        trainerCoursestartDate.value = trainerPerCourseArray[y].startDate;
        trainerCourseendDate.value = trainerPerCourseArray[y].endDate;
        if (trainerPerCourseArray[y].type === 'Part-Time') {
            trainerCoursePartType.checked = true;
        } else {
            trainerCourseFullType.checked = true;
        }
        submitTrainerCourseBtn.style.display = 'none';
        editTrainerCourseBtn.style.display = 'block';
    }
    else if (editTrainerCourse.value === 'empty') {
        submitTrainerCourseBtn.style.display = 'block';
        editTrainerCourseBtn.style.display = 'none';
    }
}

function UpdateTrainerCourseDom() {
    console.log('entered func');
    let y = editTrainerCourse.selectedIndex - 1;
    validateTrainerperCourseForm();
    if (validateTrainerperCourseForm()) {
        trainerPerCourseArray[y].firstName = trainerCourseFirstName.value;
        trainerPerCourseArray[y].lastName = trainerCourseLastName.value;
        trainerPerCourseArray[y].stream = trainerCourseSubject.value;
        trainerPerCourseArray[y].startDate = trainerCoursestartDate.value;
        trainerPerCourseArray[y].endDate = trainerCourseendDate.value;
        if (trainerCoursePartType.checked) {
            trainerPerCourseArray[y].type = 'Part-Time';
        } else {
            trainerPerCourseArray[y].type = 'Full-Time';
        }
        updateSavedColumns();
        alert('updated succesfully');

    }
}

if (editTrainerCourse) {
    createDOMElement(trainerPerCourseArray);
    editTrainerCourseBtn.style.display = 'none';
    editTrainerCourse.addEventListener('change', EditTrainerCourseDom);
    editTrainerCourseBtn.addEventListener('click', UpdateTrainerCourseDom);
}

//-------Edit & Update Student per Course-------

function EditStudentCourseDom() {
    if (editStudentCourse.value !== 'empty') {
        let y = editStudentCourse.selectedIndex - 1;
        studentCourseFirstName.value = studentPerCourseArray[y].firstName;
        studentCourseLastName.value = studentPerCourseArray[y].lastName;
        studentCoursedateOfBirth.value = studentPerCourseArray[y].birthday;
        if (studentPerCourseArray[y].tuition === 'Pay Upfront') {
            studentCourseUpfrontTuition.checked = true;
        } else {
            studentCourseMonthlyTuition.checked = true;
        }
        studentCourseSubject.value = studentPerCourseArray[y].stream;
        studentCoursestartDate.value = studentPerCourseArray[y].startDate;
        studentCourseendDate.value = studentPerCourseArray[y].endDate;
        if (studentPerCourseArray[y].type === 'Part-Time') {
            studentCoursePartType.checked = true;
        } else {
            studentCourseFullType.checked = true;
        }
        submitStudentCourseBtn.style.display = 'none';
        editStudentCourseBtn.style.display = 'block';
    }
    else if (editStudentCourse.value === 'empty') {
        submitStudentCourseBtn.style.display = 'block';
        editStudentCourseBtn.style.display = 'none';
    }
}

function UpdateStudentCourseDom() {
    console.log('entered func');
    let y = editStudentCourse.selectedIndex - 1;
    validateStudentperCourseForm();
    if (validateStudentperCourseForm()) {
        studentPerCourseArray[y].firstName = studentCourseFirstName.value;
        studentPerCourseArray[y].lastName = studentCourseLastName.value;
        studentPerCourseArray[y].birthday = studentCoursedateOfBirth.value;
        if (studentCourseUpfrontTuition.checked) {
            studentPerCourseArray[y].tuition = 'Pay Upfront';
        } else {
            studentPerCourseArray[y].tuition = 'Pay Monthly';
        }
        studentPerCourseArray[y].stream = studentCourseSubject.value;
        studentPerCourseArray[y].startDate = studentCoursestartDate.value;
        studentPerCourseArray[y].endDate = studentCourseendDate.value;
        if (studentCoursePartType.checked) {
            studentPerCourseArray[y].type = 'Part-Time';
        } else {
            studentPerCourseArray[y].type = 'Full-Time';
        }
        updateSavedColumns();
        alert('updated succesfully');

    }
}

if (editStudentCourse) {
    createDOMElement(studentPerCourseArray);
    editStudentCourseBtn.style.display = 'none';
    editStudentCourse.addEventListener('change', EditStudentCourseDom);
    editStudentCourseBtn.addEventListener('click', UpdateStudentCourseDom);
}

//-------Edit & Update Assignment per Course-------


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

if (editAssignmentCourse) {
    createDOMElement(asPerCourseArray);
    editAssignmentCourseBtn.style.display = 'none';
    editAssignmentCourse.addEventListener('change', EditAssignmentCourseDom);
    editAssignmentCourseBtn.addEventListener('click', UpdateAssignmentCourseDom);
}

//-------Edit & Update Assignment per Student per Course-------

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

if (editAssignmentStudentCourse) {
    createDOMElement(asStPerCourseArray);
    editAssignmentStudentCourseBtn.style.display = 'none';
    editAssignmentStudentCourse.addEventListener('change', EditAssignmentStudentCourseDom);
    editAssignmentStudentCourseBtn.addEventListener('click', UpdateAssignmentStudentCourseDom);
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

//--------------------------Add Event Listebers to the Submit Buttons----------------------------------------------------

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

//--------clear localStorage-----------

function clearData() {
    localStorage.clear();
    location.reload();
}