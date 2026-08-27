const themeToggle = document.getElementById('theme-toggle');

themeToggle.addEventListener('change', function (e) {
	if (e.target.checked) {
		document.body.classList.add('dark-mode');
	} else {
		document.body.classList.remove('dark-mode');
	}
});

function toggleSkills() {
	const skillsHidden = document.getElementById("skillsHidden");
	const button = document.querySelector("#viewAllSkillsBtn");

	skillsHidden.classList.toggle("active");

	if(skillsHidden.classList.contains("active")) {
		button.innerHTML = "View Less";
	} else {
		button.innerHTML = "View All";
	}
}
