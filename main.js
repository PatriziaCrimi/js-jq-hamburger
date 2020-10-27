/* ASSIGNMENT
Al click sull'icona dell'hamburger menu, deve essere visualizzato il menu mobile
e al click sull'icona "X" il menu mobile deve scomparire.
*/

// ----------------- SOLUTION NUMBER 1 - PLAIN JAVASCRIPT -----------------
/*
// Selecting the burger-menu icon (array)
var burger_menu_icon = document.getElementsByClassName('fa-bars');
console.log(burger_menu_icon);

// Selecting the burger menu extended (array)
var burger_menu = document.getElementsByClassName('hamburger-menu');
console.log(burger_menu);

// Click on burger-menu icon makes extended menu appear
burger_menu_icon[0].onclick = function() {
  // burger_menu[0].className = burger_menu[0].classList + ' active';
  burger_menu[0].classList.add('active');
};

// Selecting the "X"" icon (array)
var x_icon = document.getElementsByClassName('close');
console.log(x_icon);

// Click on "X" icon makes extended menu disappear (back to burger-menu icon)
x_icon[0].onclick = function() {
  burger_menu[0].classList.remove('active');
};
*/

// ----------------- SOLUTION NUMBER 2 - JQUERY -----------------

// Click on hamburger-menu icon makes extended menu appear
$('.header-right > a').click(function() {
  $('.hamburger-menu').addClass('active');
  /* Alternative Solutions
  $('.hamburger-menu').show();
  $('.hamburger-menu').fadeIn();
  $('.hamburger-menu').css('display', 'block'); // --> NOT RECOMMENDED
  */
});
// Click on "X" icon makes extended menu disappear (back to burger-menu icon)
$('.hamburger-menu > a').click(function() {
  $('.hamburger-menu').removeClass('active'); // --> reverse "add.Class"
  /* Alternative Solutions
  $('.hamburger-menu').hide(); // --> reverse "show"
  $('.hamburger-menu').fadeOut(); // --> reverse "fadeIn"
  $('.hamburger-menu').css('display', 'block'); // --> NOT RECOMMENDED
  */
});
