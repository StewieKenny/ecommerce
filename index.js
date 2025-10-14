document.addEventListener("DOMContentLoaded", ()=>{
    var headerDisplay = document.querySelectorAll(".head-col");
    var navContainer = document.querySelector(".nav-container");
    var slideIndex = 0;
    intervalId = null;
    var bgColors = ["#e9e1d4", "#ede9dd", "#f1f1f1"];

    onScreenShow();

    function onScreenShow(){
        headerDisplay[slideIndex].classList.add("showPicture");
        intervalId = setInterval(()=>{
            nextSlide();
            navContainer.style.background = bgColors[slideIndex];
        },5000);
        
    }

    function nextSlide(){
        slideIndex++;
        if (slideIndex >= headerDisplay.length) {
            slideIndex = 0; 
        }
        showSlide();
    }

    function showSlide(x){
        
        headerDisplay.forEach((x=>{
        x.classList.remove("showPicture");
        }));
        headerDisplay[slideIndex].classList.add("showPicture");
    }

});

document.addEventListener("DOMContentLoaded", ()=>{
    var nextLeft = document.querySelector(".left");
    var nextRight = document.querySelector(".right");
    var slideRow = document.querySelector(".slide-row");
    let move = 350;

    nextLeft.addEventListener("click", ()=>{
        slideRow.scrollBy({left: -move, behavior:'smooth'});
    })

    nextRight.addEventListener("click", ()=>{
        slideRow.scrollBy({left: move, behavior:'smooth'});
    })
});


document.addEventListener("DOMContentLoaded", ()=>{
    var mainImage = document.querySelector(".main-image");
    var secondaryImage = document.querySelectorAll(".secondary-image");

    
    secondaryImage.forEach(image =>{
        image.addEventListener("click", ()=>{
            mainImage.src = image.src
        });
    });
});
