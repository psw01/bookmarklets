if ((e = document.querySelector("#psw-popup-box"))) {
	e.remove();
	throw new Error("Dupe popup");
}

const elements_v = document.querySelectorAll("video");

box = document.createElement("dialog");
box.id = "psw-popup-box";
box.style = "display: flex; flex-direction: column;gap: 0.1rem;";

function put(s) {
	const url = document.createElement("textarea");
	url.value = s.src;
	url.style = "min-height: 7vh;";
	const video = document.createElement("video");
	video.src = s.src;
	video.style = "max-height: 20vh;";
	video.preload = "none";
	video.controls = true;
	box.appendChild(url);
	box.appendChild(video);
}

elements_v.forEach((e) => {
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
