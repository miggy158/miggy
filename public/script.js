// Dark Mode Toggle 
const themeToggle = document.getElementById('theme-toggle');

if (localStorage.getItem('theme') === 'dark') {
	document.body.classList.add('dark-mode');
	if (themeToggle) themeToggle.checked = true;
}

if (themeToggle) {
	themeToggle.addEventListener('change', function (e) {
		if (e.target.checked) {
			document.body.classList.add('dark-mode');
			localStorage.setItem('theme', 'dark');
		} else {
			document.body.classList.remove('dark-mode');
			localStorage.setItem('theme', 'light');
		}
	});
}

const certModal = document.getElementById('certModal');
const certModalImg = document.getElementById('certModalImg');
const certModalClose = document.getElementById('certModalClose');

if (certModal) {
	function openCertModal(src) {
		certModalImg.src = src;
		certModal.classList.add('active');
		document.body.classList.add('modal-open');
	}

	function closeCertModal() {
		certModal.classList.remove('active');
		document.body.classList.remove('modal-open');
	}

	document.querySelectorAll('.certificate-item').forEach(function (item) {
		item.addEventListener('click', function () {
			const img = item.querySelector('img');
			if (img) {
				openCertModal(img.src);
			}
		});
	});

	certModalClose.addEventListener('click', closeCertModal);

	certModal.addEventListener('click', function (e) {
		if (e.target === certModal) {
			closeCertModal();
		}
	});

	document.addEventListener('keydown', function (e) {
		if (e.key === 'Escape' && certModal.classList.contains('active')) {
			closeCertModal();
		}
	});
}

// Experience timeline interactivity
const experienceLists = document.querySelectorAll('.experience-list');

if (experienceLists.length > 0) {
	experienceLists.forEach((list) => {
		const timeline = list.querySelector('.timeline');
		const box = list.querySelector('.box');

		function activate() {
			experienceLists.forEach((item) => item.classList.remove('is-active'));
			list.classList.add('is-active');
		}

		if (timeline) {
			timeline.addEventListener('click', activate);
			timeline.addEventListener('mouseenter', activate);
		}
		if (box) {
			box.addEventListener('click', activate);
			box.addEventListener('mouseenter', activate);
		}
		list.addEventListener('focusin', activate);
	});
}

