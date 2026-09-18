const terminal = document.querySelector(".terminal");

terminal.addEventListener(
	"mouseleave",
	function (event) {
		cursor.style.width = "40px";
		cursor.style.height = "40px";
		cursor.style.borderRadius = "50%";
	},
	false
);
