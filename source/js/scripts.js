var listNav = document.querySelector(".nav__list-nav");
var listUser = document.querySelector(".nav__list-user");
var listOffers = document.querySelector(".nav__list-offers");
var toggle = document.querySelector(".nav__toggle");
var map = document.querySelector(".contacts__iframe");

var button = document.querySelector(".modal-show");

toggle.classList.remove("nav__toggle--noJS");
listNav.classList.remove("nav__list--noJS");
listOffers.classList.remove("nav__list--noJS");
listUser.classList.remove("nav__list--noJS");
if (map) {
  map.classList.remove("contacts__iframe--nojs");
}

toggle.addEventListener("click", function(evt) {
  evt.preventDefault();
  toggle.classList.toggle("nav__toggle--closed");
  listNav.classList.toggle("nav__list--opened");
  listOffers.classList.toggle("nav__list--opened");
  listUser.classList.toggle("nav__list--opened");
});

if (button) {
  var modal = document.querySelector(".add");
  var shadow = document.querySelector(".add-opacity");

  button.addEventListener("click", function(evt) {
    evt.preventDefault();
    modal.classList.add("add--show");
    shadow.classList.add("add--opacity");
  });

  window.addEventListener("keydown", function (evt) {
    if (evt.keyCode === 27) {
      evt.preventDefault();
      modal.classList.remove("add--show");
      shadow.classList.remove("add--opacity");
    }
  });
}
