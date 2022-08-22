import throttle from "lodash.throttle";
const STORAGE_KEY = `feedback-form-state`;
const savedInfo = JSON.parse(localStorage.getItem(STORAGE_KEY));
let formData = savedInfo ?? {};


const form = document.querySelector(".feedback-form");

// console.log(form.elements.name);

form.addEventListener("input", throttle(onFormChange, 500));

form.addEventListener("submit", onFormSubmit);
 
 function onFormChange (e) {
    formData[e.target.name] = e.target.value;
    localStorage.setItem(STORAGE_KEY, JSON.stringify(formData)); 
    console.log (formData);
 };  

function onFormSubmit(e) {
    e.preventDefault();
      if (form.name === "") {
        return alert("Please fill in all the fields!");
      }
      console.log(form.name.value);
    e.target.reset();
    localStorage.removeItem(STORAGE_KEY);
    formData = {};  
};
