const buttonDecrementEl = document.querySelector(
	'button[data-action="decrement"]',
);
const buttonIncrementEl = document.querySelector(
	'button[data-action="increment"]',
);
const valueEl = document.querySelector("#value");

buttonDecrementEl.addEventListener("click", onTargetButtonDecrement);
buttonIncrementEl.addEventListener("click", onTargetButtonIncrement);

let counterValue = 0;

function onTargetButtonDecrement() {
	counterValue -= 1;
	valueEl.textContent = `${counterValue}`;
}
function onTargetButtonIncrement() {
	counterValue += 1;
	valueEl.textContent = `${counterValue}`;
}
