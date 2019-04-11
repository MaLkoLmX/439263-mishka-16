var list = document.querySelector(".nav__list");
var burgers = document.querySelector(".nav__burgers");
var close = document.querySelector(".nav__close");

list.classList.remove("nav__list--noJS");
burgers.classList.remove("nav__burgers--noJS");
close.classList.remove("nav__close--noJS");

burgers.addEventListener("click", function (evt) {
  evt.preventDefault();
  burgers.classList.add("nav__burgers--opened");
  list.classList.add("nav__list--opened");
  close.classList.add("nav__close--opened");
});

close.addEventListener("click", function (evt) {
  evt.preventDefault();
  burgers.classList.remove("nav__burgers--opened");
  list.classList.remove("nav__list--opened");
  close.classList.remove("nav__close--opened");
});
