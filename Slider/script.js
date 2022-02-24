const allElement = document.querySelectorAll(".slider-element");
console.log(allElement);

let count = 1;
setInterval(() => {
    count = count +1;
    const currentElement = document.querySelector(".active");
    console.log(currentElement)
    currentElement.classList.remove("active");

    if(count > allElement.length){
        allElement[0].classList.add("active");
        count=1
    }
    else{
    currentElement.nextElementSibling.classList.add("active")
    }
}, 2000);