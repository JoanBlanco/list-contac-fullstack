import { createNotification } from "../components/notification.js";
// INPUTS
const nameInput = document.querySelector('#name-input');
const emailInput = document.querySelector('#email-input');
const passwordInput = document.querySelector('#password-input');
const matchInput = document.querySelector('#match-input');
const form = document.querySelector('#form');
const signupBtn = document.querySelector('#signup-btn');
const body = document.body;

// REGEX
const EMAIL_VALIDATION = /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/;
const PASSWORD_VALIDATION = /^(?=.*\d)(?=.*[a-z])(?=.*[a-zA-Z]).{8,}$/;
const NAME_VALIDATION = /^[A-Z][a-zA-ZÁ-ÿ\u00f1\u00d1]+(\s[A-Z][a-zA-ZÁ-ÿ\u00f1\u00d1\s]*)$/;

document.addEventListener('DOMContentLoaded', () => {
  form.reset();
  signupBtn.disabled = true;
})

// INPUTS VALIDATIONS
let nameValidation = false;
let emailValidation = false;
let passwordValidation = false;
let matchValidation = false;

const validationInputs = (input, validation) => {
  signupBtn.disabled = nameValidation && emailValidation && passwordValidation && matchValidation ? false : true;
  if (!input.value) {
    input.classList.remove('outline', 'outline-2', 'outline-green-500');
    input.classList.remove('outline', 'outline-2', 'outline-red-500');
    return;
  }
  if (validation) {
    input.classList.remove('outline', 'outline-2', 'outline-red-500');
    input.classList.add('outline', 'outline-2', 'outline-green-500');

  } else {
    input.classList.remove('outline', 'outline-2', 'outline-green-500');
    input.classList.add('outline', 'outline-2', 'outline-red-500');
  }
};

nameInput.addEventListener('input', e => {
  const target = e.target;
  nameValidation = NAME_VALIDATION.test(target.value);
  validationInputs(nameInput, nameValidation);
});

emailInput.addEventListener('input', e => {
  const target = e.target;
  emailValidation = EMAIL_VALIDATION.test(target.value);
  validationInputs(emailInput, emailValidation);
});

passwordInput.addEventListener('input', e => {
  const target = e.target;
  passwordValidation = PASSWORD_VALIDATION.test(target.value);
  validationInputs(passwordInput, passwordValidation);
  matchValidation = matchInput.value === passwordInput.value ? true : false;
  validationInputs(matchInput, matchValidation);
});

matchInput.addEventListener('input', e => {
  const target = e.target;
  matchValidation = target.value === passwordInput.value ? true : false;
  validationInputs(matchInput, matchValidation);
});

// Guardar backend
form.addEventListener('submit', async e => {
  e.preventDefault();
  try {
    const newUser = {
      name: nameInput.value,
      email: emailInput.value,
      password: passwordInput.value
    }
    signupBtn.disabled = true;
    const { data } = await axios.post('/api/users/', newUser);
    await createNotification(false, data);
    await form.reset();
    validationInputs(nameInput, false);
    validationInputs(emailInput, false);
    validationInputs(passwordInput, false);
    validationInputs(matchInput, false);
    signupBtn.disabled = true;
  } catch (error) {
    console.log(error);
    await createNotification(true, error.response.data.error);
  }

});
