"use strict";

let features = document.querySelector(".features"),
  arrow1 = document.querySelector(".arrow-1"),
  toggle1 = document.querySelector(".toggle__1");

let company = document.querySelector(".company"),
  arrow2 = document.querySelector(".arrow-2"),
  toggle2 = document.querySelector(".toggle__2");
let onOff = false;

features.addEventListener("click", () => {
  if (onOff === false) {
    arrow1.src = "../images/icon-arrow-up.svg";
    toggle1.style.cssText = "display: flex";
    onOff = true;
  } else {
    arrow1.src = "../images/icon-arrow-down.svg";
    toggle1.style.cssText = "display: none";
    onOff = false;
  }
});
