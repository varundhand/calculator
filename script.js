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
  if (input !== "=" && input !== "<") {
    inputTag.value += input; // value attribute is being accessed
  } else {
    null;
  }
  // need to make a condition to check if the current input and previous input are symbols or not
}
