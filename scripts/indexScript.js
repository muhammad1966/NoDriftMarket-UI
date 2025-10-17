const ham = document.getElementById("menuIcon");
const close = document.getElementById("closeIcon");
const nav = document.getElementById("navDivMob");

ham.addEventListener("click", () => {
    nav.style.display = "flex";
    close.style.display = "flex";
    ham.style.display = "none";
})

close.addEventListener("click", () => {
    nav.style.display = "none";
    close.style.display = "none";
    ham.style.display = "flex";
})
