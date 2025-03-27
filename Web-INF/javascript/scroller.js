
document.addEventListener("DOMContentLoaded", function() {
const carousel = document.querySelector(".carousel");
const projects = document.querySelectorAll(".project");
const prevBtn = document.querySelector(".prev-btn");
const nextBtn = document.querySelector(".next-btn");

let currentIndex = 0;
const projectsPerPage = 3;
const totalProjects = projects.length;
const totalPages = Math.ceil(totalProjects / projectsPerPage);

function updateCarousel() {
    // Calculate the translation percentage based on the current index
    const translateXPercent = -(currentIndex * (100/3));
    carousel.style.transform = `translateX(${translateXPercent}%)`;
}

prevBtn.addEventListener("click", () => {
    if (currentIndex > 0) {
    currentIndex--;
    updateCarousel();
    }
});

nextBtn.addEventListener("click", () => {
    if (currentIndex < totalPages - 1) {
    currentIndex++;
    updateCarousel();
    }
});
});


