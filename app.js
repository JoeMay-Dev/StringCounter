const form = document.getElementById('form');
const cstring = document.getElementById('cstring');
const countBtn = document.getElementById('count');
const resetBtn = document.getElementById('clear');
const charCount = document.getElementById('charcount');

function countChars(input) {
	return input.value.length;
}

function resetPg() {
	form.reset();
	charCount.classList.remove('active');
}

countBtn.addEventListener('click', function (e) {
	e.preventDefault();
	charCount.classList.add('active');
	charCount.innerHTML = countChars(cstring);
});

resetBtn.addEventListener('click', resetPg());
