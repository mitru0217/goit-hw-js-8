const e={},t={form:document.querySelector(".feedback-form"),textarea:document.querySelector(".feedback-form textarea"),input:document.querySelector(".feedback-form input")};!function(){const e=JSON.parse(localStorage.getItem("feedback-form-state"));if(e)for(const a in e)e.hasOwnProperty(a)&&(t.textarea.value=e.message||"",t.input.value=e.email||"")}(),t.form.addEventListener("submit",(function(e){if(e.preventDefault(),""===t.textarea.value||""===t.input.value)return alert("Please fill all fields");e.currentTarget.reset(),localStorage.removeItem("feedback-form-state")})),t.form.addEventListener("input",(t=>{e[t.target.name]=t.target.value,localStorage.setItem("feedback-form-state",JSON.stringify(e))}));
//# sourceMappingURL=03-feedback.a481ee7f.js.map
