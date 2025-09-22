// Toggle mobile menu
const toggleBtn = document.querySelector('.menu-toggle');
const navMenu = document.querySelector('.nav-menu');

toggleBtn.addEventListener('click', () => {
  navMenu.classList.toggle('active');
});
// Toggle mobile navigation menu
const toggleBtn = document.querySelector('.menu-toggle');
const navMenu = document.querySelector('.nav-menu');

toggleBtn.addEventListener('click', () => {
  navMenu.classList.toggle('active');
});
function multiplyNumbers(q, b) {
    return a * b;
}

let resultParagraph = document.getElementById("result");
let box = document.getElementById("box");
let button = document.getElementById("animateBtn");

button.addEventListener("click", function(){
    box.classList.add("animate");
    setTimeout(() => {
        box.classList.remove("animate");
    }, 1000);

    let product = multiplyNumbers(7, 5);
    resultsParagraph.textContent = "The product of 7 and 5 is: " + product;
});