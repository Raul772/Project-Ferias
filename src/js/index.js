let header_textcarousel_slide = document.querySelectorAll("#header-textcarousel-slides p");
let header_textcarousel_slides = document.getElementById("header-textcarousel-slides");

let id = 0;
let slide_height = 0;

setInterval(() => {

    if (id > (header_textcarousel_slide.length - 1)) id = 0;

    let slide_total_height = header_textcarousel_slide[id].offsetHeight + parseInt(window.getComputedStyle(header_textcarousel_slide[id]).marginBottom);

    header_textcarousel_slides.style.transform = `translateY(-${id*slide_total_height}px)`;
    id++;
    console.log("Slide: "+ id*slide_total_height);
} , 5000);