const menu = document.getElementById("menu");
const navText = document.getElementById("nav-text");

menu.addEventListener("click", () => {
    navText.classList.toggle("active");
});