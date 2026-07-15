// IRAA AI V1 Scripts
const creatorBtn = document.querySelector(".creator");
const creatorMenu = document.querySelector(".creator-menu");

creatorBtn.addEventListener("click", () => {
    creatorMenu.classList.toggle("show");
});

// =========================
// AI Tools Slider
// =========================

const pages = document.querySelectorAll(".tools-page");
const dots = document.querySelectorAll(".slider-indicator .dot");

const leftArrow = document.querySelector(".arrow.left");
const rightArrow = document.querySelector(".arrow.right");

let currentPage = 0;

function updateSlider() {

    pages.forEach((page, index) => {
        page.classList.remove("active");

        if(index === currentPage){
            page.classList.add("active");
        }
    });

    dots.forEach((dot,index)=>{
        dot.classList.toggle("active", index===currentPage);
    });

    leftArrow.style.visibility =
        currentPage===0 ? "hidden" : "visible";

    rightArrow.style.visibility =
        currentPage===pages.length-1 ? "hidden" : "visible";
}

rightArrow.addEventListener("click",()=>{

    if(currentPage < pages.length-1){
        currentPage++;
        updateSlider();
    }

});

leftArrow.addEventListener("click",()=>{

    if(currentPage > 0){
        currentPage--;
        updateSlider();
    }

});

// Initial State
updateSlider();
