const mainsel = document.getElementsByClassName("main-card");
const hedSel = document.querySelector(".right-nav h1");

const allCat = document.querySelector("#all-categories");
allCat.addEventListener("click",ref);


const one = document.querySelector("#Advice01btn");
const CardsSelector01 = document.querySelector(".cards01");
const AdviceHow = document.querySelector(".Advice-How");

const two = document.querySelector("#Advice02btn");
const CardsSelector02 = document.querySelector(".cards02");
const AudioFiction = document.querySelector(".Audio-Fiction");

const three = document.querySelector("#Advice03btn");
const CardsSelector03 = document.querySelector(".cards03");
const AudioNonfiction = document.querySelector(".Audio-Nonfiction");

const four = document.querySelector("#Advice04btn");
const CardsSelector04 = document.querySelector(".cards04");
const businessBook = document.querySelector(".Business-Books");

const five = document.querySelector("#Advice05btn");
const CardsSelector05 = document.querySelector(".cards05");
const ChildrensMiddle = document.querySelector(".Childrens-Middle");

const six = document.querySelector("#Advice06btn");
const CardsSelector06 = document.querySelector(".cards06");
const CombinedPrint = document.querySelector(".Combined-Print");

const seven = document.querySelector("#Advice07btn");
const CardsSelector07 = document.querySelector(".cards07");
const CombinedPrintEBook = document.querySelector(".Combined-Print-EBook");

const eight = document.querySelector("#Advice08btn");
const CardsSelector08 = document.querySelector(".cards08");
const GraphicBooks = document.querySelector(".Graphic-Books");

const nine = document.querySelector("#Advice09btn");
const CardsSelector09 = document.querySelector(".cards09");
const HardcoverFiction = document.querySelector(".Hardcover-Fiction");

const ten = document.querySelector("#Advice010btn");
const CardsSelector010 = document.querySelector(".cards010");
const HardcoverNonfiction = document.querySelector(".Hardcover-Nonfiction");

const eleven = document.querySelector("#Advice011btn");
const CardsSelector011 = document.querySelector(".cards011");
const MassMarket = document.querySelector(".Mass-Market");

const twelve = document.querySelector("#Advice012btn");
const CardsSelector012 = document.querySelector(".cards012");
const MiddleGrade = document.querySelector(".Middle-Grade");

const thirteen = document.querySelector("#Advice013btn");
const CardsSelector013 = document.querySelector(".cards013");
const PaperbackNonfiction = document.querySelector(".Paperback-Nonfiction");

const fourteen = document.querySelector("#Advice014btn");
const CardsSelector014 = document.querySelector(".cards014");
const PictureBooks = document.querySelector(".Picture-Books");

const fifteen = document.querySelector("#Advice015btn");
const CardsSelector015 = document.querySelector(".cards015");
const SeriesBooks = document.querySelector(".Series-Books");

const sixteen = document.querySelector("#Advice016btn");
const CardsSelector016 = document.querySelector(".cards016");
const TradeFiction = document.querySelector(".Trade-Fiction");

const seventeen = document.querySelector("#Advice017btn");
const CardsSelector017 = document.querySelector(".cards017");
const YoungAdult = document.querySelector(".Young-Adult");

const eighteen = document.querySelector("#Advice018btn");
const CardsSelector018 = document.querySelector(".cards018");
const YoungAdultPaper = document.querySelector(".Young-Adult-Paper");

one.addEventListener("click",doit01);
// AdviceHow.addEventListener("click",()=>{location.reload()});
AdviceHow.addEventListener("click",doit01);


two.addEventListener("click",doit02);
// AudioFiction.addEventListener("click",ref);
AudioFiction.addEventListener("click",doit02);

three.addEventListener("click",doit03);
// AudioNonfiction.addEventListener("click",ref);
AudioNonfiction.addEventListener("click",doit03);

four.addEventListener("click",doit04);
// businessBook.addEventListener("click",ref);
businessBook.addEventListener("click",doit04);

five.addEventListener("click",doit05);
// ChildrensMiddle.addEventListener("click",ref);
ChildrensMiddle.addEventListener("click",doit05);

six.addEventListener("click",doit06);
// CombinedPrint.addEventListener("click",ref);
CombinedPrint.addEventListener("click",doit06);

seven.addEventListener("click",doit07);
// CombinedPrintEBook.addEventListener("click",ref);
CombinedPrintEBook.addEventListener("click",doit07);

eight.addEventListener("click",doit08);
// GraphicBooks.addEventListener("click",ref);
GraphicBooks.addEventListener("click",doit08);

nine.addEventListener("click",doit09);
// HardcoverFiction.addEventListener("click",ref);
HardcoverFiction.addEventListener("click",doit09);

ten.addEventListener("click",doit010);
// HardcoverNonfiction.addEventListener("click",ref);
HardcoverNonfiction.addEventListener("click",doit010);

eleven.addEventListener("click",doit011);
// MassMarket.addEventListener("click",ref);
MassMarket.addEventListener("click",doit011);

