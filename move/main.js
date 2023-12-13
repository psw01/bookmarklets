function loadScript(src, callback) {
	if (Array.from(document.querySelectorAll(".psw_injected_script")).find((block) => block.src === src)) {
		return callback();
	}

	let script = document.createElement("script");
	script.classList.add("psw_injected_script");
	script.type = "text/javascript";
	script.src = src;
	script.onload = callback;
	document.head.appendChild(script);
}

elm = document.querySelectorAll(".psw_tagged_element");
if (elm) {
	elm.forEach((element) => {
		element.classList.add("draggable");
		loadScript("https://code.jquery.com/jquery-3.6.0.min.js", function () {
			loadScript("https://code.jquery.com/ui/1.12.1/jquery-ui.min.js", function () {
				$(".draggable").draggable({ containment: "", scroll: true });
			});
		});
	});
}
