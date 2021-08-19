

const open = document.querySelector(".open");
const close = document.querySelector(".close");
const contain = document.querySelector(".mainContain");
const circle = document.querySelector(".circleContainer");

open.addEventListener('click', () => {
    contain.classList.add("showNav")
    circle.classList.add("showCrossBar")

})
close.addEventListener('click', () => {
    contain.classList.remove("showNav")
    circle.classList.remove("showCrossBar")

})