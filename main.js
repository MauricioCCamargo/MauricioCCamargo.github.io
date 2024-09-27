document.addEventListener("DOMContentLoaded", function () {
	document.getElementById("btn-github").addEventListener("click", function () {
		window.open("https://github.com/MauricioCCamargo", "_blank").focus();
	});

	document
		.getElementById("btn-linkedin")
		.addEventListener("click", function () {
			window
				.open(
					"https://www.linkedin.com/in/mauricio-cacenote-camargo-887b6920b/",
					"_blank"
				)
				.focus();
		});
});
