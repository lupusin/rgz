
const imageContainer = document.getElementById('image-container');
const images = imageContainer.getElementsByTagName('img');
let currentIndex = 0;

function showNextImage() {
  images[currentIndex].classList.remove('active');
  currentIndex = (currentIndex + 1) % images.length;
  images[currentIndex].classList.add('active');
}

// Автоматическая смена изображений каждые 5 секунд
setInterval(showNextImage, 5000);
