const e=document.querySelector(".form"),t=document.querySelector(".email"),o=document.querySelector(".error-message");document.querySelector(".submit-btn").addEventListener("click",function(){t.validity.typeMismatch?(o.textContent="Please provide a valid email address",t.style.border="solid 1px hsl(354, 100%, 66%)"):0===t.value.length?(o.textContent="Whoops! It looks like you forgot to add your email",t.style.border="solid 1px hsl(354, 100%, 66%)"):o.textContent=""}),e.addEventListener("submit",e=>{e.preventDefault()}),console.log("Parcel is working. Hurray!");
//# sourceMappingURL=index.ea248ff0.js.map