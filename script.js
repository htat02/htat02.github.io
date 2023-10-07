let display = document.getElementById("display");
let firstNum = "";
let secondNum = "";
let operator = "";

function arithmetic(op) {
  operator = op;
  display.value = firstNum + " " + operator + " ";
}

function appendNum(value) {
  if (operator === "") {
    firstNum += value;
    display.value = firstNum;
  } else {
    secondNum += value;
    display.value = firstNum + " " + operator + " " + secondNum;
  }
}

function clearDisplay() {
  firstNum = "";
  secondNum = "";
  operator = "";
  display.value = "";
}

function calculateResult() {
  if (firstNum !== "" && secondNum !== "" && operator !== "") {
    let num1 = parseFloat(firstNum);
    let num2 = parseFloat(secondNum);
    let result;

    switch (operator) {
      case "+":
        result = num1 + num2;
        break;
      case "-":
        result = num1 - num2;
        break;
      case "x":
        result = num1 * num2;
        break;
      case "/":
        if (num2 !== 0) {
          result = num1 / num2;
        } else {
          result = "Error";
        }
        break;
      default:
        result = "Error";
        break;
    }

    display.value = firstNum + " " + operator + " " + secondNum + " = " + result;
    firstNum = result.toString();
    secondNum = "";
    operator = "";
  }
}
