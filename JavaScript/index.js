const trainerList = document.getElementById("trainerul");
const studentList = document.getElementById("studentul");
const courseList = document.getElementById("courseul");
const assignList = document.getElementById("assignmentul");
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
let asStPerCourseArray = [];
let asPerCourseArray = [];
let listArrays = [];

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
function createDataViewElement(myArray) {
    for (let i = 0; i < myArray.length; i++) {
        const element = document.createElement("li");
        element.classList.add('listelement');

        if (myArray === trainerArray) {
            element.innerHTML = `<b>First Name:</b> ${myArray[i].firstName} <br> <b>Last Name:</b> ${myArray[i].lastName} <br> <b>Subject:</b> ${myArray[i].subject}`
            trainerList.appendChild(element);
        }
        else if (myArray === studentArray) {
            element.innerHTML = `<b>First Name:</b> ${myArray[i].firstName} <br> <b>Last Name:</b> ${myArray[i].lastName} <br> <b>Birthday:</b> ${myArray[i].birthday} <br> <b>Tuition:</b> ${myArray[i].tuition}`
            studentList.appendChild(element);
        }
        else if (myArray === courseArray) {
            element.innerHTML = `<b>Course:</b> ${myArray[i].stream} <br> <b>Start-Date:</b> ${myArray[i].startDate} <br> <b>End-Date:</b> ${myArray[i].endDate} <br> <b>Type:</b> ${myArray[i].type}`
            courseList.appendChild(element);
        }
        else if (myArray === assignmentArray) {
            element.innerHTML = `<b>Subject:</b> ${myArray[i].subject} <br> <b>Submissin-Date:</b> ${myArray[i].subDate} <br> <b>Oral-Mark:</b> ${myArray[i].oralMark} <br> <b>Total-Mark:</b> ${myArray[i].totalMark}`
            assignList.appendChild(element);
        }
        else if (myArray === trainerPerCourseArray) {
            element.innerHTML = `<b>First Name:</b> ${myArray[i].firstName} <br> <b>Last Name:</b>  ${myArray[i].lastName} <br> <b>Subject:</b> ${myArray[i].subject} <br> <b>Course:</b> ${myArray[i].stream} <br> <b>Start-Date:</b>: ${myArray[i].startDate} <br> <b>End-Date:</b> ${myArray[i].endDate} <br> <b>Type:</b> ${myArray[i].type}`
            trainerCourse.appendChild(element);
        }
        else if (myArray === studentPerCourseArray) {
            element.innerHTML = `<b>First Name:</b> ${myArray[i].firstName} <br> <b>Last Name:</b>  ${myArray[i].lastName} <br> <b>Birthday:</b> ${myArray[i].birthday} <br> <b>Tuition:</b> ${myArray[i].tuition} <br> <b>Course:</b>: ${myArray[i].stream} <br> <b>Start-Date:</b> ${myArray[i].startDate} <br> <b>End-Date:</b> ${myArray[i].endDate} <br> <b>Type:</b> ${myArray[i].type}`
            studentpCourse.appendChild(element);
        }
        else if (myArray === asPerCourseArray) {
            element.innerHTML = `<b>Subject:</b> ${myArray[i].subject} <br> <b>Submissin-Date:</b> ${myArray[i].subDate} <br> <b>Oral-Mark:</b> ${myArray[i].oralMark} <br> <b>Total-Mark:</b> ${myArray[i].totalMark} <br> <b>Course:</b> ${myArray[i].stream} <br> <b>Start-Date:</b> ${myArray[i].startDate} <br> <b>End-Date:</b> ${myArray[i].endDate} <br> <b>Type:</b> ${myArray[i].type}`
            assignCourse.appendChild(element);
        }
        else if (myArray === asStPerCourseArray) {
            element.innerHTML = `<b>First Name:</b> ${myArray[i].firstName} <br> <b>Last Name:</b>  ${myArray[i].lastName} <br> <b>Birthday:</b> ${myArray[i].birthday} <br> <b>Tuition:</b> ${myArray[i].tuition} <br> <b>Subject:</b> ${myArray[i].subject} <br> <b>Submissin-Date:</b> ${myArray[i].subDate} <br> <b>Oral-Mark:</b> ${myArray[i].oralMark} <br> <b>Total-Mark:</b> ${myArray[i].totalMark} <br> <b>Course:</b> ${myArray[i].stream} <b>Start-Date:</b> ${myArray[i].startDate} <b>End-Date:</b> ${myArray[i].endDate} <b>Type:</b> ${myArray[i].type}`
            assignStCourse.appendChild(element);
        }
    }
}

