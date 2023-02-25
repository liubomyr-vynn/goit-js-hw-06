const loginFormEl = document.querySelector(".login-form");

const handleSubmit = event => {
	event.preventDefault();

	const formElements = event.currentTarget.elements;
	const email = formElements.email.value;
	const password = formElements.password.value;
	if (email === "" || password === "") {
		return alert("Заповніть всі поля!");
	}

	const formData = {
		email,
		password,
	};

	console.log(formData);
	event.currentTarget.reset();
};

loginFormEl.addEventListener("submit", handleSubmit);
