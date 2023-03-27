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
  if (input === "=") {
    null;
  } else if (input === "<") {
    null;
  } else if (["+", "-", "×", "÷"].some((opprend) => opprend === input)) {
    console.log("opprend is accessed");
    if (
      inputTag.value.includes("+") ||
      inputTag.value.includes("-") ||
      inputTag.value.includes("×") ||
      inputTag.value.includes("÷")
    ) {
      null;
    } else {
      inputTag.value += input;
    }
  } else {
    inputTag.value += input; // value attribute is being accessed
  }
  // need to make a condition to check if the current input and previous input are symbols or not
}