twelve.addEventListener("click",doit012);
// MiddleGrade.addEventListener("click",ref);
MiddleGrade.addEventListener("click",doit012);

thirteen.addEventListener("click",doit013);
// PaperbackNonfiction.addEventListener("click",ref);
PaperbackNonfiction.addEventListener("click",doit013);

fourteen.addEventListener("click",doit014);
// PictureBooks.addEventListener("click",ref);
PictureBooks.addEventListener("click",doit014);

fifteen.addEventListener("click",doit015);
// SeriesBooks.addEventListener("click",ref);
SeriesBooks.addEventListener("click",doit015);

sixteen.addEventListener("click",doit016);
// TradeFiction.addEventListener("click",ref);
TradeFiction.addEventListener("click",doit016);

seventeen.addEventListener("click",doit017);
// YoungAdult.addEventListener("click",ref);
YoungAdult.addEventListener("click",doit017);

eighteen.addEventListener("click",doit018);
// YoungAdultPaper.addEventListener("click",ref);
YoungAdultPaper.addEventListener("click",doit018);


function ref()
{
    location.reload();
    
}


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

function doit02(){

    for(let i=0;i<mainsel.length;i++)
       {
            mainsel[i].classList.remove("gayab");
       }
    CardsSelector02.classList.add("cards2");
    hedSel.innerHTML=`<h1 Style="font-size:40px";>Audio <span Style="color:#4F2EE8";>Fiction</span><h1>`;
    for(let i=0;i<mainsel.length;i++)
    {
        if(i!=1)
       { 
        mainsel[i].classList.add("gayab");
       }
    }
    two.innerHTML="";

}

function doit03(){
    for(let i=0;i<mainsel.length;i++)
    {
         mainsel[i].classList.remove("gayab");
    } 

    CardsSelector03.classList.add("cards2");
    hedSel.innerHTML=`<h1 Style="font-size:40px";>Audio <span Style="color:#4F2EE8";>Nonfiction</span><h1>`;
    for(let i=0;i<mainsel.length;i++)
    {
        if(i!=2)
       { mainsel[i].classList.add("gayab");}
    }
    three.innerHTML="";

}

function doit04(){
    for(let i=0;i<mainsel.length;i++)
    {
         mainsel[i].classList.remove("gayab");
    } 
    CardsSelector04.classList.add("cards2");
    hedSel.innerHTML=`<h1 Style="font-size:40px";>Business <span Style="color:#4F2EE8";>Books</span><h1>`;
    for(let i=0;i<mainsel.length;i++)
    {
        if(i!=3)
       { mainsel[i].classList.add("gayab");}
    }
    four.innerHTML="";

}

function doit05(){
    for(let i=0;i<mainsel.length;i++)
    {
         mainsel[i].classList.remove("gayab");
    } 
    CardsSelector05.classList.add("cards2");
    hedSel.innerHTML=`<h1 Style="font-size:40px";>Childrens Middle Grade <span Style="color:#4F2EE8";>Hardcover</span><h1>`;
    for(let i=0;i<mainsel.length;i++)
    {
        if(i!=4)
       { mainsel[i].classList.add("gayab");}
    }
    five.innerHTML="";

}

function doit06(){
    for(let i=0;i<mainsel.length;i++)
    {
         mainsel[i].classList.remove("gayab");
    } 
    CardsSelector06.classList.add("cards2");
    hedSel.innerHTML=`<h1 Style="font-size:40px";>Combined Print and E-Book <span Style="color:#4F2EE8";>Fiction</span><h1>`;
    for(let i=0;i<mainsel.length;i++)
    {
        if(i!=5)
       { mainsel[i].classList.add("gayab");}
    }
    six.innerHTML="";

}

function doit07(){
    for(let i=0;i<mainsel.length;i++)
    {
         mainsel[i].classList.remove("gayab");
    } 
    CardsSelector07.classList.add("cards2");
    hedSel.innerHTML=`<h1 Style="font-size:40px";>Combined Print and E-Book <span Style="color:#4F2EE8";>Nonfiction</span><h1>`;
    for(let i=0;i<mainsel.length;i++)
    {
        if(i!=6)
       { mainsel[i].classList.add("gayab");}
    }
    seven.innerHTML="";

}

function doit08(){
    for(let i=0;i<mainsel.length;i++)
    {
         mainsel[i].classList.remove("gayab");
    } 
    CardsSelector08.classList.add("cards2");
    hedSel.innerHTML=`<h1 Style="font-size:40px";>Graphic Books and <span Style="color:#4F2EE8";>Manga</span><h1>`;
    for(let i=0;i<mainsel.length;i++)
    {
        if(i!=7)
       { mainsel[i].classList.add("gayab");}
    }
    eight.innerHTML="";

}

