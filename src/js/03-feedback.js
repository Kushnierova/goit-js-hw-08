import throttle from 'lodash.throttle';
import '../css/common.css';
import '../css/03-feedback.css';

const STORAGE_KEY = 'feedback-msg';
let formData = {};
const refs = {
  inpit: document.querySelector('.feedback-form'),
  form: document.querySelector('.js-feedback-form'),
  textarea: document.querySelector('.js-feedback-form textarea'),
};
refs.form.addEventListener('submit', onFormSubmit);
refs.textarea.addEventListener('input', throttle(onTextareaInput, 500));

// populateTextarea();

function onFormSubmit(e) {
  e.preventDefault();
  console.log({ email: email.value, message: message.value });
  if (email.value === '' || message.value === '') {
    return alert('Please fill in all the fields!');
  }
  //   console.log(dataForm);
  // console.log('We send your application');
  e.currentTarget.reset();
  localStorage.removeItem(STORAGE_KEY);
  dataForm = {};
}

refs.form.addEventListener('input', e => {
  // console.log(e.target.name);
  // console.log(e.target.value);
  formData[e.target.name] = e.target.value;
  localStorage.setItem(STORAGE_KEY, JSON.stringify(dataForm));
  console.log(formData);
});

function onTextareaInput(e) {
  const message = e.target.value;
  //   console.log(message);
  localStorage.setItem(STORAGE_KEY, message);
}

// function populateTextarea() {
//   const savedData = JSON.parse(localStorage.getItem(STORAGE_KEY));

//   if (savedData.email) {
//     inputEl.value = savedData.email;
//     formData.email = savedData.email;
//   }

//   if (savedData.message) {
//     textareaEl.value = savedData.message;
//     formData.message = savedData.message;
//   }
// }
