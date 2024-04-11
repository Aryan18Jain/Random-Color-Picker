let btn=document.querySelector('button');
let div=document.querySelector('.box');
let h1=document.querySelector('h1');
btn.addEventListener("click",function(){
    let color=randomcolor();
    h1.innerHTML=`Random Color : ${color}`;
    div.style.backgroundColor=color;
});
randomcolor = function(){
    let red=getrandom();
    let blue=getrandom();
    let green=getrandom();
    let color=`rgb(${red},${blue},${green})`;
    return color;
}

function getrandom(){
    return Math.floor(Math.random()*255);
}