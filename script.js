const btns = document.querySelectorAll('.btn');

function colorChange() {
  btns.forEach((btn) => btn.classList.remove('red'));
  this.classList.add('red');
}

btns.forEach((btn) => btn.addEventListener('click', colorChange));
