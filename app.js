const one = document.querySelector(".one");
const two = document.querySelector(".two");
const three = document.querySelector(".three");
const four = document.querySelector(".four");
const five = document.querySelector(".five");
const six = document.querySelector(".six");
const inputValue = document.querySelector(".amount-bill").value;
const tipAmount = document.querySelector(".tip-amount");

one.addEventListener("click", () => {
  let tip = parseInt((inputValue * 5) / 100);
  tipAmount.textContent = "$" + tip;
});
two.addEventListener("click", () => {
  let tip = (inputValue * 10) / 100;
  tipAmount.textContent = tip;
});
three.addEventListener("click", () => {
  let tip = (inputValue * 15) / 100;
  tipAmount.textContent = tip;
});
four.addEventListener("click", () => {
  let tip = (inputValue * 25) / 100;
  tipAmount.textContent = tip;
});
five.addEventListener("click", () => {
  let tip = (inputValue * 50) / 100;
  tipAmount.textContent = tip;
});
six.addEventListener("click", () => {
  let tip = (inputValue * 5) / 100;
  tipAmount.textContent = tip;
});
