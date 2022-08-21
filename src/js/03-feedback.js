import throttle from "lodash.throttle";
const STORAGE_KEY = `feedback-form-state`;
const savedInfo = JSON.parse(localStorage.getItem(STORAGE_KEY));
let formData = savedInfo ?? {};

// const refs = {
//     form: document.querySelector(".feedback-form"),
// };

const form = document.querySelector(".feedback-form");
//  saveLocaleStorage ();
form.addEventListener("input", throttle(onFormChange, 500));

form.addEventListener("submit", onFormSubmit);
 
 function onFormChange (e) {
    formData[e.target.name] = e.target.value;

    localStorage.setItem(STORAGE_KEY, JSON.stringify(formData));

    console.log (formData); 
 };  

function onFormSubmit(e) {
    e.preventDefault();
    if(form.name.value === "") {
        return alert("Please fill all fields");
    }
    e.target.reset();
   localStorage.removeItem(STORAGE_KEY);
   formData = {};  

};
 
// function saveLocaleStorage () {
//     if(savedInfo) {
//         refs.form.elements = savedInfo.elements;
//  }
// }