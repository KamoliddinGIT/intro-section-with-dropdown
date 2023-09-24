// "use strict";

let features = document.querySelector(".features"),
  arrow1 = document.querySelector(".arrow-1"),
  toogle__1 = document.querySelector(".toogle__1");

features.addEventListener("click", () => {
  arrow1.src = "../images/icon-arrow-up.svg";
  toogle__1.style.cssText = "display-flex";
});
