
const hiddenElements = document.querySelectorAll(".postHidden");
const hiddenTexts = document.querySelectorAll(".textHidden");
const root = document.querySelector(".feedDiv");

const observer = new IntersectionObserver(enteries => {
    enteries.forEach(entry =>{
        entry.target.classList.toggle("show", entry.isIntersecting);
    })
}
, {root: root });

hiddenElements.forEach(el => observer.observe(el));
hiddenTexts.forEach(el => observer.observe(el));
