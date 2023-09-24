"use strict";

let features = document.querySelector(".features"),
  arrow1 = document.querySelector(".arrow-1"),
  toggle1 = document.querySelector(".toggle__1");

let onOff = false;

features.addEventListener("click", () => {
  if (onOff === false) {
    arrow1.src = "../images/icon-arrow-up.svg";
    toggle1.style.cssText = "display: flex";
    toggle2.style.cssText = "display: none";
    onOff = true;
  } else {
    arrow1.src = "../images/icon-arrow-down.svg";
    toggle1.style.cssText = "display: none";
    onOff = false;
  }
});

let company = document.querySelector(".company"),
  arrow2 = document.querySelector(".arrow-2"),
  toggle2 = document.querySelector(".toggle__2");

let onOff2 = false;

company.addEventListener("click", () => {
  if (onOff2 === false) {
    arrow2.src = "../images/icon-arrow-up.svg";
    toggle2.style.cssText = "display: flex";
    toggle1.style.cssText = "display: none";

    onOff2 = true;
  } else {
    arrow2.src = "../images/icon-arrow-down.svg";
    toggle2.style.cssText = "display: none";
    onOff2 = false;
  }
});

// hamburger //

let over1 = document.querySelector("#over1");
let over2 = document.querySelector("#over2");
let over3 = document.querySelector("#over3");
let over4 = document.querySelector("#over4");

let a1 = document.querySelector(".a1");
let a2 = document.querySelector(".a2");
let a3 = document.querySelector(".a3");
let a4 = document.querySelector(".a4");
let b1 = document.querySelector("#b1");
let b2 = document.querySelector("#b2");
let b3 = document.querySelector("#b3");

let Click = true;
function burger() {
  if (Click) {
    b1.style.cssText =
      " transform: rotate(45deg); width: 42px;  position: absolute;";
    b3.style.cssText =
      " transform: rotate(-45deg); width: 42px;  position: absolute;";
    b2.style.cssText =
      "margin-right: border-color: white; background-color: white; border: none;";
    Click = false;
  } else {
    b1.style.cssText = " transform: rotate(0deg); width: 40px;";
    b3.style.cssText = " transform: rotate(0deg); width: 40px;";
    b2.style.cssText = "background-color: black";
    Click = true;
  }
}
