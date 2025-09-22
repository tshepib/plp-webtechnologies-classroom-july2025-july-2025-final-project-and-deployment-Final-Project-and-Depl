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