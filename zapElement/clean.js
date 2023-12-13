let zapEnabled = true;

function enableZap() {
	zapEnabled = true;
	document.addEventListener("mouseover", highlightElement);
	document.addEventListener("mouseout", removeHighlight);
	document.addEventListener("click", zapElement);
}

function disableZap() {
	zapEnabled = false;
	document.removeEventListener("mouseover", highlightElement);
	document.removeEventListener("mouseout", removeHighlight);
	document.removeEventListener("click", zapElement);
}

function highlightElement(event) {
	if (zapEnabled) {
		event.target.style.boxShadow = "0 0 10px 3px red";
	}
}

function removeHighlight(event) {
	event.target.style.boxShadow = "";
}

function zapElement(event) {
	event.preventDefault();
	if (zapEnabled) {
		const confirmation = confirm("Are you sure you want to zap this element?");
		if (confirmation) {
			event.target.style.display = "none";
		}
		removeHighlight(event);
		disableZap();
	}
}
enableZap();
