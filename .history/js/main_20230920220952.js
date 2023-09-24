"use strict";

let features1 = document.querySelector("#features"),
  arrow_1 = document.querySelector("#arrow-1"),
  toggle_1 = document.querySelector("#toggle__1");

let onOff = false;

features1.addEventListener("click", () => {
  if (onOff === false) {
    arrow_1.src = "../images/icon-arrow-up.svg";
    toggle_1.style.cssText = "display: flex";
    toggle2.style.cssText = "display: none";
    onOff = true;
  } else {
    arrow_1.src = "../images/icon-arrow-down.svg";
    toggle_1.style.cssText = "display: none";
    onOff = false;
  }
});

let company = document.querySelector("#company"),
  arrow2 = document.querySelector("#arrow-2"),
  toggle2 = document.querySelector("#toggle__2");

let onOff2 = false;

company.addEventListener("click", () => {
  if (onOff2 === false) {
    arrow2.src = "../images/icon-arrow-up.svg";
    toggle2.style.cssText = "display: flex";
    toggle_1.style.cssText = "display: none";

    onOff2 = true;
  } else {
    arrow2.src = "../images/icon-arrow-down.svg";
    toggle2.style.cssText = "display: none";
    onOff2 = false;
  }
});
