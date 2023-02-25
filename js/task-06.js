const validationInputEl = document.querySelector("#validation-input");

const onInputBlur = event => {
	const validationEl = Number(validationInputEl.dataset.length);
	const currentEl = Number(event.currentTarget.value.length);

	validationInputEl.classList.add("valid", "invalid");
	validationEl === currentEl
		? validationInputEl.classList.toggle("invalid")
		: validationInputEl.classList.toggle("valid");
};
validationInputEl.addEventListener("blur", onInputBlur);
