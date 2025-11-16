// Implement a form validation function that checks if all required fields are filled out.

function validateForm(formId){
    const form = document.getElementById(formId);
    const requiredFields = form.querySelectorAll('[required]');
    let isValid = true;

    requiredFields.forEach(field => {
        if(!field.value.trim()){
            isValid = false;
            field.classList.add('error');
            console.error(`The field "${field.name}" is required.`);
        }
        else {
            field.classList.remove('error');
        }
    });

    return isValid;
}

// Usage
document.getElementsById('myForm').addEventListener('submit', function (event){
    event.preventDefault();
    if(validateForm('myForm')){
        console.log('Form is valid')
    }
    else{
        console.log('Form is invalid. Please fill out all required fields.');
    }
});