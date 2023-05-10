let sliderIndex=0;
showSlides();

function showSlides(){
    let slides=document.getElementsByClassName("slider-img");
    for(let i=0; i<=slides.length; i++){
        slides[i].classList.remove("active");
    }
    sliderIndex++;
    if(sliderIndex>slides.length){
        sliderIndex=1;
    }
    slides[sliderIndex-1].classList.add("active");
    setTimeout(showSlides,3000);
}