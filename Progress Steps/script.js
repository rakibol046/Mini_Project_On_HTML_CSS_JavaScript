const circles = document.querySelectorAll(".circle")
const progressBar = document.querySelector(".progressBar")
const pre = document.querySelector('.pre')
const next = document.querySelector('.next')
let active = 0;
circle_lenght = circles.length;
circle_lenght -= 1;
next.addEventListener('click', () => {
	if (circle_lenght > active) {
		active++;
		circles[active].classList.add('active')
	}
	activeBar()
})

pre.addEventListener('click', () => {
	circles[active].classList.remove('active')
	if (active > 0) {
		active--;
	}
	activeBar()
})

function activeBar() {
	progressBar.style.width = active * 25 + "%";
	if (active == 0) {
		pre.disabled = true;
	} else if (active == 4) {
		next.disabled = true;
	} else {
		next.disabled = false;
		pre.disabled = false;
	}
}