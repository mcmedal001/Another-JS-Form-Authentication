const form = document.getElementById('form');
const fullName = document.getElementById('full-name');
const address = document.getElementById('address');
const state = document.getElementById('state');
const username = document.getElementById('username');
const phoneNumber = document.getElementById('phone-number');
const email = document.getElementById('email');
const password = document.getElementById('password');
const password2 = document.getElementById('password2');

//Function that returns arror is validation fails

function showError(input, message) {
    const formControl = input.parentElement;
    formControl.className = "form-control error";
    const errorMsg = formControl.querySelector('p');
    errorMsg.innerText = message;
    console.log(message);
}

//Function that returns success if validation is successful

function showSuccess(input) {
    const formControl = input.parentElement;
    formControl.className = "form-control success";
}

/* Instead of writing different id statements to return success or error for each input field, I created an array that contains all the input fields.
These arrays are then passed into the following function. It then iterates through them to validate. */

function checkRequired(inputArr) {
    inputArr.forEach(function(input) {
        if (input.value.trim() === '') {
            showError(input, "Field is required");
        } else {
            showSuccess(input);
        }
    })
}

//This function validates email by checking it follows a standard email format. I got this from StackOverflow. I then add the function to the eventListener.
// Since it is just the email that needs it, I pass in the email input only.

function validateEmail(input) {
    const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if (re.test(input.value.trim())) {
      showSuccess(input);
    } else {
      showError(input, 'Email is not valid');
    }
  }

// Function that checks if password 1 and password 2 match. It takes in 2 arguments (inputs), then checks if the value of the first input is the same as the second

function checkPasswordMatch(password1, password2){
    if(password1.value !== password2.value) {
        showError(password2, 'Password must match!')
    } else {
        showSuccess(input);
    }
}

function checkLength(input, min, max) {
    if(input.value.length < min) {
        showError(input, `Must not be less than ${min} characters`);
    } else if (input.length.value > max) {
        showError(input, `Cannot be more than ${max} characters`);
    } else {
        showSuccess(input);
    }
}


//Event Listeners

form.addEventListener('submit', function(event) {
    event.preventDefault();
    checkRequired([fullName, address, password, password2, username, phoneNumber, email]);
    checkLength(username, 6, 15);
    checkLength(password, 6, 20); 
    checkPasswordMatch(password, password2);  
    validateEmail(email);
     
});

