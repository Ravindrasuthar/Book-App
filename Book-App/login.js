const wrapper = document.querySelector(".wrapper");
const bodywrapper = document.querySelector(".body-wrapper");
const loginLink = document.querySelector(".login-link");
const registerLink = document.querySelector(".register-link");
const signup = document.querySelector(".signup");

const rightSel = document.querySelector(".right-nav");
const leftSel = document.querySelector(".left-nav");

const iconClose = document.querySelector(".icon-close");

registerLink.addEventListener("click",()=>{
    wrapper.classList.add("active");
})

loginLink.addEventListener("click",()=>{
    wrapper.classList.remove("active");
})

signup.addEventListener("click",()=>{
    bodywrapper.classList.add("active-popup");
    rightSel.classList.add("active-disappear");
    leftSel.classList.add("active-disappear");
})

iconClose.addEventListener("click",()=>{
    bodywrapper.classList.remove("active-popup");
    rightSel.classList.remove("active-disappear");
    leftSel.classList.remove("active-disappear");
})