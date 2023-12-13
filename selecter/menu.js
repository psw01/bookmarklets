function initBox() {
	const codeBLock = document.createElement("div");
	codeBLock.innerHTML = `
        <dialog id="psw_tool_box" showModal>
            <p>Greetings, one and all!</p>
            <form method="dialog">
                <button>OK</button>
            </form>
        </dialog>
`;
	document.body.appendChild(codeBLock);
	const toolBox = document.getElementById("psw_tool_box");
	toolBox.showModal();
	toolBox.addEventListener("close", (e) => {
		// toolBox.returnValue
		codeBLock.remove();
	});
}

initBox();
