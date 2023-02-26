function getRandomHexColor() {
	return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
const inputEl = document.querySelector("input");
const createBtnEl = document.querySelector("[data-create]");
const destroyBtnEl = document.querySelector("[data-destroy]");
const boxesEl = document.querySelector("#boxes");

const createBoxes = amount => {
	const size = 30;
	const step = 10;
	boxesEl.innerHTML = "";
	for (let i = 0; i < amount; i += 1) {
		let markup = `<div class = "boxes__item"></div>`;
		boxesEl.insertAdjacentHTML("beforeend", markup);
		let styles = boxesEl.children[i].style;
		styles.backgroundColor = getRandomHexColor();
		styles.width = `${size + step * i}px`;
		styles.height = `${size + step * i}px`;
	}
	return;
};

const destroyBoxes = () => {
	boxesEl.innerHTML = "";
	inputEl.value = "";
};

const handleCreateButtonClick = () => createBoxes(inputEl.value);
createBtnEl.addEventListener("click", handleCreateButtonClick);

const handleDestroyButtonClick = () => destroyBoxes();
destroyBtnEl.addEventListener("click", handleDestroyButtonClick);
