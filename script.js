
let slideIndex = 1;
let slideInterval;

document.addEventListener("DOMContentLoaded", function () {
  showSlides(slideIndex);
  slideInterval = setInterval(() => {
    showSlides(++slideIndex);
  }, 20000); // 20 seconds
});

function plusSlides(n) {
  clearInterval(slideInterval);
  showSlides(slideIndex += n);
  slideInterval = setInterval(() => {
    showSlides(++slideIndex);
  }, 5000);
}

function currentSlide(n) {
  clearInterval(slideInterval);
  showSlides(slideIndex += n);
  slideInterval = setInterval(() => {
    showSlides(++slideIndex);
  }, 5000);
}

function showSlides(n) {
  let i;
  const slides = document.getElementsByClassName("slides");
  const dots = document.getElementsByClassName("dot");
  if (n > slides.length) { slideIndex = 1 }
  if (n < 1) { slideIndex = slides.length }

  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for(i=0; i<dots.length; i++){
    dots[i].className = dots[i].className.replace("active", "")
  }
  slides[slideIndex - 1].style.display = "block";
  dots[slideIndex - 1].className += " active";
}

