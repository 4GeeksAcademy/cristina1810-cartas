import "bootstrap";
import "./style.css";


import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  //write your code here
  //VALORES EN LA CARTA
  const num = ["A",2,3,4,5,6,7,8,9,10,"J","Q","K"];
  const palo = ["♦","♥","♠","♣"];

function rdm (){
const numHTML= num[Math.floor(Math.random()*num.length)];
const paloHTML=palo[Math.floor(Math.random()*palo.length)];

if (paloHTML == "♦" || paloHTML == "♥") {
  document.getElementById("num").style.color = "red";
  document.getElementById("paloA").style.color = "red";
  document.getElementById("paloB").style.color = "red";
} else {
   document.getElementById("num").style.color = "black";
  document.getElementById("paloA").style.color = "black";
  document.getElementById("paloB").style.color = "black";
}
  document.getElementById("num").textContent = numHTML;
  document.getElementById("paloA").textContent = paloHTML;
  document.getElementById("paloB").textContent = paloHTML;
}
  rdm()

document.getElementById("btnGenerar").addEventListener("click", rdm);

//Contador 
let tiempo = 10;
setInterval(() => {
if (tiempo <= 10 && tiempo > 0) {
  tiempo--;
  document.getElementById("countd").textContent = tiempo;
} else {
  rdm();
  tiempo = 10;
  document.getElementById("countd").textContent = tiempo;
}
}, 1000);

// Cambio de tamaño de la carta
//Funciona pero no es responsive
document.getElementById("btnResize").addEventListener("click", () => {
const wdth = parseInt(document.getElementById("inputWidth").value);
const height= parseInt(document.getElementById("inputHeight").value);

document.querySelector(".card").style.width = wdth+"vw";
document.querySelector(".card").style.height = height+"vw";

});

};
