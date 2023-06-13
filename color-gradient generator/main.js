const text = document.querySelector(".grad");
const gen = document.querySelector(".gen");
const copy = document.querySelector(".copy");

const vals = [
  "0",
  "1",
  "2",
  "3",
  "4",
  "5",
  "6",
  "7",
  "8",
  "9",
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
];

let hex1 = "#000000";
let hex2 = "#000000";

document.querySelector('body').addEventListener('onload', generate())

gen.addEventListener("click", () => {
  generate();
});

copy.addEventListener("click", () => {
  navigator.clipboard.writeText(text.innerHTML);
});

function generate() {
  hex1 = "";
  hex2 = "";

  for (let i = 0; i < 6; i++) {
    hex1 += vals[Math.floor(Math.random() * vals.length)];
    hex2 += vals[Math.floor(Math.random() * vals.length)];
  }
  text.innerHTML = `background: linear-gradient(45deg, #${hex1}, #${hex2})`;

  document.body.style.background = `linear-gradient(45deg, #${hex1}, #${hex2})`;
}
