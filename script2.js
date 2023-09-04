"use strict";

document.querySelectorAll("option").forEach((button) => {
  addEventListener("click", klik);
});

function klik(evt) {
  console.log("Der er klikket på select knappen");
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
