var $primaryNav = document.querySelector('.primary-navigation');
var $navToggle = document.querySelector('.mobile-nav-toggle');

$navToggle.addEventListener('click', () => {
  var $visibility = $primaryNav.getAttribute('data-visible');

  if ($visibility === "false") {
    $primaryNav.setAttribute('data-visible', true);
    $navToggle.setAttribute('aria-expanded', true);
  } else if ($visibility === "true") {
    $primaryNav.setAttribute('data-visible', false);
    $navToggle.setAttribute('aria-expanded', false);
  }
});

// var $container = document.querySelector('.container');
// var $bigLogo = document.querySelector('.big-logo');
// var $fontAwe = document.querySelector('.font-awesome');

// var $homeContainer = document.querySelector('.home-container')
// var $upperEducationalLinksContainer = document.querySelector('.upper-educational-container')
// var $upperEducationalLink = document.querySelector('.upper-educational-link')

// $bigLogo.addEventListener('click', function(event) {
//   $container.setAttribute('hidden','');
// });

// $fontAwe.addEventListener('click', function(event) {
//   $container.removeAttribute('hidden');
// });

// $upperEducationalLink.addEventListener('click', function (event) {
//   $homeContainer.setAttribute('hidden','');
//   $upperEducationalLinksContainer.removeAttribute('hidden')
// });

// $fontAwe.addEventListener('click', function (event) {
//   $upperEducationalLinksContainer.setAttribute('hidden', '');
//   $homeContainer.removeAttribute('hidden')
// });
