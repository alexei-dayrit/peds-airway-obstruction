// var $primaryNav = document.querySelector('.primary-navigation');
// var $navToggle = document.querySelector('.mobile-nav-toggle');
// var $cprNavLink = document.querySelector('.cpr-nav-link');
// var $airwayNavLink = document.querySelector('.airway-nav-link');
// var $surveyNavLink = document.querySelector('.survey-nav-link');
// var $infoNavLink = document.querySelector('.info-nav-link');
var $headerTitle = document.querySelector('.header-title');
var $mainContainer = document.querySelector('.main-container');
// var $aboutUsBtn = document.querySelector('#about-us');
// var $secondContainer = document.querySelector('.second-container');

$headerTitle.addEventListener('click', function goHome() {
  window.scrollTo(0,0);
});

// $navToggle.addEventListener('click', function () {
//   var $visibility = $primaryNav.getAttribute('data-visible');

//   if ($visibility === "false") {
//     $primaryNav.setAttribute('data-visible', true);
//     $navToggle.setAttribute('aria-expanded', true);
//   } else if ($visibility === "true") {
//     $primaryNav.setAttribute('data-visible', false);
//     $navToggle.setAttribute('aria-expanded', false);
//   }
// });

// function toggleMobileNav (event) {
//   $primaryNav.setAttribute('data-visible', false);
//   $navToggle.setAttribute('aria-expanded', false);
//   $mainContainer.setAttribute('class', 'main-container');
//   $secondContainer.setAttribute('class', 'second-container text-white hidden');
// };

// $cprNavLink.addEventListener('click', toggleMobileNav);
// $airwayNavLink.addEventListener('click', toggleMobileNav);
// $surveyNavLink.addEventListener('click', toggleMobileNav);

// $infoNavLink.addEventListener('click', function (event) {
//   $primaryNav.setAttribute('data-visible', false);
//   $navToggle.setAttribute('aria-expanded', false);
//   $mainContainer.setAttribute('class', 'main-container hidden');
//   $secondContainer.setAttribute('class', 'second-container text-white');
//   window.scrollTo(0, 0);
// });


// function hideMain (event) {
//   $mainContainer.setAttribute('class', 'main-container hidden');
//   $secondContainer.setAttribute('class', 'second-container text-white');
//   window.scrollTo(0, 0);
// }


// SECOND NAV

// var $toggleButton = document.querySelector('.toggle-button');
// var $navBarLinks = document.querySelector('.navbar-links');

// $toggleButton.addEventListener('click', function() {
//   $navBarLinks.classList.toggle('active');
// });
