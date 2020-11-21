let numberOne = null;
let numberTwo = null;
let operator = null;
let results = null;
let upperDisplay = null;
let bottomDisplay = null;
let screenTop = null;
let oldresults = null;
clearAll();

// Operation function takes 2 numbers and a sign and determine the operation.
function operate(numberOne, operator, numberTwo) {
  numberOne = Number(numberOne);
  numberTwo = Number(numberTwo);
  switch (operator) {
    case "+":
      return add(numberOne, numberTwo);
    case "-":
      return subtract(numberOne, numberTwo);
    case "*":
      return multiply(numberOne, numberTwo);
    case "/":
      return divide(numberOne, numberTwo);
  }
}

// Mathematical operations.
function add(m, n) {
  return m + n;
}
function subtract(m, n) {
  return m - n;
}
function multiply(m, n) {
  return m * n;
}
function divide(m, n) {
  return m / n;
}

// Selecting all buttons (with class 'button'.)
const buttons = document.querySelectorAll(".button");

// Going over each element in the node list "buttons" and adding click event listener.
for (let button of buttons) {
  button.addEventListener("click", onClick);
}
// Adding keyboard event listener when a key is pressed. The event listener is added to
// to the document. Otherwise it won't be initialized.
document.addEventListener("keydown", onPress);

// What happens when a button is clicked.
function onClick(event) {
  const button = event.target;
  let buttonValue = button.getAttribute("value");
  if (isNaN(buttonValue)) {
    switch (buttonValue) {
      case "=":
      case "enter":
      case "Enter":
        if (numberOne == "") {
          break;
        } else {
          results = operate(numberOne, operator, numberTwo);
          upperDisplay = `${numberOne} ${operator} ${numberTwo}`;
          document.querySelector(".top").innerText = upperDisplay;
          bottomDisplay = results;
          document.querySelector(".bottom").innerText = bottomDisplay;
          oldresults = results;
          reset();
          break;
        }
      case "clear":
      case "Clear":
        clearAll();
        break;
      case "+":
      case "-":
      case "/":
      case "*":
        if (oldresults == "") {
          operator = buttonValue;
          upperDisplay = `${numberOne} ${operator}`;
          document.querySelector(".top").innerText = upperDisplay;
          document.querySelector(".bottom").innerText = "";
          break;
        } else if (oldresults != "" && numberOne == "") {
          numberOne = oldresults;
          operator = buttonValue;
          upperDisplay = `${numberOne} ${operator}`;
          document.querySelector(".top").innerText = upperDisplay;
          document.querySelector(".bottom").innerText = "";
          break;
        } else {
          operator = buttonValue;
          upperDisplay = `${numberOne} ${operator}`;
          document.querySelector(".top").innerText = upperDisplay;
          document.querySelector(".bottom").innerText = "";
          break;
        }

      case ".":
        if (operator == "") {
          if (numberOne.includes(".")) {
            break;
          } else {
            numberOne += buttonValue;
            document.querySelector(".top").innerText = "";
            document.querySelector(".bottom").innerText = numberOne;
          }
        } else {
          if (numberTwo.includes(".")) {
            break;
          } else {
            numberTwo += buttonValue;
            document.querySelector(".bottom").innerText = numberTwo;
          }
        }
    }
    // if a number is clicked/pressed.
  } else {
    if (operator == "") {
      // reset();
      document.querySelector(".top").innerText = "";
      numberOne += buttonValue;
      document.querySelector(".bottom").innerText = numberOne;
    } else if (operator != "" && results == "") {
      numberTwo += buttonValue;
      numberOne = Number(numberOne);
      document.querySelector(".bottom").innerText = numberTwo;
    }
  }
}
// What happens when a key on the keyboard is pressed = Exactly like when a button is clicked.
function onPress(event) {
  // const buttonValue = event.key;
  // console.log(buttonValue)
  // numberOne = buttonValue;
}
// Clear variables & sign selections.
function clearAll() {
  numberOne = "";
  numberTwo = "";
  operator = "";
  results = "";
  oldresults = "";
  upperDisplay = "";
  bottomDisplay = "";
  document.querySelector(".top").innerText = "";
  document.querySelector(".bottom").innerText = "";
}
function clearDisplay() {
  document.querySelector(".top").innerText = "";
  document.querySelector(".bottom").innerText = "";
}
function reset() {
  numberOne = "";
  numberTwo = "";
  results = "";
  operator = "";
}