function doit09(){
    for(let i=0;i<mainsel.length;i++)
    {
         mainsel[i].classList.remove("gayab");
    } 
    CardsSelector09.classList.add("cards2");
    hedSel.innerHTML=`<h1 Style="font-size:40px";>Hardcover <span Style="color:#4F2EE8";>Fiction</span><h1>`;
    for(let i=0;i<mainsel.length;i++)
    {
        if(i!=8)
       { mainsel[i].classList.add("gayab");}
    }
    nine.innerHTML="";

}

function doit010(){
    for(let i=0;i<mainsel.length;i++)
    {
         mainsel[i].classList.remove("gayab");
    } 
    CardsSelector010.classList.add("cards2");
    hedSel.innerHTML=`<h1 Style="font-size:40px";>Hardcover <span Style="color:#4F2EE8";>Nonfiction</span><h1>`;
    for(let i=0;i<mainsel.length;i++)
    {
        if(i!=9)
       { mainsel[i].classList.add("gayab");}
    }
    ten.innerHTML="";

}

function doit011(){
    for(let i=0;i<mainsel.length;i++)
    {
         mainsel[i].classList.remove("gayab");
    } 
    CardsSelector011.classList.add("cards2");
    hedSel.innerHTML=`<h1 Style="font-size:40px";>Mass Market <span Style="color:#4F2EE8";>Monthly</span><h1>`;
    for(let i=0;i<mainsel.length;i++)
    {
        if(i!=10)
       { mainsel[i].classList.add("gayab");}
    }
    eleven.innerHTML="";

}

function doit012(){
    for(let i=0;i<mainsel.length;i++)
    {
         mainsel[i].classList.remove("gayab");
    } 
    CardsSelector012.classList.add("cards2");
    hedSel.innerHTML=`<h1 Style="font-size:40px";>Middle Grade Paperback <span Style="color:#4F2EE8";>Monthly</span><h1>`;
    for(let i=0;i<mainsel.length;i++)
    {
        if(i!=11)
       { mainsel[i].classList.add("gayab");}
    }
    twelve.innerHTML="";

}

function doit013(){
    for(let i=0;i<mainsel.length;i++)
    {
         mainsel[i].classList.remove("gayab");
    } 
    CardsSelector013.classList.add("cards2");
    hedSel.innerHTML=`<h1 Style="font-size:40px";>Paperback <span Style="color:#4F2EE8";>Nonfiction</span><h1>`;
    for(let i=0;i<mainsel.length;i++)
    {
        if(i!=12)
       { mainsel[i].classList.add("gayab");}
    }
    thirteen.innerHTML="";

}

function doit014(){
    for(let i=0;i<mainsel.length;i++)
    {
         mainsel[i].classList.remove("gayab");
    } 
    CardsSelector014.classList.add("cards2");
    hedSel.innerHTML=`<h1 Style="font-size:40px";>Picture <span Style="color:#4F2EE8";>Books</span><h1>`;
    for(let i=0;i<mainsel.length;i++)
    {
        if(i!=13)
       { mainsel[i].classList.add("gayab");}
    }
    fourteen.innerHTML="";

}

function doit015(){
    for(let i=0;i<mainsel.length;i++)
    {
         mainsel[i].classList.remove("gayab");
    } 
    CardsSelector015.classList.add("cards2");
    hedSel.innerHTML=`<h1 Style="font-size:40px";>Series <span Style="color:#4F2EE8";>Books</span><h1>`;
    for(let i=0;i<mainsel.length;i++)
    {
        if(i!=14)
       { mainsel[i].classList.add("gayab");}
    }
    fifteen.innerHTML="";

}

function doit016(){
    for(let i=0;i<mainsel.length;i++)
    {
         mainsel[i].classList.remove("gayab");
    } 
    CardsSelector016.classList.add("cards2");
    hedSel.innerHTML=`<h1 Style="font-size:40px";>Trade Fiction <span Style="color:#4F2EE8";>Paperback</span><h1>`;
    for(let i=0;i<mainsel.length;i++)
    {
        if(i!=15)
       { mainsel[i].classList.add("gayab");}
    }
    sixteen.innerHTML="";

}

function doit017(){
    for(let i=0;i<mainsel.length;i++)
    {
         mainsel[i].classList.remove("gayab");
    } 
    CardsSelector017.classList.add("cards2");
    hedSel.innerHTML=`<h1 Style="font-size:40px";>Young Adult <span Style="color:#4F2EE8";>Hardcover</span><h1>`;
    for(let i=0;i<mainsel.length;i++)
    {
        if(i!=16)
       { mainsel[i].classList.add("gayab");}
    }
    seventeen.innerHTML="";

}

function doit018(){
    for(let i=0;i<mainsel.length;i++)
    {
         mainsel[i].classList.remove("gayab");
    } 
    CardsSelector018.classList.add("cards2");
    hedSel.innerHTML=`<h1 Style="font-size:40px";>Young Adult Paperback <span Style="color:#4F2EE8";>Monthly</span><h1>`;
    for(let i=0;i<mainsel.length;i++)
    {
        if(i!=17)
       { mainsel[i].classList.add("gayab");}
    }
    eighteen.innerHTML="";

}