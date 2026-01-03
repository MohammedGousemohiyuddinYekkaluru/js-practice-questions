// Update the DOM based on the user input in real-time

let nameInput = document.querySelector("#name")
let emailInput = document.querySelector("#email")
let nameVal = document.querySelector(".name")
let emailVal = document.querySelector(".email")


nameInput.addEventListener("input", (e) => {
    nameVal.innerText = e.target.value
})

emailInput.addEventListener("input", (e) => {
    emailVal.innerText = e.target.value
})
