//----------------------Variables for the Trainer Form---------------------------

const submitTrainerBtn = document.querySelector('.btn-trainer');
const editTrainerBtn = document.querySelector('.btn-editTrainer');
const trainerFirstName = document.getElementById('firstname');
const trainerLastName = document.getElementById('lastname');
const subject = document.getElementById('subject');
const editTrainer = document.getElementById('editTrainer');
const errTrainer = document.querySelector('.error');
const trainerForm = document.getElementById('trainerForm');

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
    if (validateTrainerForm()) {
        const Trainer1 = new Trainer(trainerFirstName.value, trainerLastName.value, subject.value);
        trainerArray.push(Trainer1);
        trainerForm.submit();
        updateSavedColumns();
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
    if (validateTrainerForm()) {
        trainerArray[y].firstName = trainerFirstName.value;
        trainerArray[y].lastName = trainerLastName.value;
        trainerArray[y].subject = subject.value;
        trainerForm.submit();
        updateSavedColumns();
    }
}


editTrainerBtn.style.display = 'none';
editTrainer.addEventListener('change', EditTrainerDom);
editTrainerBtn.addEventListener('click', UpdateTrainerDom);

//------------------------- Validation for the Trainer Form----------------------------

function validateTrainerForm() {
    const regex = /^[a-zA-Z ]{2,15}$/;
    if (trainerFirstName.value === null || trainerFirstName.value === '' || regex.test(trainerFirstName.value) === false) {
        trainerFirstName.classList.add('invalid');
        trainerLastName.classList.remove('invalid');
        subject.classList.remove('invalid');
        errTrainer.innerText = 'First Name up to 15 letters / no numbers';
        return false;
    }
    else if (trainerLastName.value === null || trainerLastName.value === '' || regex.test(trainerLastName.value) === false) {
        errTrainer.innerText = 'Last Name up to 15 letters / no numbers';
        trainerLastName.classList.add('invalid');
        trainerFirstName.classList.remove('invalid');
        subject.classList.remove('invalid');

        return false;
    }
    else if (subject.value === null || subject.value === '#') {
        subject.classList.add('invalid');
        trainerLastName.classList.remove('invalid');
        trainerFirstName.classList.remove('invalid');
        errTrainer.innerText = 'Choose a Subject';
        return false;
    }
    else {
        errTrainer.innerText = '';
        return true;
    }
}

