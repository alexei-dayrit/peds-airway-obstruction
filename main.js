const $headerTitle = document.querySelector('.header-title');
const $allImages1 = document.querySelectorAll('.carousel-item1');
const $prevImage1 = document.querySelector('.prev-item1');
const $nextImage1 = document.querySelector('.next-item1');
const $totalImages1 = $allImages1.length;
const $dotContainer1 = document.querySelector('.dot-container1');
const $allDots1 = document.querySelectorAll('.dot1');
const $allTitles1 = document.querySelectorAll('.image-title1');
let currentImage1 = 0;

let intervalId1 = setInterval(rotateImages, 4000);
const $allImages2 = document.querySelectorAll('.carousel-item2');
const $prevImage2 = document.querySelector('.prev-item2');
const $nextImage2 = document.querySelector('.next-item2');
const $totalImages2 = $allImages2.length;
const $dotContainer2 = document.querySelector('.dot-container2');
const $allDots2 = document.querySelectorAll('.dot2');
const $allTitles2 = document.querySelectorAll('.image-title2');
let currentImage2 = 0;

let intervalId2 = setInterval(rotateImages2, 4000);
const $allImages3 = document.querySelectorAll('.carousel-item3');
const $prevImage3 = document.querySelector('.prev-item3');
const $nextImage3 = document.querySelector('.next-item3');
const $totalImages3 = $allImages3.length;
const $dotContainer3 = document.querySelector('.dot-container3');
const $allDots3 = document.querySelectorAll('.dot3');
const $allTitles3 = document.querySelectorAll('.image-title3');
let currentImage3 = 0;

let intervalId3 = setInterval(rotateImages3, 4000);

$headerTitle.addEventListener('click', function goHome() {
  window.scrollTo(0, 0);
});

function changeCurrentImage() {
  for (let i = 0; i < $allImages1.length; i++) {
    $allImages1[i].setAttribute('class', 'hidden carousel-item1 cpr-image');
  }
  $allImages1[currentImage1].setAttribute('class', 'visible carousel-item1 cpr-image');
  clearInterval(intervalId1);
  intervalId1 = setInterval(rotateImages, 4000);
}

function cycleTitle() {
  for (let i = 0; i < $allTitles1.length; i++) {
    $allTitles1[i].setAttribute('class', 'hidden image-title1');
  }
  $allTitles1[currentImage1].setAttribute('class', 'visible image-title1');
}

function changeDots(event) {
  if (event.target.matches('.dot1')) {
    for (let i = 0; i < $allDots1.length; i++) {
      if ($allDots1[i] === event.target) {
        $allDots1[i].className = 'dot1 fas fa-circle';
        for (let a = 0; a < $allImages1.length; a++) {
          $allImages1[a].setAttribute('class', 'hidden carousel-item1 cpr-image');
        }
        $allImages1[i].setAttribute('class', 'visible carousel-item1 cpr-image');
        currentImage1 = i;
      } else {
        $allDots1[i].className = 'dot1 far fa-circle';
      }
    }
  }
  cycleTitle();
  clearInterval(intervalId1);
  intervalId1 = setInterval(rotateImages, 4000);
}

$dotContainer1.addEventListener('click', changeDots);

function goToPrevImage() {
  if (currentImage1 === 0) {
    currentImage1 = $totalImages1 - 1;
  } else {
    currentImage1--;
  }
  cycleDots();
  cycleTitle();
  changeCurrentImage();
  clearInterval(intervalId1);
  intervalId1 = setInterval(rotateImages, 4000);
}

function goToNextImage() {
  if (currentImage1 === $totalImages1 - 1) {
    currentImage1 = 0;
  } else {
    currentImage1++;
  }
  cycleDots();
  cycleTitle();
  changeCurrentImage();
  clearInterval(intervalId1);
  intervalId1 = setInterval(rotateImages, 4000);
}

$prevImage1.addEventListener('click', goToPrevImage);
$nextImage1.addEventListener('click', goToNextImage);

function cycleDots() {
  for (let i = 0; i < $allDots1.length; i++) {
    $allDots1[i].setAttribute('class', 'dot1 far fa-circle');
  }
  $allDots1[currentImage1].setAttribute('class', 'dot1 fas fa-circle');
  clearInterval(intervalId1);
  intervalId1 = setInterval(rotateImages, 4000);
}

function rotateImages() {
  currentImage1++;
  if (currentImage1 < 5) {
    changeCurrentImage();
    cycleDots();
    cycleTitle();
  } else {
    currentImage1 = -1;
    clearInterval(intervalId1);
    intervalId1 = setInterval(rotateImages, 4000);
  }
}

function changeCurrentImage2() {
  for (let i = 0; i < $allImages2.length; i++) {
    $allImages2[i].setAttribute('class', 'hidden carousel-item2 ua-image');
  }
  $allImages2[currentImage2].setAttribute('class', 'visible carousel-item2 ua-image');
  clearInterval(intervalId2);
  intervalId2 = setInterval(rotateImages2, 4000);
}

function cycleTitle2() {
  for (let i = 0; i < $allTitles2.length; i++) {
    $allTitles2[i].setAttribute('class', 'hidden image-title2');
  }
  $allTitles2[currentImage2].setAttribute('class', 'visible image-title2');
}

