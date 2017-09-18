"use strict"
var x = 1;
console.log("Жалюзи закрыты");
function  turnOn(){
   document.getElementById("on").innerHTML=console.log("Включено");
}
function  turnOff(){
   document.getElementById("off").innerHTML=console.log("Выключено");
}

function plus(){
   if (x < 11 ){
   document.getElementById("x").innerHTML=x++;
   }
}

function minus(){
   if (x > -31 ){
   document.getElementById("x").innerHTML=x--;
}
}

function openCurtains(){
   document.getElementById("openCurt").innerHTML=console.log("Жалюзи открыты");
}
function closeCurtains(){
   document.getElementById("closeCurt").innerHTML=console.log("Жалюзи закрыты");
}

