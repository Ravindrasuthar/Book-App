const registerEmail = document.querySelector(".register-email");
const registerPassword = document.querySelector(".register-password");
const registerUsername = document.querySelector(".register-username");
const register = document.querySelector(".register-btn");


register.addEventListener("click",()=>{
    localStorage.setItem("registerEmail",registerEmail.value);
    localStorage.setItem("registerPassword",registerPassword.value);
    localStorage.setItem("registerUsername",registerPassword.value);
    prompt("Registered Succesful !!!");
})
   

