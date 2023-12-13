const elm = document.querySelectorAll(".psw_tagged_element");
if (elm) {
	elm.forEach((element) => {
		element.style.zIndex = 9999;
		element.style.position = "fixed";
		element.style.top = 0;
		element.style.left = 0;
	});
}
