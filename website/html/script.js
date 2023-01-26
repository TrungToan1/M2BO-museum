const myImage = document.getElementById('myImage')
function nextbuton(){
    myImage.src = "img/foto1.jpg"
}
function nextbuton1(){
    myImage.src = "img/foto2.jpg"
}
function nextbuton2(){
    myImage.src = "img/dog.png"
}

/* image slider */

const images = document.querySelectorAll(".slider-image");
const prevBtn = document.getElementById("prev");
const nextBtn = document.getElementById("next");
let current = 0;

function reset() {
  for (let i = 0; i < images.length; i++) {
    images[i].classList.remove("active");
  }
}

function startSlide() {
  reset();
  images[0].classList.add("active");
}

function prevSlide() {
  reset();
  images[current - 1].classList.add("active");
  current--;
}

function nextSlide() {
  reset();
  images[current + 1].classList.add("active");
  current++;
}

startSlide();
prevBtn.addEventListener("click", () => {
  if (current === 0) {
    current = images.length;
  }
  prevSlide();
});
nextBtn.addEventListener("click", () => {
  if (current === images.length - 1) {
    current = -1;
  }
  nextSlide();
});




//Whack a mole js

function randomTime(min, max) {
  return Math.round(Math.random() * (max - min) + min); //
}
//Krijg een willekeurige hoeveelheid tijd tussen min en max tijd. Voor onze app vertegenwoordigen min en max milliseconden.


let lastHole;
function randomHole(holes) {
  const idx = Math.floor(Math.random() * holes.length);
  const hole = holes[idx];
  if (hole === lastHole) {
    console.log('duplicate hole');
    return randomHole(holes);
  }
  lastHole = hole;
  return hole;
}
//We slaan het meest recent gekozen gat op in de variabele lastHole.

function peep() {
  const time = randomTime(200, 1000);
  const hole = randomHole(holes);
  hole.classList.add('up');
  setTimeout(() => {
    hole.classList.remove('up');
  }, time);
}

//Zodra we de willekeurige tijdsperiode (tussen 200ms en 1s) en hole hebben gekozen, 
//tellen we de up-klasse op bij het hole-element en registreren we vervolgens een callback om de
//up-klasse na de opgegeven tijd te verwijderen.

let timeUp = false;
function startGame() {
  scoreBoard.textContent = 0;
  timeUp = false;
  score = 0;
  peep();
  setTimeout(() => timeUp = true, 10000)
}

// In the setTimeout callback
hole.classList.remove('up');
if (!timeUp) peep();

function whack(e) {
  if(!e.isTrusted) return; // anticheat
  score++;
  this.parentNode.classList.remove('up');
  scoreBoard.textContent = score;
}
moles.forEach(mole => mole.addEventListener('click', bonk));