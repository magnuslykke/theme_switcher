"use strict";

document.querySelector("#light").addEventListener("click", klikL);
document.querySelector("#dark").addEventListener("click", klikD);
document.querySelector("#barbie").addEventListener("click", klikB);

const text = document.querySelector("option");

function klikL() {
  console.log("der er klikket på en knap");
  body.setAttribute("data-theme", "light");
}

function klikD() {
  console.log("der er klikket på en knap");
  body.setAttribute("data-theme", "light");
}
function klikB() {
  console.log("der er klikket på en knap");
  body.setAttribute("data-theme", "light");
}
