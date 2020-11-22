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
const errTrainerCourse = document.querySelector('.error');
const trainerCourseForm = document.getElementById('trainerCourseForm');

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
    if (validateTrainerperCourseForm()) {
        const TrainerCourse1 = new TrainerperCourse(trainerCourseFirstName.value, trainerCourseLastName.value, trainerCourseSubject.value, trainerCoursestartDate.value, trainerCourseendDate.value, trainerCourseTypeRadio.value);
        trainerPerCourseArray.push(TrainerCourse1);
        trainerCourseForm.submit();
        updateSavedColumns();
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
        trainerCourseForm.submit();
        updateSavedColumns();
    }
}

editTrainerCourseBtn.style.display = 'none';
editTrainerCourse.addEventListener('change', EditTrainerCourseDom);
editTrainerCourseBtn.addEventListener('click', UpdateTrainerCourseDom);
//------------------------- Validation for the Trainer per Course Form----------------------------

function validateTrainerperCourseForm() {
    const start = trainerCoursestartDate.value;
    const end = trainerCourseendDate.value;
    const partsStart = start.split("-");
    const partsEnd = end.split("-");
    const dayStart = parseInt(partsStart[2], 10);
    const monthStart = parseInt(partsStart[1], 10);
    const yearStart = parseInt(partsStart[0], 10);
    const dayEnd = parseInt(partsEnd[2], 10);
    const monthEnd = parseInt(partsEnd[1], 10);
    const yearEnd = parseInt(partsEnd[0], 10);
    const regex = /^[a-zA-Z ]{2,15}$/;
    if (trainerCourseFirstName.value === null || trainerCourseFirstName.value === '' || regex.test(trainerCourseFirstName.value) === false) {
        errTrainerCourse.innerText = 'First Name up to 15 letters / no numbers';
        trainerCourseFirstName.classList.add('invalid');
        trainerCourseLastName.classList.remove('invalid');
        trainerCourseSubject.classList.remove('invalid');
        trainerCoursestartDate.classList.remove('invalid');
        trainerCourseendDate.classList.remove('invalid');
        return false;
    }
    else if (trainerCourseLastName.value === null || trainerCourseLastName.value === '' || regex.test(trainerCourseLastName.value) === false) {
        errTrainerCourse.innerText = 'Last Name up to 15 letters / no numbers';
        trainerCourseLastName.classList.add('invalid');
        trainerCourseFirstName.classList.remove('invalid');
        trainerCourseSubject.classList.remove('invalid');
        trainerCoursestartDate.classList.remove('invalid');
        trainerCourseendDate.classList.remove('invalid');
        return false;
    }
    else if (trainerCourseSubject.value === null || trainerCourseSubject.value === '#') {
        trainerCourseSubject.classList.add('invalid');
        trainerCourseLastName.classList.remove('invalid');
        trainerCourseFirstName.classList.remove('invalid');
        trainerCoursestartDate.classList.remove('invalid');
        trainerCourseendDate.classList.remove('invalid');
        errTrainerCourse.innerText = 'Choose a subject';
        return false;
    }
    else if (trainerCoursestartDate.value === '' || yearStart < 2020 || monthEnd == 0 || monthStart < 12 || dayStart < 0 || dayStart > 31) {
        trainerCoursestartDate.classList.add('invalid');
        trainerCourseSubject.classList.remove('invalid');
        trainerCourseLastName.classList.remove('invalid');
        trainerCourseFirstName.classList.remove('invalid');
        trainerCourseendDate.classList.remove('invalid');
        errTrainerCourse.innerText = 'Start Date has to be set and cant be before next month';

        return false;
    }
    else if (trainerCourseendDate.value === '' || yearEnd < 2021 || monthEnd == 0 || monthEnd < 3 || dayEnd < 0 || dayEnd > 31) {
        trainerCourseendDate.classList.add('invalid');
        trainerCoursestartDate.classList.remove('invalid');
        trainerCourseSubject.classList.remove('invalid');
        trainerCourseLastName.classList.remove('invalid');
        trainerCourseFirstName.classList.remove('invalid');
        errTrainerCourse.innerText = 'End Date has to be at least three months after the start';
        return false;
    }
    else if (!trainerCoursePartType.checked && !trainerCourseFullType.checked) {
        trainerCourseendDate.classList.remove('invalid');
        trainerCoursestartDate.classList.remove('invalid');
        trainerCourseSubject.classList.remove('invalid');
        trainerCourseLastName.classList.remove('invalid');
        trainerCourseFirstName.classList.remove('invalid');
        errTrainerCourse.innerText = 'Choose Course Type';
        return false;
    }
    else {
        errTrainerCourse.innerText = '';
        return true;
    }
}