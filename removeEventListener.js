const bodyEl = document.querySelector("body");
const btnEl = document.getElementById("btn");
const paraEl = document.getElementById("para");

let isBgColorGrey = true;

function toggleColor() {
  bodyEl.style.backgroundColor = isBgColorGrey ? "blue" : "grey";
  isBgColorGrey = !isBgColorGrey;
}

btn.addEventListener("click", toggleColor);

paraEl.addEventListener("mouseover", () => {
  btn.removeEventListener("click", toggleColor);
});
