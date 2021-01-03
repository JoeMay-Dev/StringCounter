const cstring = document.getElementById('cstring');
const countBtn = document.getElementById('count');

function countChars(input) {
    return input.length();
}

// console.log(countChars(cstring));

countBtn.addEventListener('click', function(e){
    e.preventDefault();
    console.log(countChars(cstring));
});
