const fontSizeControlEl = document.querySelector("#font-size-control");
const textEl = document.querySelector("#text");
textEl.style.fontSize = `56px`;
const handleSizeChange = event =>
	(textEl.style.fontSize = `${event.target.value}px`);

fontSizeControlEl.addEventListener("input", handleSizeChange);
