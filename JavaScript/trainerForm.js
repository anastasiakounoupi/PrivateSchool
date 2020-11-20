//----------------------Variables for the Trainer Form---------------------------

const submitTrainerBtn = document.querySelector('.btn-trainer');
const editTrainerBtn = document.querySelector('.btn-editTrainer');
const trainerFirstName = document.getElementById('firstname');
const trainerLastName = document.getElementById('lastname');
const subject = document.getElementById('subject');
const editTrainer = document.getElementById('editTrainer');
let trainerArray = [];

// ---------------------Trainer Class to create Trainer Objects-------------------

class Trainer {
    constructor(firstName, lastName, subject) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.subject = subject;
    }
}

//-----------------------Storing Data from the Trainer Form input into localStorage after form Validation-------------

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

submitTrainerBtn.addEventListener('click', storeTrainerData);
//---------------------------Edit & Update already submited Trainer Data-----------------------------

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


editTrainerBtn.style.display = 'none';
editTrainer.addEventListener('change', EditTrainerDom);
editTrainerBtn.addEventListener('click', UpdateTrainerDom);

//------------------------- Validation for the Trainer Form----------------------------

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

