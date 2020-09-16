var slideIndex = 0;
var slideIndex1 = 0;
showSlides1();
showSlides2();

function showSlides1() {
  var i;
  var slides = document.getElementsByClassName("section__banner-content");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slideIndex++;
  if (slideIndex > slides.length) {
    slideIndex = 1;
  }
  slides[slideIndex - 1].style.display = "flex";
  setTimeout(showSlides1, 2500);
}

function showSlides2() {
  var i;
  var slides = document.getElementsByClassName("section__banner-image");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slideIndex1++;
  if (slideIndex1 > slides.length) {
    slideIndex1 = 1;
  }
  slides[slideIndex1 - 1].style.display = "flex";
  setTimeout(showSlides2, 2500);
}

var slideIndexImage = 1;

function plusSlides(n) {
  showSlides((slideIndexImage += n));
}

function currentSlide(n) {
  showSlides((slideIndexImage = n));
}

function showSlides(n) {
  var i;
  var modal = document.getElementById("modal");
  modal.style.display = "block";
  var slides = document.getElementsByClassName("modal-slide");
  if (n > slides.length) {
    slideIndexImage = 1;
  }
  if (n < 1) {
    slideIndexImage = slides.length;
  }
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slides[slideIndexImage - 1].style.display = "block";
}

function hideModal() {
  var modal = document.getElementById("modal");
  modal.style.display = "none";
}

var slideIndexVideo = 1;

function plusVideo(n) {
  showVideo((slideIndexVideo += n));
}

function currentVideo(n) {
  showVideo((slideIndexVideo = n));
}

function showVideo(n) {
  var i;
  var modal = document.getElementById("modal2");
  modal.style.display = "block";
  var slides = document.getElementsByClassName("modal2-slide");
  if (n > slides.length) {
    slideIndexVideo = 1;
  }
  if (n < 1) {
    slideIndexVideo = slides.length;
  }
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slides[slideIndexVideo - 1].style.display = "block";
}

function hideModal2() {
  var modal = document.getElementById("modal2");
  modal.style.display = "none";
}
