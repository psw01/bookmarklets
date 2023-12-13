javascript: (function () {
	let imgGrabEnabled = true;

	function enableImgGrab() {
		imgGrabEnabled = true;
		document.addEventListener("mouseover", highlightElement);
		document.addEventListener("mouseout", removeHighlight);
		document.addEventListener("click", grabImage);
	}

	function disableImgGrab() {
		imgGrabEnabled = false;
		document.removeEventListener("mouseover", highlightElement);
		document.removeEventListener("mouseout", removeHighlight);
		document.removeEventListener("click", grabImage);
	}

	function findImageUrl(element) {
		if (element.tagName === "IMG" && element.src) {
			return element.src;
		} else {
			for (let child of element.children) {
				const imageUrl = findImageUrl(child);
				if (imageUrl) {
					return imageUrl;
				}
			}
		}
		return null;
	}

	function highlightElement(event) {
		if (imgGrabEnabled) {
			event.target.style.boxShadow = "0 0 10px 3px blue";
		}
	}

	function removeHighlight(event) {
		event.target.style.boxShadow = "";
	}

	function grabImage(event) {
		event.preventDefault();
		if (imgGrabEnabled) {
			const imageUrl = findImageUrl(event.target);
			if (imageUrl) {
				const confirmation = confirm(`Open this image in a new tab?\n${imageUrl}`);
				if (confirmation) {
					window.open(imageUrl, "_blank");
				}
			} else {
				alert("No image URL found!");
			}
			removeHighlight(event);
			disableImgGrab();
		}
	}

	enableImgGrab();
})();
