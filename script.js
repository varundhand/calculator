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
function updateUI(buttonClicked) {
  // input is button clicked string
  if (buttonClicked === "=") {
    const finalAnswer = calculation(inputTag.value); // TODO : make final calculation function here
    inputTag.value = finalAnswer;
  } else if (buttonClicked === "<") {
    const updatedValue = backSpaceFunc(inputTag.value);
    inputTag.value = updatedValue;
  } else if (
    ["+", "-", "×", "÷"].some((opprend) => opprend === buttonClicked)
  ) {
    console.log("operand is accessed");
    if (
      inputTag.value.includes("+") || // 'includes' is used to check within a string and 'some' is higher order array method
      inputTag.value.includes("-") ||
      inputTag.value.includes("×") ||
      inputTag.value.includes("÷")
    ) {
      window.alert("Operand limit exceeded.");
    } else {
      inputTag.value += buttonClicked;
      operand = buttonClicked; // the operand used is assigned in global scope
    }
  } else {
    inputTag.value += buttonClicked; // value attribute is being accessed
  }
  // need to make a condition to check if the current input and previous input are symbols or not
}

function backSpaceFunc(inputValue) {
  return inputValue.slice(0, inputValue.length - 1);
}

function calculation(numbers) {
  console.log(numbers);
  const splitNumbers = numbers.split(operand);
  if (operand === "+") {
    console.log(splitNumbers);
    return parseInt(splitNumbers[0]) + parseInt(splitNumbers[1]);
  } else if (operand === "-") {
    return parseInt(splitNumbers[0]) - parseInt(splitNumbers[1]);
  } else if (operand === "×") {
    return parseInt(splitNumbers[0]) * parseInt(splitNumbers[1]);
  } else {
    // for divide
    return parseInt(splitNumbers[0]) / parseInt(splitNumbers[1]);
  }
}

function clearInput() {
  if (inputTag.value) {
    inputTag.value = "";
  } else {
    console.log("there is not input yet");
  }
}
12;

//! function for key binding
document.addEventListener("keydown", (event) => {
  // event is the keyboard event which is triggered/clicked
  // console.log(event);
  if (event.keyCode === 48) {
    // alter: e.key.toLowerCase()==='u'
    updateUI("0");
  } else if (event.keyCode === 49) {
    updateUI("1");
  } else if (event.keyCode === 50) {
    updateUI("2");
  } else if (event.keyCode === 51) {
    updateUI("3");
  } else if (event.keyCode === 52) {
    updateUI("4");
  } else if (event.keyCode === 53) {
    updateUI("5");
  } else if (event.keyCode === 54) {
    updateUI("6");
  } else if (event.shiftKey && event.keyCode === 56) {
    //! this needs to be above 8's keycode operation because the code runs from top to bottom and it would execute 8's condition before this.
    updateUI("×");
  } else if (event.keyCode === 55) {
    updateUI("7");
  } else if (event.keyCode === 56) {
    updateUI("8");
  } else if (event.keyCode === 57) {
    updateUI("9");
  } else if (event.shiftKey && event.keyCode === 187) {
    updateUI("+");
  } else if (event.keyCode === 189) {
    updateUI("-");
  } else if (event.keyCode === 191) {
    updateUI("÷");
  } else if (event.keyCode === 13) {
    const finalAnswer2 = calculation(inputTag.value);
    clearInput();
    updateUI(finalAnswer2.toString());
  } else if (event.keyCode === 8) {
    const backspaced = backSpaceFunc(inputTag.value);
    clearInput();
    updateUI(backspaced);
  } else if (event.keyCode === 27) {
    clearInput();
  }
});
