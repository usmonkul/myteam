"use strict";

const elhidden = document.querySelector(".directors-info-hidden");
const eltogger = document.querySelectorAll(".plus-toggler");
const elplusImg = document.querySelectorAll(".plus-img");
for (let i = 0; i < eltogger.length; i++)
  eltogger[i].addEventListener("click", function () {
    elhidden.classList.toggle("hidden");
    eltogger[i].classList.toggle("toggled-state");
    elplusImg[5].classList.toggle("plus-toggled");
  });
