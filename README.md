# <h1 align="center">Book-App</h1>

## Overview
The Book App is a simple Web application build using HTML, CSS and JavaScript that allows user to see list of books based on category, can login or register and toggle to dark mode as well.

## Frameworks and Language Used
- **VS Code** 
- **HTML** 
- **CSS** 
- **JavaScript**

## Data Flow

### HTML
I have created skeleton using HTML where I have main class("wrapper-body") inside it I have head section div, right navigation bar and a left navigation bar and at the end i have login and register form.
```
    <head>
        <meta charset="utf-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <title>Book-App</title>
        <meta name="description" content="">
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <link rel="stylesheet" href="Styles.css">
        <link rel="icon" href="icon_path" type="images/Logo/logo.jpg">
    </head>
    <body>
        <div class="wrapper-body">
            <div class="header-main">
            <div class="header">
                 <div class="logo-main">
                   <div class="logo">
                    <img src="/images/Logo/logo.jpg" height="30px" width="30px">
                   </div>
                   <div class="logo-name">
                    <span>Book</span>
                   </div>
                 </div>
                <div id="toggle">
                       <div id="circle">
                          
                       </div>
                </div>
                <div class="signup">
                    <button class="login-btn" type="button">Sign up<ion-icon id="arrow" name="arrow-forward-outline"></ion-icon></button>
                </div>
             </div>
             </div>


             <div class="container">
```
### Category Selection
I have buttons for each main-card section which i can used as click button in eventListner and chang the books in ui, look at the code below how i have selected button and called function to perform task according.
doit01 function will reload the data first and than remove the remaing data except the card whose detaile is required which i have accessed using the button and list of category in the left navigation bar.
```
const mainsel = document.getElementsByClassName("main-card");
const hedSel = document.querySelector(".right-nav h1");

const allCat = document.querySelector("#all-categories");
allCat.addEventListener("click",ref);


const one = document.querySelector("#Advice01btn");
const CardsSelector01 = document.querySelector(".cards01");
const AdviceHow = document.querySelector(".Advice-How");

one.addEventListener("click",doit01);
// AdviceHow.addEventListener("click",()=>{location.reload()});
AdviceHow.addEventListener("click",doit01);

function doit01(){

    for(let i=0;i<mainsel.length;i++)
    {
         mainsel[i].classList.remove("gayab");
    }   
       CardsSelector01.classList.add("cards2");
       hedSel.innerHTML=`<h1 Style="font-size:40px";>Advice How-To and <span Style="color:#4F2EE8";>Miscellaneous</span><h1>`;
       for(let i=0;i<mainsel.length;i++)
       {
        if(i!=0)
        {
            mainsel[i].classList.add("gayab");
        }
       }
       one.innerHTML="";
   
}
```

### Dark Mode
For dark mode i have selected left categories and titles of all the card and added class "do-white" which will change text color to white and background color of body as black as well as whatever is required i have selected that element and changed accordingly using if else condition.
```
var flag=false;

const circleSel = document.getElementById("circle");
const bodySel = document.getElementsByTagName("body")[0];
const catItmSel = document.getElementsByClassName("category-item");
const titleSel = document.getElementsByClassName("title");
const hedingSel = document.getElementsByTagName("h1")[0];
const rightNavSel = document.getElementsByClassName("right-nav")[0];
const cardsSel = document.getElementsByClassName("cards");
const loginSel = document.querySelector(".login");
const registerSel = document.querySelector(".register")
document.getElementById("toggle").addEventListener("click",doit);

function doit(){
    if(!flag){

        // console.log(catItmSel);
        bodySel.style.backgroundColor="black";
        circleSel.className="dark-mode";
        for(let i=0;i<catItmSel.length;i++)
        {
            catItmSel[i].classList.add("do-white");
        }
        for(let i=0;i<titleSel.length;i++)
        {
            titleSel[i].classList.add("do-white");
        }
        hedingSel.classList.add("do-white");
        for(let i=0;i<cardsSel.length;i++)
        {
            cardsSel[i].style.backgroundColor="black";
        }
        rightNavSel.classList.add("meaagya");
        
        loginSel.classList.add("make-white");
        registerSel.classList.add("make-white");
        flag=true;
    }
    else{

        bodySel.style.backgroundColor="#F6F6F6";
        circleSel.className="circle";
        for(let i=0;i<catItmSel.length;i++)
        {
            catItmSel[i].classList.remove("do-white");
        }
        for(let i=0;i<titleSel.length;i++)
        {
            titleSel[i].classList.remove("do-white");
        }
        for(let i=0;i<cardsSel.length;i++)
        {
            cardsSel[i].style.backgroundColor="#F6F6F6";
        }
        hedingSel.classList.remove("do-white");
        rightNavSel.classList.remove("meaagya");

        loginSel.classList.remove("make-white");
        registerSel.classList.remove("make-white");
        flag=false;

    }
}
```

### Support Ukraine 
I have added picture using display flex and added a button at the bottom to make the list items to move downward for better view, I have used if else condition and a flag based on which i will change position.
```
var flag = false;

const arrowSelector = document.querySelector(".support-arrow p");
const supportContentSelector = document.querySelector(".support-content");

arrowSelector.addEventListener("click",doit);

function doit(){

    if(!flag)
    {
        // supportContentSelector.classList.add("niche-Khisko");
        supportContentSelector.className="niche-Khisko";
        flag=true;
    }
    else{
        // supportContentSelector.classList.remove("niche-khisko");
        supportContentSelector.className="support-content";
        flag=false;
    }
}
```

### Login and Register 
When a user click on signUp button on top than a pop up will come for login and in he click on register link in login page than loginpage will transformX by -450px and if user click on login link in register page than register page will transfromX by +450px and at tha time of signup click i have made the right nav and left nav opacity to 0 so only login and register page will be shown.
again when user click on x button on login-register block opacity of right nav and left nave will become 1.
```
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
```
