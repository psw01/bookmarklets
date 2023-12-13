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

function loadStyle(src, callback = null) {
	if (Array.from(document.querySelectorAll(".psw_injected_script")).find((block) => block.src === src)) {
		return callback();
	}

	let style = document.createElement("link");
	style.classList.add("psw_injected_script");
	style.rel = "stylesheet";
	style.type = "text/css";
	style.href = src;
	style.onload = callback;
	document.head.appendChild(style);
}

elm = document.querySelectorAll(".psw_tagged_element");
if (elm) {
	elm.forEach((element) => {
		element.classList.add("resizable");
		loadScript("https://code.jquery.com/jquery-3.6.0.min.js", function () {
			loadScript("https://code.jquery.com/ui/1.12.1/jquery-ui.min.js", function () {
				loadStyle("https://code.jquery.com/ui/1.13.2/themes/base/jquery-ui.css", function () {
					$(".resizable").resizable();
				});
			});
		});
	});
}
