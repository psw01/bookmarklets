let highlightedElement = null;

// Inject CSS styles
function injectCSS() {
	const style = document.createElement("style");
	style.textContent = `
      .highlighted {
        outline: 2px solid red;
      }
    `;
	document.head.appendChild(style);
}

//  Highlighting Elements
function highlightElement(event) {
	if (highlightedElement) removeHighlight();
	const target = event.target;
	if (target !== highlightedElement) {
		highlightedElement = target;
		highlightedElement.classList.add("highlighted");
	}
}

// Removing highlights
function removeHighlight() {
	if (highlightedElement) {
		highlightedElement.classList.remove("highlighted");
		highlightedElement = null;
	}
}

function tagElement() {
	if (!highlightElement) return;
	document.querySelectorAll(".psw_tagged_element").forEach((elm) => {
		elm.classList.remove("psw_tagged_element");
	});
	highlightedElement.classList.add("psw_tagged_element");
}

// Initial function
function grabElement() {
	removeHighlight();
	injectCSS();
	document.addEventListener("mouseover", highlightElement);
	document.addEventListener("mouseout", removeHighlight);
	document.addEventListener("click", stopHighlighting);
	document.addEventListener("keydown", stopHighlighting);
}

// Stop function
function stopHighlighting(event) {
	event.preventDefault();
	tagElement();
	removeHighlight();
	document.removeEventListener("mouseover", highlightElement);
	document.removeEventListener("mouseout", removeHighlight);
	document.removeEventListener("click", stopHighlighting);
	document.removeEventListener("keydown", stopHighlighting);
}

grabElement();
