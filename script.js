//Medidas
let viewportWidth = window.innerWidth || document.documentElement.clientWidth;
let boadireita = (33 * viewportWidth) / 100;
let carrovw = (74 * viewportWidth) / 100;/**/
//

//Menu Sanduiche
const botao = document.getElementById('menubo');
const menu = document.getElementById('menuse');
const boheader = document.getElementById("boheader");
const bomain = document.getElementById("bomain");

botao.addEventListener("click", function() {
  menuse.style.display = (menuse.style.display === "block") ? "none" : "block";
  boheader.style.opacity = (menuse.style.display === "block") ? 0.2 : 1;
  bomain.style.opacity = (menuse.style.display === "block") ? 0.2 : 1;
  menuse.addEventListener("mouseleave", function() {
  menuse.style.display = "none";
  boheader.style.opacity = (menuse.style.display === "block") ? 0.2 : 1;
  bomain.style.opacity = (menuse.style.display === "block") ? 0.2 : 1;
  });  
});
//


//Carrossel
const carousel = document.querySelector('.carroitens');
const items = document.querySelectorAll('.slide');
let currentIndex = 0;

function nextItem() {
  currentIndex = (currentIndex + 1) % items.length;
  updateCarousel();
}

function updateCarousel() {
  const translateX = -currentIndex * 100;
  carousel.style.transform = `translateX(${translateX}%)`;
}

setInterval(nextItem, 4500);
//