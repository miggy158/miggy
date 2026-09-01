const themeToggle = document.getElementById('theme-toggle');

themeToggle.addEventListener('change', function (e) {
	if (e.target.checked) {
		document.body.classList.add('dark-mode');
		localStorage.setItem('theme', 'dark');
	} else {
		document.body.classList.remove('dark-mode');
		localStorage.setItem('theme', 'light');
	}
});




