const form = document.getElementById('form');
const cstring = document.getElementById('cstring');
const countbtn = document.getElementById('count');
const resetbtn = document.getElementById('reset');
const charcount = document.querySelector('.charcount');

function countChars(input) {
	return input.value.length;
}

function resetPg() {
	form.reset();
}

countbtn.addEventListener('click', function (e) {
	e.preventDefault();
	charcount.innerHTML = countChars(cstring);
});

resetbtn.addEventListener('click', resetPg());
