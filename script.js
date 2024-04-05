// Q1.html
document.getElementById('submitQuiz').addEventListener('click', function() {
    var petTypeRadios = document.querySelectorAll('input[name="petType"]');
    var petTypeChecked = [...petTypeRadios].find(radio => radio.checked);
    if (petTypeChecked) {

        var petType = petTypeChecked.value;
 
        localStorage.setItem('petType', petType);

        window.location.href = 'Q2.html';
    } 
});
document.addEventListener('DOMContentLoaded', function() {
    var savedPetType = localStorage.getItem('petType');
    if (savedPetType) {
        var radioToCheck = document.querySelector(`input[name="petType"][value="${savedPetType}"]`);
        if (radioToCheck) {
            radioToCheck.checked = true;
        }
    }
});

// Q2.html
document.getElementById('submitQuiz').addEventListener('click', function() {
    var understandingRadios = document.querySelectorAll('input[name="understanding"]');
    var understandingChecked = [...understandingRadios].find(radio => radio.checked);
    if (understandingChecked) {
        var understanding = understandingChecked.value;
        localStorage.setItem('understanding', understanding);

        window.location.href = 'Q3.html';
    } 
});

document.addEventListener('DOMContentLoaded', function() {
    var savedUnderstanding = localStorage.getItem('understanding');
    if (savedUnderstanding) {
        var radioToCheck = document.querySelector(`input[name="understanding"][value="${savedUnderstanding}"]`);
        if (radioToCheck) {
            radioToCheck.checked = true;
        }
    }
});

