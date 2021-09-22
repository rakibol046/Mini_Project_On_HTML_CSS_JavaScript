const photo = document.querySelector("input");
const btn = document.querySelector("button");
const img = document.querySelector("img");
function fun(){
    photo.click();
}
photo.addEventListener("change", function() {
    const file = this.files[0];
    if(file){
        const reader = new FileReader();
        reader.onload = function(){
            const result = reader.result;
            img.src=result;
        }
        reader.readAsDataURL(file);
    }
})