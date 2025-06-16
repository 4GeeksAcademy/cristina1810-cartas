import "bootstrap";
import "./style.css";


import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  //write your code here
  //VALORES EN LA CARTA
  let num = ["A",2,3,4,5,6,7,8,9,10,"J","Q","K"];
  let palo = ["♦","♥","♠","♣"];

function rdm (){
let numHTML= num[Math.floor(Math.random()*num.length)];
let paloHTML=palo[Math.floor(Math.random()*palo.length)];

if (paloHTML == "♦" || paloHTML == "♥") {
  document.getElementById("num").style.color = "red";
  document.getElementById("paloA").style.color = "red";
  document.getElementById("paloB").style.color = "red";

}
  document.getElementById("num").textContent = numHTML;
  document.getElementById("paloA").textContent = paloHTML;
  document.getElementById("paloB").textContent = paloHTML;
}

  rdm()

};
