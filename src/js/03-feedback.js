import throttle from "lodash.throttle";
const STORAGE_KEY = `feedback-form-state`;
const savedInfo = JSON.parse(localStorage.getItem(STORAGE_KEY));
let formData = savedInfo ?? {};

const form = document.querySelector(".feedback-form");

form.addEventListener("input", throttle(onFormChange, 500));

form.addEventListener("submit", onFormSubmit);

saveLocaleStorage();

 function onFormChange (e) {
    formData[e.target.name] = e.target.value;
    localStorage.setItem(STORAGE_KEY, JSON.stringify(formData)); 
    console.log (formData);
 };  

function onFormSubmit(e) {
    e.preventDefault();
      if (e.currentTarget.email.value === "" || e.currentTarget.message.value === "") {
        return alert("Please fill in all the fields!");
      };
    
    e.currentTarget.reset();
    localStorage.removeItem(STORAGE_KEY);
    formData = {};  
};
function saveLocaleStorage() {
if(savedInfo) {
  form.elements.email.value = savedInfo.email;
  form.elements.message.value = savedInfo.message;
}
}
