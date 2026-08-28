
const themeToggle = document.getElementById('theme-toggle');

themeToggle.addEventListener('change', function (e) {
	if (e.target.checked) {
		document.body.classList.add('dark-mode');
	} else {
		document.body.classList.remove('dark-mode');
	}
});

function toggleSkills() {
	const isFullscreen = document.body.classList.toggle("skills-fullscreen");
	const hiddenSkills = document.querySelectorAll(".skills-hidden");

	hiddenSkills.forEach((el) => el.classList.toggle("active", isFullscreen));

	document.getElementById("viewAllLabel").textContent = isFullscreen
		? "View Less"
		: "View All";
}

function exitSkillsFullscreen() {
	document.body.classList.remove("skills-fullscreen");

	const hiddenSkills = document.querySelectorAll(".skills-hidden");

	hiddenSkills.forEach((el) => el.classList.remove("active"));
	document.getElementById("viewAllLabel").textContent = "View All";
}
