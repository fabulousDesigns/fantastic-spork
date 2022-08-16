// callbacks
const taskOne = () => {
  console.log("Im here");
};
const BTN = document.getElementById("btn");
BTN.addEventListener("click", taskOne);
const BTN_PLUS = document.getElementById("btn-plus");
const BTN_MINUS = document.getElementById("btn-minus");
const CHANGE_VALUE_PLACEHOLDER = document.getElementById("num");
BTN_PLUS.style.backgroundColor = "green";
BTN_MINUS.style.backgroundColor = "red";
BTN_PLUS.addEventListener("click", () => {
  CHANGE_VALUE_PLACEHOLDER.textContent++;
});
BTN_MINUS.addEventListener("click", () => {
  CHANGE_VALUE_PLACEHOLDER.textContent--;
});
