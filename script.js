let inputField = document.getElementById("input");
let button = document.querySelector(".inputfield button");
let numContainer = document.querySelector(".numContainer");
let errorMsg = document.getElementById("errorMessage");

let totalNum; //this holds user prompt of how many num they want

function isPrime(num) {
  if (num < 2) return false;
  for (let i = 2; i <= Math.sqrt(num); i++) {
    if (num % i === 0) {
      return false;
    }
  }
  return true;
}

button.addEventListener("click", () => {
  let userInput = inputField.value.trim();

  if (userInput == "") {
    errorMsg.textContent = "Field is required";
    inputField.style.border = "2px solid red";
  } else if (isNaN(parseFloat(userInput))) {
    errorMsg.textContent = "Please enter a number";
    inputField.style.border = "2px solid red";
  } else {
    totalNum = userInput;
    errorMsg.textContent = ""; // Clear error message if input is valid
    inputField.style.border = "2px solid rgb(100, 189, 122)";
    numContainer.innerHTML = "";
  }

  for (i = 1; i <= totalNum; i++) {
    let p = document.createElement("p");
    p.textContent = i;
    numContainer.append(p);

    if (i % 2 === 0) {
      p.style.backgroundColor = "rgb(100, 189, 122)";
    } else if (isPrime(i)) {
      p.style.backgroundColor = " rgb(235, 105, 91)";
    } else {
      p.style.backgroundColor = "rgb(247, 220, 92)";
    }
  }
  totalNum = null;
});

inputField.addEventListener("keypress", (e) => {
  if (e.keyCode === 13) {
    button.click();
  }
});
