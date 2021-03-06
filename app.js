const cstring = document.getElementById('cstring');
const countbtn = document.getElementById('count');
const resetbtn = document.getElementById('reset');
const charcount = document.querySelector('.charcount');

function countChars(input) {
	return input.value.length;
}

countbtn.addEventListener('click', function (e) {
	e.preventDefault();
	charcount.classList.add('active');
	charcount.innerHTML = countChars(cstring);
});

resetbtn.addEventListener('click', form.reset());
