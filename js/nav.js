document.querySelector('#toggle').addEventListener('click', function () {
  document.querySelector('#toggle').classList.toggle('on')
  document.querySelector('#resize').classList.toggle('active')
	document.querySelector('body').classList.toggle('noscroll')
})
