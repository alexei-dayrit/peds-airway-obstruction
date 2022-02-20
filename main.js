var $primaryNav = document.querySelector('.primary-navigation');
var $navToggle = document.querySelector('.mobile-nav-toggle');
var $cprNavLink = document.querySelector('.cpr-nav-link');
// var $cprSection = document.querySelector('#cpr-protocol');
// var topPos = $cprSection.offsetTop;

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
