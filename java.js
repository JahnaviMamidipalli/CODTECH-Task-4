const header = document.querySelector("header");

window.addEventListener ("scroll", function(){
    header.classList.toggle("Sticky", this.window.scrollY > 0);
})
