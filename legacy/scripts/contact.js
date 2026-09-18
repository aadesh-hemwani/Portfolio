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

onHover(send_btn);

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
