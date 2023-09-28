window.addEventListener("DOMContentLoaded", function () {
  let prevBtn = document.getElementById("prevBtn");
  let nextBtn = document.getElementById("nextBtn");
  let sliderImg = document.getElementById("sliderImg");
  let sliderContainer = document.querySelector(".slider-container");

  let images = [
    "src/img/img1.jpeg",
    "src/img/img2.jpg",
    "src/img/img3.jpg",
    "src/img/img4.jpg",
  ];

  let currentIndex = 0;

  function SlideImage() {
    if (currentIndex < 0) {
      currentIndex = images.length - 1;
    } else if (currentIndex >= images.length) {
      currentIndex = 0;
    }
    sliderImg.src = images[currentIndex];
  }

  prevBtn.addEventListener("click", function () {
    currentIndex--;
    SlideImage();
  });

  nextBtn.addEventListener("click", function () {
    currentIndex++;
    SlideImage();
  });

  let autoSlide = setInterval(function () {
    currentIndex++;
    SlideImage();
  }, 3000);

  sliderContainer.addEventListener("mouseover", function () {
    clearInterval(autoSlide);
  });

  sliderContainer.addEventListener("mouseout", function () {
    autoSlide = setInterval(function () {
      currentIndex++;
      SlideImage();
    }, 3000);
  });
});
