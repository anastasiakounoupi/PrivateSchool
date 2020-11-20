//----------------------Variables for the Trainer per Course Form---------------------------
const submitTrainerCourseBtn = document.querySelector('.btn-trainer_course');
const editTrainerCourseBtn = document.querySelector('.btn-edittrainer_course');
const trainerCourseFirstName = document.getElementById('firstname_trainerC');
const trainerCourseLastName = document.getElementById('lastname_trainerC');
const trainerCourseSubject = document.getElementById('stream_trainerC');
const trainerCoursestartDate = document.getElementById('startDate_trainerC');
const trainerCourseendDate = document.getElementById('endDate_trainerC');
const trainerCoursePartType = document.getElementById('part_trainerC');
const trainerCourseFullType = document.getElementById('full_trainerC');
const editTrainerCourse = document.getElementById('edittrainer-course');
let trainerPerCourseArray = [];

// ---------------------Trainer per Course Class to create Trainer per Course Objects-------------------
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
//-----------------------Storing Data from the Trainer per Course Form input into localStorage after form Validation-------------
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

submitTrainerCourseBtn.addEventListener('click', storeTrainerCourseData);

//---------------------------Edit & Update already submited Trainer per Course Data-----------------------------
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

editTrainerCourseBtn.style.display = 'none';
editTrainerCourse.addEventListener('change', EditTrainerCourseDom);
editTrainerCourseBtn.addEventListener('click', UpdateTrainerCourseDom);
//------------------------- Validation for the Trainer per Course Form----------------------------

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