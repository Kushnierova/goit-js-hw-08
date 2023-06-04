import throttle from 'lodash.throttle';
import '../css/common.css';
import '../css/03-feedback.css';

const STORAGE_KEY = 'feedback-msg';
let formData = JSON.parse(localStorage.getItem(STORAGE_KEY)) || {};
const refs = {
  inpit: document.querySelector('.feedback-form'),
  form: document.querySelector('.js-feedback-form'),
  textarea: document.querySelector('.js-feedback-form textarea'),
};
refs.form.addEventListener('submit', onFormSubmit);
refs.form.addEventListener('input', throttle(onFormInput, 500));

populateTextarea();

function onFormSubmit(e) {
  e.preventDefault();

  if (refs.inpit.email.value === '' || refs.inpit.message.value === '') {
    return alert('Please fill in all the fields!');
  }
  // console.log('We send your application');
  e.currentTarget.reset();
  localStorage.removeItem(STORAGE_KEY);
  formData = {};
}
function onFormInput(e) {
  formData[e.target.name] = e.target.value;
  localStorage.setItem(STORAGE_KEY, JSON.stringify(formData));
}
function populateTextarea() {
  const savedMessage = JSON.parse(localStorage.getItem(STORAGE_KEY));

  if (savedMessage) {
    refs.textarea.value = savedMessage.message || '';
    refs.inpit.value = savedMessage.email || '';
  }
}
