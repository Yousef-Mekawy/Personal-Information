
window.onload = () => {
const username = window.prompt("من فضلك أدخل اسمك:");
alert(`اهلا بك معنا!${username} 😊`);
};

document.getElementById("toggleTheme").addEventListener("click", () => {
document.body.classList.toggle("dark-mode");
});
const boxes = document.querySelectorAll(".box");

window.addEventListener("scroll", () => {
boxes.forEach((box) => {
const boxPosition = box.getBoundingClientRect().top;
const windowHeight = window.innerHeight;
if (boxPosition < windowHeight - 100) {
box.classList.add("show");
}
});
});
const backToTop = document.getElementById("backToTop");
window.addEventListener("scroll", () => {
if (window.scrollY > 200) {
backToTop.style.display = "block";
} else {
backToTop.style.display = "none";
}
});

backToTop.addEventListener("click", () => {
window.scrollTo({ top: 0, behavior: "smooth" });
});