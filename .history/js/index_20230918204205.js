"use strict";

let features = document.querySelector(".features"),
  arrow1 = document.querySelector(".arrow-1");

features.addEventListener("click", () => {
  arrow1.src = "../images/icon-arrow-down.svg";
});
