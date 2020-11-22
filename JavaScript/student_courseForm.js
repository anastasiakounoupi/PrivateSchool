//----------------------Variables for the Student per Course Form---------------------------
const submitStudentCourseBtn = document.querySelector('.btn-student_course');
const editStudentCourseBtn = document.querySelector('.btn-editstudent_course');
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
const studentCourseForm = document.getElementById('studentCourseForm');
const errStudentCourse = document.querySelector('.error');

// ---------------------Student per Course Class to create Student per Course Objects-------------------

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

//-----------------------Storing Data from the Student per Course Form input into localStorage after form Validation-------------
function storeStudentCourseData() {
    studentCourseTypeRadio = document.querySelector('input[name="type_studentC"]:checked');
    studentCourseTuitionRadio = document.querySelector('input[name="tuition_studentC"]:checked');
    if (validateStudentperCourseForm()) {
        const StudentCourse1 = new StudentperCourse(studentCourseFirstName.value, studentCourseLastName.value, studentCoursedateOfBirth.value, studentCourseTuitionRadio.value, studentCourseSubject.value, studentCoursestartDate.value, studentCourseendDate.value, studentCourseTypeRadio.value);
        studentPerCourseArray.push(StudentCourse1);
        studentCourseForm.submit();
        updateSavedColumns();
    } else {
        console.log('wrong input');
    }
}

submitStudentCourseBtn.addEventListener('click', storeStudentCourseData);
//---------------------------Edit & Update already submited Student per Course Data-----------------------------

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
        studentCourseForm.submit();
        updateSavedColumns();
    }
}

editStudentCourseBtn.style.display = 'none';
editStudentCourse.addEventListener('change', EditStudentCourseDom);
editStudentCourseBtn.addEventListener('click', UpdateStudentCourseDom);

//------------------------- Validation for the Student per Course Form----------------------------
function validateStudentperCourseForm() {
    const birthday = studentCoursedateOfBirth.value;
    const parts = birthday.split("-");
    const day = parseInt(parts[2], 10);
    const month = parseInt(parts[1], 10);
    const year = parseInt(parts[0], 10);
    const start = studentCoursestartDate.value;
    const end = studentCourseendDate.value;
    const partsStart = start.split("-");
    const partsEnd = end.split("-");
    const dayStart = parseInt(partsStart[2], 10);
    const monthStart = parseInt(partsStart[1], 10);
    const yearStart = parseInt(partsStart[0], 10);
    const dayEnd = parseInt(partsEnd[2], 10);
    const monthEnd = parseInt(partsEnd[1], 10);
    const yearEnd = parseInt(partsEnd[0], 10);
    const regex = /^[a-zA-Z ]{2,15}$/;
    if (studentCourseFirstName.value === null || studentCourseFirstName.value === '' || !regex.test(studentCourseFirstName.value)) {
        errStudentCourse.innerText = 'First Name up to 15 letters / no numbers';
        studentCourseFirstName.classList.add('invalid');
        studentCourseLastName.classList.remove('invalid');
        studentCoursedateOfBirth.classList.remove('invalid');
        studentCourseSubject.classList.remove('invalid');
        studentCoursestartDate.classList.remove('invalid');
        studentCourseendDate.classList.remove('invalid');
        return false;
    }
    else if (studentCourseLastName.value === null || studentCourseLastName.value === '' || !regex.test(studentCourseLastName.value)) {
        errStudentCourse.innerText = 'Last Name up to 15 letters / no numbers';
        studentCourseLastName.classList.add('invalid');
        studentCourseFirstName.classList.remove('invalid');
        studentCoursedateOfBirth.classList.remove('invalid');
        studentCourseSubject.classList.remove('invalid');
        studentCoursestartDate.classList.remove('invalid');
        studentCourseendDate.classList.remove('invalid');
        return false;
    } else if (studentCoursedateOfBirth.value === '' || year < 1950 || year > 2001 || month == 0 || month > 12 || day < 0 || day > 31) {
        errStudentCourse.innerText = 'Enter your date of Birth';
        studentCoursedateOfBirth.classList.add('invalid');
        studentCourseLastName.classList.remove('invalid');
        studentCourseFirstName.classList.remove('invalid');
        studentCourseSubject.classList.remove('invalid');
        studentCoursestartDate.classList.remove('invalid');
        studentCourseendDate.classList.remove('invalid');
        return false;
    }
    else if (!studentCourseUpfrontTuition.checked && !studentCourseMonthlyTuition.checked) {
        errStudentCourse.innerText = 'Choose payment type';
        studentCourseSubject.classList.remove('invalid');
        studentCoursedateOfBirth.classList.remove('invalid');
        studentCourseLastName.classList.remove('invalid');
        studentCourseFirstName.classList.remove('invalid');
        studentCoursestartDate.classList.remove('invalid');
        studentCourseendDate.classList.remove('invalid');
        return false;
    }
    else if (studentCourseSubject.value === null || studentCourseSubject.value === '#') {
        errStudentCourse.innerText = 'Please choose course';
        studentCourseSubject.classList.add('invalid');
        studentCoursedateOfBirth.classList.remove('invalid');
        studentCourseLastName.classList.remove('invalid');
        studentCourseFirstName.classList.remove('invalid');
        studentCoursestartDate.classList.remove('invalid');
        studentCourseendDate.classList.remove('invalid');
        return false;
    }
    else if (studentCoursestartDate.value === '' || yearStart < 2020 || monthEnd == 0 || monthStart < 12 || dayStart < 0 || dayStart > 31) {
        studentCoursestartDate.classList.add('invalid');
        studentCourseSubject.classList.remove('invalid');
        studentCoursedateOfBirth.classList.remove('invalid');
        studentCourseLastName.classList.remove('invalid');
        studentCourseFirstName.classList.remove('invalid');
        studentCourseendDate.classList.remove('invalid');
        errStudentCourse.innerText = 'Start Date has to be set and cant be before next month';
        return false;
    }
    else if (studentCourseendDate.value === '') {
        studentCourseendDate.classList.add('invalid');
        studentCoursestartDate.classList.remove('invalid');
        studentCourseSubject.classList.remove('invalid');
        studentCoursedateOfBirth.classList.remove('invalid');
        studentCourseLastName.classList.remove('invalid');
        studentCourseFirstName.classList.remove('invalid');
        errStudentCourse.innerText = 'End Date has to be at least three months after the start';
        return false;
    }
    else if (!studentCoursePartType.checked && !studentCourseFullType.checked) {
        errStudentCourse.innerText = 'Choose a course type';
        studentCourseendDate.classList.remove('invalid');
        studentCoursestartDate.classList.remove('invalid');
        studentCourseSubject.classList.remove('invalid');
        studentCoursedateOfBirth.classList.remove('invalid');
        studentCourseLastName.classList.remove('invalid');
        studentCourseFirstName.classList.remove('invalid');
        return false;
    }
    else {
        errStudentCourse.innerText = 'Choose payment type';
        return true;
    }
}

