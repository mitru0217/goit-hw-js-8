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

 };  

function onFormSubmit(e) {
    e.preventDefault();
    const keys = Object.keys(formData);
    if(keys === "") {
        return alert("Please fill all fields");
    }
    console.log (formData);
    e.target.reset();
    localStorage.removeItem(STORAGE_KEY);
    formData = {};  
};
