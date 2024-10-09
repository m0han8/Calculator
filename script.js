const inputValue = document.getElementById("user-input");

const numberButtons = document.querySelectorAll(".buttons button:not(.ac):not(.del):not(.equal)");
numberButtons.forEach(function (button) {
  button.addEventListener("click", function () {
    if (inputValue.innerText === "0") {
      inputValue.innerText = "";
    }
    inputValue.innerText += button.innerText;
  });
});

const operatorButtons = document.querySelectorAll(".ac, .del, .equal");
operatorButtons.forEach(function (button) {
  button.addEventListener("click", function () {
    const buttonValue = button.innerText;

    if (buttonValue === "AC") {
      inputValue.innerText = "0";
    } else if (buttonValue === "DEL") {
      inputValue.innerText = inputValue.innerText.slice(0, -1);
      if (inputValue.innerText === "") {
        inputValue.innerText = "0";
      }
    } else if (buttonValue === "=") {
      try {
        inputValue.innerText = eval(inputValue.innerText);
      } catch {
        inputValue.innerText = "Error";
      }
    }
  });
});
