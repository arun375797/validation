const names = document.getElementById('names');
const phone = document.getElementById('phone');
const pass=document.getElementById('pass')

const err1 = document.getElementById('err1');
const err2 = document.getElementById('err2');
const err3 = document.getElementById('err3');

function validate() {
  const validNameRegex = /^[a-zA-Z\s]+$/;
  const validPhoneRegex = /^\d+$/;
  const validpassRegex= /^[a-zA-Z0-9]+$/
  let isValid = true;

  if (validNameRegex.test(names.value)) {
    err1.innerText = "Name is valid";
    err1.style.color = 'Green';
  } else {
    err1.innerText = "Name is not valid";
    err1.style.color = 'red';
    isValid = false;
  }

  if (validPhoneRegex.test(phone.value)) {
    err2.innerText = "Phone number is valid";
    err2.style.color = 'Green';
  } else {
    err2.innerText = "Phone number is not valid";
    err2.style.color = 'red';
    isValid = false;
  }

  if (validpassRegex.test(pass.value)) {
    err3.innerText = "password is valid";
    err3.style.color = 'Green';
  } else {
    err3.innerText = "password is not valid";
    err3.style.color = 'red';
    isValid = false;
  }

  return isValid;
}

