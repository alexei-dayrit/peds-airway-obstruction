var $primaryNav = document.querySelector('.primary-navigation');
var $navToggle = document.querySelector('.mobile-nav-toggle');
var $cprNavLink = document.querySelector('.cpr-nav-link');
var $airwayNavLink = document.querySelector('.airway-nav-link');
var $surveyNavLink = document.querySelector('.survey-nav-link');
var $infoNavLink = document.querySelector('.info-nav-link');


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

$cprNavLink.addEventListener('click', () => {
  $primaryNav.setAttribute('data-visible', false);
  $navToggle.setAttribute('aria-expanded', false);
});

$surveyNavLink.addEventListener('click', () => {
  $primaryNav.setAttribute('data-visible', false);
  $navToggle.setAttribute('aria-expanded', false);
});

$infoNavLink.addEventListener('click', () => {
  $primaryNav.setAttribute('data-visible', false);
  $navToggle.setAttribute('aria-expanded', false);
});
