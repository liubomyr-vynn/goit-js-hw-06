const nameInputEl = document.querySelector("#name-input");
const nameOutputEl = document.querySelector("#name-output");

// Version 1 //
// const onNameInput = event => {
// 	if (event.currentTarget.value.trim() === "") {
// 		nameOutputEl.textContent = "Anonymous";
// 	} else {
// 		nameOutputEl.textContent = event.currentTarget.value;
// 	}
// };
// nameInputEl.addEventListener("input", onNameInput);

// Version 2 //
const onNameInput = event => {
	event.currentTarget.value.trim() === ""
		? (nameOutputEl.textContent = "Anonymous")
		: (nameOutputEl.textContent = event.currentTarget.value);
};
nameInputEl.addEventListener("input", onNameInput);
