const Input = document.querySelector("#input")
const redBtn = document.querySelector("#red")
const blueBtn = document.querySelector("#blue")
const greenBtn = document.querySelector("#green")
const outPut = document.querySelector("#output")

Input.addEventListener("input", function () {
    displayOutput(Input.value)
})

redBtn.addEventListener("click",redText );
blueBtn.addEventListener("click",blueText );
greenBtn.addEventListener("click",greenText );

function displayOutput(text) {
    outPut.innerHTML = text
}
function redText () {
    outPut.style.color="red"
}
function blueText () {
    outPut.style.color="blue"
}
function greenText() {
    outPut.style.color = "green"
}
