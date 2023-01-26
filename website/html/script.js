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




