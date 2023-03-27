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

function updateUI(input) {
  inputTag.value += input;
}
