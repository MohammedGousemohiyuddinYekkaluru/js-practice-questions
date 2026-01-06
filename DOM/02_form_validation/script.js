//form validation in real-time and show error messages dynamically

let nameInput = document.querySelector("#name");
let emailInput = document.querySelector("#email");
let passwordInput = document.querySelector("#password");
let nameError = document.querySelector(".nameError");
let emailError = document.querySelector(".emailError");
let passwordError = document.querySelector(".passwordError");

nameInput.addEventListener("input", (e) => {
  let name = e.target.value;
  if (name.length < 3) {
    nameError.innerText = "The name length should be greater than 3";
  }else {
    nameError.innerText = "";
  }
});

emailInput.addEventListener("input", (e) => {
  let email = e.target.value;
  if (!email.includes("@") || !email.includes(".")) {
    emailError.innerText = "Email is invalid"
  }else {
    emailError.innerText = "";
  }
});

passwordInput.addEventListener("input", (e) => {
  let password = e.target.value;
  if (password.length < 6) {
    passwordError.innerText = "Password should be atleast 6 characters";
  }else {
    passwordError.innerText = "";
  }
});
