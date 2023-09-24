"use strict";

let features = document.querySelector(".features"),
  arrow1 = document.querySelector(".arrow-1");
let toggle1 = document.querySelector(".toogle__1");

features.addEventListener("click", () => {
  arrow1.src = "../images/icon-arrow-up.svg";

  console.log(toggle1);
});
