const namedisplay = document.getElementsByClassName("name-display");
const choice = document.getElementsByClassName("choice");
const close = document.getElementsByClassName("close");
const rulebtn = document.getElementsByClassName("btn");
const nextbtn = document.getElementsByClassName("next");
const random = Math.floor(Math.random)*3;
const triangle = document.getElementsByClassName("triangle");
choice.forEach(element,index => { 
    element.addEventListener("click",()=>{
        namedisplay.style.opacity="1";
        triangle.style.display="none";
        choice.forEach(item=>{
            item.style.display;
        })
    })

});