function changeDots2(event) {
  if (event.target.matches('.dot2')) {
    for (let i = 0; i < $allDots2.length; i++) {
      if ($allDots2[i] === event.target) {
        $allDots2[i].className = 'dot2 fas fa-circle';
        for (let a = 0; a < $allImages2.length; a++) {
          $allImages2[a].setAttribute('class', 'hidden carousel-item2 ua-image');
        }
        $allImages2[i].setAttribute('class', 'visible carousel-item2 ua-image');
        currentImage2 = i;
      } else {
        $allDots2[i].className = 'dot2 far fa-circle';
      }
    }
  }
  cycleTitle2();
  clearInterval(intervalId2);
  intervalId2 = setInterval(rotateImages2, 4000);
}

$dotContainer2.addEventListener('click', changeDots2);

function goToPrevImage2() {
  if (currentImage2 === 0) {
    currentImage2 = $totalImages2 - 1;
  } else {
    currentImage2--;
  }
  cycleDots2();
  cycleTitle2();
  changeCurrentImage2();
  clearInterval(intervalId2);
  intervalId2 = setInterval(rotateImages2, 4000);
}

function goToNextImage2() {
  if (currentImage2 === $totalImages2 - 1) {
    currentImage2 = 0;
  } else {
    currentImage2++;
  }
  cycleDots2();
  cycleTitle2();
  changeCurrentImage2();
  clearInterval(intervalId2);
  intervalId2 = setInterval(rotateImages2, 4000);
}

$prevImage2.addEventListener('click', goToPrevImage2);
$nextImage2.addEventListener('click', goToNextImage2);

function cycleDots2() {
  for (let i = 0; i < $allDots2.length; i++) {
    $allDots2[i].setAttribute('class', 'dot2 far fa-circle');
  }
  $allDots2[currentImage2].setAttribute('class', 'dot2 fas fa-circle');
  clearInterval(intervalId2);
  intervalId2 = setInterval(rotateImages2, 4000);
}

function rotateImages2() {
  currentImage2++;
  if (currentImage2 < 4) {
    changeCurrentImage2();
    cycleDots2();
    cycleTitle2();
  } else {
    currentImage2 = -1;
    clearInterval(intervalId2);
    intervalId2 = setInterval(rotateImages2, 4000);
  }
}

function changeCurrentImage3() {
  for (let i = 0; i < $allImages3.length; i++) {
    $allImages3[i].setAttribute('class', 'hidden carousel-item3 la-image');
  }
  $allImages3[currentImage3].setAttribute('class', 'visible carousel-item3 la-image');
  clearInterval(intervalId3);
  intervalId3 = setInterval(rotateImages3, 4000);
}

function cycleTitle3() {
  for (let i = 0; i < $allTitles3.length; i++) {
    $allTitles3[i].setAttribute('class', 'hidden image-title3');
  }
  $allTitles3[currentImage3].setAttribute('class', 'visible image-title3');
}

function changeDots3(event) {
  if (event.target.matches('.dot3')) {
    for (let i = 0; i < $allDots3.length; i++) {
      if ($allDots3[i] === event.target) {
        $allDots3[i].className = 'dot3 fas fa-circle';
        for (let a = 0; a < $allImages3.length; a++) {
          $allImages3[a].setAttribute('class', 'hidden carousel-item3 la-image');
        }
        $allImages3[i].setAttribute('class', 'visible carousel-item3 la-image');
        currentImage3 = i;
      } else {
        $allDots3[i].className = 'dot3 far fa-circle';
      }
    }
  }
  cycleTitle3();
  clearInterval(intervalId3);
  intervalId3 = setInterval(rotateImages3, 4000);
}

$dotContainer3.addEventListener('click', changeDots3);

function goToPrevImage3() {
  if (currentImage3 === 0) {
    currentImage3 = $totalImages3 - 1;
  } else {
    currentImage3--;
  }
  cycleDots3();
  cycleTitle3();
  changeCurrentImage3();
  clearInterval(intervalId3);
  intervalId3 = setInterval(rotateImages3, 4000);
}

function goToNextImage3() {
  if (currentImage3 === $totalImages3 - 1) {
    currentImage3 = 0;
  } else {
    currentImage3++;
  }
  cycleDots3();
  cycleTitle3();
  changeCurrentImage3();
  clearInterval(intervalId3);
  intervalId3 = setInterval(rotateImages3, 4000);
}

$prevImage3.addEventListener('click', goToPrevImage3);
$nextImage3.addEventListener('click', goToNextImage3);

function cycleDots3() {
  for (let i = 0; i < $allDots3.length; i++) {
    $allDots3[i].setAttribute('class', 'dot3 far fa-circle');
  }
  $allDots3[currentImage3].setAttribute('class', 'dot3 fas fa-circle');
  clearInterval(intervalId3);
  intervalId3 = setInterval(rotateImages3, 4000);
}

function rotateImages3() {
  currentImage3++;
  if (currentImage3 < 4) {
    changeCurrentImage3();
    cycleDots3();
    cycleTitle3();
  } else {
    currentImage3 = -1;
    clearInterval(intervalId3);
    intervalId3 = setInterval(rotateImages3, 4000);
  }
}
