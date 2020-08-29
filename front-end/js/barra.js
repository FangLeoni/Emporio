const hamburguer = document.querySelector(".hambuguer:nth-child(1)");
const hamburguer2 = document.querySelector(".hambuguer:nth-child(2)");
const hamburguer3 = document.querySelector(".hambuguer:nth-child(3)");
const barra = document.querySelector(".nav-list ");
const barra2 = document.querySelector(".nav-list:nth-child(4)");



function myFunction() {

  barra.classList.toggle("mystyle1");
  barra2.classList.toggle("mystyle1");
  hamburguer .classList.toggle("mystyle1");
  hamburguer2 .classList.toggle("mystyle1");
  hamburguer3 .classList.toggle("mystyle1");
  
}