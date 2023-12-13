if ((e = document.querySelector("#psw-popup-box"))) {
	e.remove();
	throw new Error("Dupe popup");
}

elements_v = document.querySelectorAll("audio");

box = document.createElement("dialog");
box.id = "psw-popup-box";
box.style = "display: flex; flex-direction: column;gap: 0.1rem;";

function put(s) {
	const url = document.createElement("textarea");
	url.value = s.src;
	url.style = "min-height: 7vh;";
	const audio = document.createElement("audio");
	audio.src = s.src;
	audio.style = "min-height: 7vh;";
	audio.preload = "none";
	audio.controls = true;
	box.appendChild(url);
	box.appendChild(audio);
}

elements_v.forEach((e) => {
	e.controls = true;
	source = e.querySelectorAll("source");
	if (source.length > 0) {
		source.forEach((s) => {
			put(s);
		});
	} else if (e && e.src) {
		put(e);
	}
});

box.addEventListener("close", () => {
	box.remove();
});

document.body.appendChild(box);
box.showModal();
