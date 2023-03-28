const buttonsNodes = document.querySelectorAll("li");
const inputTag = document.querySelector("input");

buttonsNodes.forEach((button) => {
  button.addEventListener("click", handleBtnClick);
});

function handleBtnClick(e) {
  // const { innerText: buttonClicked } = e.target;
  const buttonClicked = e.target.innerText;
  console.log(buttonClicked);

  updateUI(buttonClicked);
}

//! function to update the UI on button clicks
function updateUI(input) {
  // input is button clicked node
  if (input === "=") {
    null;
  } else if (input === "<") {
    const updatedValue = backSpaceFunc(inputTag.value);
    inputTag.value = updatedValue;
  } else if (["+", "-", "×", "÷"].some((opprend) => opprend === input)) {
    console.log("operand is accessed");
    if (
      inputTag.value.includes("+") || // 'includes' is used to check within a string and 'some' is higher order array method
      inputTag.value.includes("-") ||
      inputTag.value.includes("×") ||
      inputTag.value.includes("÷")
    ) {
      window.alert("Operand limit exceeded.");
    } else {
      inputTag.value += input;
    }
  } else {
    inputTag.value += input; // value attribute is being accessed
  }
  // need to make a condition to check if the current input and previous input are symbols or not
}

function backSpaceFunc(inputValue) {
  return inputValue.slice(0, inputValue.length - 1);
}
