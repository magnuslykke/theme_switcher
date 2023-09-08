"use strict";

window.addEventListener("load", themeListener);

function themeListener() {
  // const getItem = localStorage.getItem("theme");
  document.querySelector("body").dataset.theme = localStorage.getItem("theme");
}

document.querySelectorAll("option").forEach((button) => {
  addEventListener("click", klik);
});

function klik(evt) {
  console.log("Der er klikket på select knappen");
  localStorage.setItem("theme", `${evt.target.value}`);
  if (evt.target.value === "light") {
    document.querySelector("body").dataset.theme = "light";
  } else if (evt.target.value === "dark") {
    document.querySelector("body").dataset.theme = "dark";
  } else if (evt.target.value === "barbie") {
    document.querySelector("body").dataset.theme = "barbie";
  }
}

// document.querySelector("select").addEventListener("change", selectChange);

// function selectChange(evt) {
//   console.log("change", evt.target.value);
// }