if (trainerList, studentList, courseList, assignList) {
    createDataViewElement(trainerArray);
    createDataViewElement(studentArray);
    createDataViewElement(courseArray);
    createDataViewElement(assignmentArray);
    createDataViewElement(trainerPerCourseArray);
    createDataViewElement(studentPerCourseArray);
    createDataViewElement(asPerCourseArray);
    createDataViewElement(asStPerCourseArray);
} else {
    console.log('cannot appendchild in this document');
}
//----------------------------------------------------------------------------------

function createDOMElement(myArray) {
    for (let i = 0; i < myArray.length; i++) {
        const option = document.createElement("option");

        if (myArray === trainerArray) {
            option.innerHTML = `${myArray[i].firstName} ${myArray[i].lastName}`;
            option.value = `${myArray[i].firstName} ${myArray[i].lastName}`;
            editTrainer.appendChild(option);
        }
        else if (myArray === studentArray) {
            option.innerHTML = `${myArray[i].firstName} ${myArray[i].lastName}`;
            option.value = `${myArray[i].firstName} ${myArray[i].lastName}`;
            editStudent.appendChild(option);
        }
        else if (myArray === courseArray) {
            option.innerHTML = `${myArray[i].stream} ${myArray[i].type}`;
            option.value = `${myArray[i].stream} ${myArray[i].type}`;
            editCourse.appendChild(option);
        }
        else if (myArray === assignmentArray) {
            option.innerHTML = `${myArray[i].subject} ${myArray[i].subDate}`;
            option.value = `${myArray[i].subject} ${myArray[i].subDate}`;
            editAssignment.appendChild(option);
        }
        else if (myArray === trainerPerCourseArray) {
            option.innerHTML = `${myArray[i].firstName} ${myArray[i].lastName} ${myArray[i].stream}`;
            option.value = `${myArray[i].firstName} ${myArray[i].lastName} ${myArray[i].stream}`;
            editTrainerCourse.appendChild(option);
        }
        else if (myArray === studentPerCourseArray) {
            option.innerHTML = `${myArray[i].firstName} ${myArray[i].lastName} ${myArray[i].stream}`;
            option.value = `${myArray[i].firstName} ${myArray[i].lastName} ${myArray[i].stream}`;
            editStudentCourse.appendChild(option);
        }
        else if (myArray === asPerCourseArray) {
            option.innerHTML = `${myArray[i].subject} ${myArray[i].subDate}`;
            option.value = `${myArray[i].subject} ${myArray[i].subDate}`;
            editAssignmentCourse.appendChild(option);
        }
        else if (myArray === asStPerCourseArray) {
            option.innerHTML = `${myArray[i].firstName} ${myArray[i].lastName} ${myArray[i].subject}`;
            option.value = `${myArray[i].firstName} ${myArray[i].lastName} ${myArray[i].subject}`;
            editAssignmentStudentCourse.appendChild(option);
        }
    }
}

try {
    createDOMElement(trainerArray);
} catch (err) {
    console.log('unnesecery err');
}

try {
    createDOMElement(studentArray);
} catch (err) {
    console.log('unnesecery err');
}

try {
    createDOMElement(courseArray);
} catch (err) {
    console.log('unnesecery err');
}

try {
    createDOMElement(assignmentArray);
} catch (err) {
    console.log('unnesecery err');
}

try {
    createDOMElement(trainerPerCourseArray);
} catch (err) {
    console.log('unnesecery err');
}

try {
    createDOMElement(studentPerCourseArray);
} catch (err) {
    console.log('unnesecery err');
}

try {
    createDOMElement(asPerCourseArray);

} catch (err) {
    console.log('unnesecery err');
}

try {
    createDOMElement(asStPerCourseArray);
} catch (err) {
    console.log('unnesecery err');
}


//--------clear localStorage-----------

const clearData = () => { localStorage.clear(); location.reload(); }