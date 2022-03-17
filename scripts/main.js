const cursor = document.querySelector(".cursor");
const intro = document.querySelector(".intro");
const cards = document.querySelectorAll(".card");
const terminal = document.querySelector(".terminal");
const send_btn = document.querySelector(".send-btn");
const jello_anim = [
	{
		transform: "scale3d(1, 1, 1)",
	},
	{
		transform: "scale3d(1.25, 0.75, 1)",
	},
	{
		transform: "scale3d(0.75, 1.25, 1)",
	},
	{
		transform: "scale3d(1.15, 0.85, 1)",
	},
	{
		transform: "scale3d(0.95, 1.05, 1)",
	},
	{
		transform: "scale3d(1.05, 0.95, 1)",
	},
	{
		transform: "scale3d(1, 1, 1)",
	},
];

document.addEventListener("mousemove", (e) => {
	cursor.style.top = `${e.pageY}px`;
	cursor.style.left = `${e.pageX}px`;
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
				cursor.style.width = "40px";
				cursor.style.height = "40px";
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
					cursor.style.width = "40px";
					cursor.style.height = "40px";
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

onHover(intro);
onHover(cards);
onHover(send_btn);

terminal.addEventListener(
	"mouseover",
	function (event) {
		cursor.style.width = "8px";
		cursor.style.height = "20px";
		cursor.style.borderRadius = "0px";
	},
	false
);

terminal.addEventListener(
	"mouseleave",
	function (event) {
		cursor.style.width = "40px";
		cursor.style.height = "40px";
		cursor.style.borderRadius = "50%";
	},
	false
);

send_btn.onclick = function () {
	let name = document.getElementById("name");
	let email = "some mail";
	let message = document.getElementById("message");
	let subject = name.value + " sent a message from website";
	let error = document.querySelector(".msg-box-header");

	let templateParams = {
		from_name: name.value,
		to_name: "Aadesh",
		subject: subject,
		message_html: message.value,
	};

	if (name.value !== "" && email.value !== "" && message.value !== "") {
		emailjs.send(
			"gmail",
			"template_l1G3XzYs",
			templateParams,
			"user_cWE4XEHCnAkOXM8xYnQNf"
		);
		name.value = "";
		email.value = "";
		message.value = "";

		error.innerHTML = "Message Sent!";
	} else {
		if (name.value === "") {
			error.innerHTML = "name empty";
			name.animate(jello_anim, 1000);
		} else if (message.value === "") {
			error.innerHTML = "message empty";
			message.animate(jello_anim, 1000);
		}
	}
};

class TextScramble {
	constructor(el) {
		this.el = el;
		this.chars = "abcdefghijklmnopqrstuvwxyz  !<>-_\\/[]{}—=+*^?";
		this.update = this.update.bind(this);
	}
	setText(newText) {
		const oldText = this.el.innerText;
		const length = Math.max(oldText.length, newText.length);
		const promise = new Promise((resolve) => (this.resolve = resolve));
		this.queue = [];
		for (let i = 0; i < length; i++) {
			const from = oldText[i] || "";
			const to = newText[i] || "";
			const start = Math.floor(Math.random() * 40);
			const end = start + Math.floor(Math.random() * 40);
			this.queue.push({ from, to, start, end });
		}
		cancelAnimationFrame(this.frameRequest);
		this.frame = 0;
		this.update();
		return promise;
	}
	update() {
		let output = "";
		let complete = 0;
		for (let i = 0, n = this.queue.length; i < n; i++) {
			let { from, to, start, end, char } = this.queue[i];
			if (this.frame >= end) {
				complete++;
				output += to;
			} else if (this.frame >= start) {
				if (!char || Math.random() < 0.08) {
					char = this.randomChar();
					this.queue[i].char = char;
				}
				output += `<span class="dud">${char}</span>`;
			} else {
				output += from;
			}
		}
		this.el.innerHTML = output;
		if (complete === this.queue.length) {
			this.resolve();
		} else {
			this.frameRequest = requestAnimationFrame(this.update);
			this.frame++;
		}
	}
	randomChar() {
		return this.chars[Math.floor(Math.random() * this.chars.length)];
	}
}

const phrases = [
	"am a Full Stack Developer.",
	"love to watch movies.",
	"develop websites.",
	"enjoy playing video games.",
];

const el = document.querySelector(".text");
const fx = new TextScramble(el);

let counter = 0;
const next = () => {
	fx.setText(phrases[counter]).then(() => {
		setTimeout(next, 2000);
	});
	counter = (counter + 1) % phrases.length;
};

next();
