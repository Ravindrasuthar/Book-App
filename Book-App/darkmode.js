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