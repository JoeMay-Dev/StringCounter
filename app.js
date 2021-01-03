const form = document.getElementById('form');
const cstring = document.getElementById('cstring');
const countBtn = document.getElementById('count');
const resetBtn = document.getElementById('clear');

function countChars(input) {
   return input.value.length;
}

function resetPg(){
    form.reset();
}

// console.log(countChars(cstring));

countBtn.addEventListener('click', function(e){
    e.preventDefault();
    console.log(countChars(cstring));
});

resetBtn.addEventListener('click', resetPg());