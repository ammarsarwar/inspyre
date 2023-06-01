// JavaScript code to control the image slider

// Get all the slider images
const sliderImages = document.querySelectorAll(".slider img");

let currentIndex = 0;
sliderImages[currentIndex].classList.add("active");

function showNextImage() {
  sliderImages[currentIndex].classList.remove("active");
  currentIndex = (currentIndex + 1) % sliderImages.length;
  sliderImages[currentIndex].classList.add("active");
}

// Change image every 3 seconds (adjust the duration as needed)
setInterval(showNextImage, 3000);
