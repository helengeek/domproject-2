// this is color changer function
const COLOR_BOX = document.getElementById("color-box");
const CHANGE_COLOR_BTN = document.getElementById("change-color-btn");

function getRandomColor() {
  let letters = "0123456789ABCDEF";
  let color = "#";
  for (var i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}

window.addEventListener("DOMContentLoaded", setRandomColor);
CHANGE_COLOR_BTN.addEventListener("click", setRandomColor);
function setRandomColor() {
  COLOR_BOX.style.backgroundColor = getRandomColor();
}
// ############################################
