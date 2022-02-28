var $headerTitle = document.querySelector('.header-title');
var $mainContainer = document.querySelector('.main-container');
var $allImages = document.querySelectorAll('.carousel-item');
var $prevImage = document.querySelector('.prev-item');
var $nextImage = document.querySelector('.next-item');
var $totalImages = $allImages.length;
var $dotContainer = document.querySelector('.dot-container');
var $allDots = document.querySelectorAll('.dot');
var $allTitles = document.querySelectorAll('.image-title');
var currentImage = 0;

$headerTitle.addEventListener('click', function goHome() {
  window.scrollTo(0, 0);
});

function changeCurrentImage() {
  for (var i = 0; i < $allImages.length; i++) {
    $allImages[i].setAttribute('class', 'hidden carousel-item protocol-image');
  }
  $allImages[currentImage].setAttribute('class', 'visible carousel-item protocol-image');
  clearInterval(intervalId);
  intervalId = setInterval(rotateImages, 4000);
}

function cycleTitle() {
  for (var i = 0; i < $allTitles.length; i++) {
    $allTitles[i].setAttribute('class', 'hidden image-title');
  }
  $allTitles[currentImage].setAttribute('class', 'visible image-title')
}

function changeDots(event) {
  if (event.target.matches('.dot')) {
    for (var i = 0; i < $allDots.length; i++) {
      if ($allDots[i] === event.target) {
        $allDots[i].className = 'dot fas fa-circle';
        for (var a = 0; a < $allImages.length; a++) {
          $allImages[a].setAttribute('class', 'hidden carousel-item protocol-image');
        }
        $allImages[i].setAttribute('class', 'visible carousel-item protocol-image');
        currentImage = i;
      } else {
        $allDots[i].className = 'dot far fa-circle';
      }
    }
  }
  cycleTitle();
  clearInterval(intervalId);
  intervalId = setInterval(rotateImages, 4000);
}

$dotContainer.addEventListener('click', changeDots);

function goToPrevImage() {
  if (currentImage === 0) {
    currentImage = $totalImages - 1;
  } else {
    currentImage--;
  }
  cycleDots();
  cycleTitle();
  changeCurrentImage();
  clearInterval(intervalId);
  intervalId = setInterval(rotateImages, 4000);
}

function goToNextImage() {
  if (currentImage === $totalImages - 1) {
    currentImage = 0;
  } else {
    currentImage++;
  }
  cycleDots();
  cycleTitle();
  changeCurrentImage();
  clearInterval(intervalId);
  intervalId = setInterval(rotateImages, 4000);
}

$prevImage.addEventListener('click', goToPrevImage);
$nextImage.addEventListener('click', goToNextImage);

function cycleDots() {
  for (var i = 0; i < $allDots.length; i++) {
    $allDots[i].setAttribute('class', 'dot far fa-circle');
  }
  $allDots[currentImage].setAttribute('class', 'dot fas fa-circle');
  clearInterval(intervalId);
  intervalId = setInterval(rotateImages, 4000);
}

function rotateImages() {
  currentImage++;
  if (currentImage < 5) {
    changeCurrentImage();
    cycleDots();
    cycleTitle();
  } else {
    currentImage = -1;
    clearInterval(intervalId);
    intervalId = setInterval(rotateImages, 4000);
  }
}

var intervalId = setInterval(rotateImages, 4000);
