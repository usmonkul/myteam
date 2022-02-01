"use strict";

const elhidden = document.querySelectorAll(".directors-info-hidden");
const eltogger = document.querySelectorAll(".plus-toggler");
const elplusImg = document.querySelectorAll(".plus-img");
const elbodyScroll = document.querySelector("body");

eltogger.forEach((Element, index) => {
  Element.addEventListener("click", function () {
    Element.classList.toggle("toggled-state");
    elhidden[index].classList.toggle("hidden");
    elplusImg[index].classList.toggle("plus-toggled");
  });
});

// hamburger menu

const elhamBtn = document.querySelector(".hamburger-menu");
const elmobileNav = document.querySelector(".mobile-nav");

elhamBtn.addEventListener("click", function () {
  elbodyScroll.classList.toggle("nav-scroll-hidden");
  elhamBtn.classList.toggle("humburger-closed");
  elmobileNav.classList.toggle("mobile-nav-active");
});
