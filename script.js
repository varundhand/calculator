const buttonsNodes = document.querySelectorAll("li");
const inputTag = document.querySelector("input");
const clearBtn = document.querySelector("button");

buttonsNodes.forEach((button) => {
  button.addEventListener("click", handleBtnClick);
});

function handleBtnClick(e) {
  // const { innerText: buttonClicked } = e.target;
  const buttonClicked = e.target.innerText;
  console.log(buttonClicked);

  updateUI(buttonClicked);
}

let operand;

//! function to update the UI on button clicks
function updateUI(input) {
  // input is button clicked node
  if (input === "=") {
    const finalAnswer = calculation(inputTag.value); // TODO : make final calculation function here
    inputTag.value = finalAnswer;
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
      operand = input; // the operand used is assigned in global scope
    }
  } else {
    inputTag.value += input; // value attribute is being accessed
  }
  // need to make a condition to check if the current input and previous input are symbols or not
}

function backSpaceFunc(inputValue) {
  return inputValue.slice(0, inputValue.length - 1);
}

function calculation(numbers) {
  const splitNumbers = numbers.split(operand);
  if (operand === "+") {
    return splitNumbers[0] + splitNumbers[1];
  } else if (operand === "-") {
    return splitNumbers[0] - splitNumbers[1];
  } else if (operand === "×") {
    return splitNumbers[0] * splitNumbers[1];
  } else {
    // for divide
    return splitNumbers[0] / splitNumbers[1];
  }
}

function clearInput() {
  if (inputTag) {
    inputTag.value = "";
  } else {
    console.log("there is not input yet");
  }
}
