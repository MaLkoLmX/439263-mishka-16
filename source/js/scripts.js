var listNav = document.querySelector(".nav__list-nav");
var listUser = document.querySelector(".nav__list-user");
var listOffers = document.querySelector(".nav__list-offers");
var toggle = document.querySelector(".nav__toggle");

toggle.classList.remove("nav__toggle--noJS");
listNav.classList.remove("nav__list--noJS");
listOffers.classList.remove("nav__list--noJS");
listUser.classList.remove("nav__list--noJS");

toggle.addEventListener("click", function(evt) {
  toggle.classList.toggle("nav__toggle--closed");
  listNav.classList.toggle("nav__list--opened");
  listOffers.classList.toggle("nav__list--opened");
  listUser.classList.toggle("nav__list--opened");
});
