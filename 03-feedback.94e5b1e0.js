!function(){var e="feedback-form-state",t={},a={form:document.querySelector(".feedback-form"),textarea:document.querySelector(".feedback-form textarea"),input:document.querySelector(".feedback-form input")};!function(){var t=JSON.parse(localStorage.getItem(e));if(t)for(var r in t)t.hasOwnProperty(r)&&(a.textarea.value=t.message||"",a.input.value=t.email||"")}(),a.form.addEventListener("submit",(function(t){if(t.preventDefault(),""===a.textarea.value||""===a.input.value)return alert("Please fill all fields");t.currentTarget.reset(),localStorage.removeItem(e)})),a.form.addEventListener("input",(function(a){t[a.target.name]=a.target.value,localStorage.setItem(e,JSON.stringify(t))}))}();
//# sourceMappingURL=03-feedback.94e5b1e0.js.map