const cursor = document.querySelector(".cursor");
const cursor_main = document.querySelector(".cursor-main");
const logo = document.querySelector(".logo");

document.addEventListener("mousemove", (e) => {
	cursor.style.top = `${e.pageY}px`;
	cursor.style.left = `${e.pageX}px`;
	cursor_main.style.top = `${e.pageY}px`;
	cursor_main.style.left = `${e.pageX}px`;
});

function onHover(element) {
	if (element.length === undefined) {
		element.addEventListener(
			"mouseover",
			function (event) {
				cursor.style.width = "80px";
				cursor.style.height = "80px";
			},
			false
		);

		element.addEventListener(
			"mouseleave",
			function (event) {
				cursor.style.width = "20px";
				cursor.style.height = "20px";
			},
			false
		);

		element.addEventListener(
			"mousedown",
			function (event) {
				cursor.style.width = "20px";
				cursor.style.height = "20px";
			},
			false
		);

		element.addEventListener(
			"mouseup",
			function (event) {
				cursor.style.width = "80px";
				cursor.style.height = "80px";
			},
			false
		);
	} else {
		for (let i = 0; i < element.length; ++i) {
			element[i].addEventListener(
				"mouseover",
				function (event) {
					cursor.style.width = "80px";
					cursor.style.height = "80px";
				},
				false
			);

			element[i].addEventListener(
				"mouseleave",
				function (event) {
					cursor.style.width = "20px";
					cursor.style.height = "20px";
				},
				false
			);

			element[i].addEventListener(
				"mousedown",
				function (event) {
					cursor.style.width = "20px";
					cursor.style.height = "20px";
				},
				false
			);

			element[i].addEventListener(
				"mouseup",
				function (event) {
					cursor.style.width = "80px";
					cursor.style.height = "80px";
				},
				false
			);
		}
	}
}

onHover(logo);
