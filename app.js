const form = document.getElementById('form');
const cstring = document.getElementById('cstring');
const countBtn = document.getElementById('count');
const resetBtn = document.getElementById('clear');
const charCount = document.getElementById('charCount');

function countChars(input) {
   return input.value.length;
}

function resetPg(){
    form.reset();
}

countBtn.addEventListener('click', function(e){
    e.preventDefault();
    charCount.innerHTML = (countChars(cstring));
});

resetBtn.addEventListener('click', resetPg());