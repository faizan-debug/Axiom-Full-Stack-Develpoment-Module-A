const form = document.getElementById('form');
const username = document.getElementById('username');
const email = document.getElementById('email');
const password = document.getElementById('password');
const password2 = document.getElementById('password2');

// All Functions
// Function to show error
function showError(input,message) {
    const formControl = input.parentElement;
    formControl.className = 'form-control error';
    const small = formControl.querySelector('small');
    small.innerText = message;
}

// Function to show success
function showSuccess(input) {
    const formControl = input.parentElement;
    formControl.className = 'form-control success';
}

// Function to check if email is valid
function checkEmail(email) {
    const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if (re.test(input.value.trim())) {
        showSuccess(input);
    }
     else 
   {
        showError(input, 'Please provide a valid email');
   }
}

//Function to check if requred fields ave data
function checkRequied(inputArray) {
    inputArray.forEach(function (input) {
        if (input.value === '') {
            console.log(input.id);
            showError(input, `${getFieldId (input)} is required`);
        } else {
            showSuccess(input);
        }
        
    });
}

//Function to length of input field
function checkLength(input, min, max) {
    if (input.value.length < min) {
        showError (input, '${getFieldId(input)} needs to be atleast ${min} characters')
    } else if (input.value.length < max) {
        showError (input, '${getFieldId(input)} needs to be less than ${max} characters')
    } else {
        showSuccess(input);
    }
}

//Function to check if password d cinfrm password match
function checkPasswordMatch(input1, input2){
    if (input1.value !== input2,value) {
        showError(input2, "Password don't match")
    }
}

//Function to get  ID of input field n proper case
function getFieldID(input) {
    return input.id.charAt(0).toUpperCase() + input.id.slice(1);
}


// This is an event listener for the form on submit
form.addEventListener('submit',function(e) {
    e.preventDefault();

    checkRequied ([username, email, password, password2]);
    checkLength (username, 3, 10);
    checkLength (password, 6, 30);
    checkEmail (email);
    checkPasswordMatch (password, password2);
    
})