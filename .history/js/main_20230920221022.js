"use strict";

let features1 = document.querySelector("#features"),
  arrow_1 = document.querySelector("#arrow-1"),
  toggle_1 = document.querySelector("#toggle__1");

let onOff1 = false;

features1.addEventListener("click", () => {
  if (onOff1 === false) {
    arrow_1.src = "../images/icon-arrow-up.svg";
    toggle_1.style.cssText = "display: flex";
    toggle2.style.cssText = "display: none";
    onOff1 = true;
  } else {
    arrow_1.src = "../images/icon-arrow-down.svg";
    toggle_1.style.cssText = "display: none";
    onOff1 = false;
  }
});

let company = document.querySelector("#company"),
  arrow2 = document.querySelector("#arrow-2"),
  toggle2 = document.querySelector("#toggle__2");

let onOff_2 = false;

company.addEventListener("click", () => {
  if (onOff_2 === false) {
    arrow2.src = "../images/icon-arrow-up.svg";
    toggle2.style.cssText = "display: flex";
    toggle_1.style.cssText = "display: none";

    onOff_2 = true;
  } else {
    arrow2.src = "../images/icon-arrow-down.svg";
    toggle2.style.cssText = "display: none";
    onOff_2 = false;
  }
});
