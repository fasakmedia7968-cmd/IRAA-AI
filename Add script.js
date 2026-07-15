// IRAA AI V1 Scripts
const creatorBtn = document.querySelector(".creator");
const creatorMenu = document.querySelector(".creator-menu");

creatorBtn.addEventListener("click", () => {
    creatorMenu.classList.toggle("show");
});

// =========================
// AI Tools Slider
// =========================

const toolsPage = document.querySelector(".tools-page");
const leftArrow = document.querySelector(".tools-arrows span:first-child");
const rightArrow = document.querySelector(".tools-arrows span:last-child");

let currentPage = 0;
const pageWidth = 610; // 5 cards width

rightArrow.addEventListener("click", () => {
    currentPage++;

    if(currentPage > 1){
        currentPage = 0;
    }

    toolsPage.style.transform = `translateX(-${currentPage * pageWidth}px)`;
});

leftArrow.addEventListener("click", () => {
    currentPage--;

    if(currentPage < 0){
        currentPage = 1;
    }

    toolsPage.style.transform = `translateX(-${currentPage * pageWidth}px)`;
});
