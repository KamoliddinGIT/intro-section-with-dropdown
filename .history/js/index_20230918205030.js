"use strict";

let features = document.querySelector(".features"),
  arrow1 = document.querySelector(".arrow-1"),
  toggle1 = document.querySelector(".toggle__1");

let onOff = false;

features.addEventListener("click", () => {
  arrow1.src = "../images/icon-arrow-up.svg";
  toggle1.style.cssText = "display: flex";
});
