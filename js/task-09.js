function getRandomHexColor() {
	return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const buttonEl = document.querySelector(".change-color");
const colorEl = document.querySelector(".color");
const bodyEl = document.querySelector("body");

const handleChangeColor = () => {
	colorEl.innerHTML = getRandomHexColor();
	bodyEl.style.backgroundColor = colorEl.innerHTML;
};
buttonEl.addEventListener("click", handleChangeColor);
