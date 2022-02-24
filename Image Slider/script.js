
const images = document.querySelectorAll('img');

count =1;
const leftArrow = document.querySelector(".left-arrow")
const rightArrow = document.querySelector(".right-arrow")
rightArrow.addEventListener("click", () => {
   
    let currentImage = document.querySelector(".active");
    currentImage.classList.remove("active")
    if(count >= images.length){
        images[0].classList.add("active")
        count = 1;
    }
    else{
        currentImage.nextElementSibling.classList.add("active")
        count++;
    }
    

})
leftArrow.addEventListener("click", () => {
    let currentImage = document.querySelector(".active");
    currentImage.classList.remove("active")
    if(count <= 1 ){
        images[--images.length].classList.add("active");
        count = images.length;
    }
    else{
        currentImage.previousElementSibling.classList.add("active")
        count--;
    }
})