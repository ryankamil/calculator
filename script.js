// take elements from class and put them in query
const numbers = document.querySelectorAll(".number");
const calculatorScreen = document.querySelector(".calculator-screen");
const operators = document.querySelectorAll(".operator");
const equalSign = document.querySelector(".equal-sign");
const clearBtn = document.querySelector(".all-clear");
const decimal = document.querySelector(".decimal");

// declaration 3 variable
let preNumber = "";
let calculatorOperator = "";
let currentNumber = "0";

// condition enter number
const inputNumber = (number) => {
  if (currentNumber === "0") {
    currentNumber = number;
  } else {
    currentNumber += number;
  }
};

// function Update number on screen
const updateScreen = (number) => {
  calculatorScreen.value = number;
};

// function input Operator
const inputOperator = (operator) => {
  if (calculatorOperator === "") {
    preNumber = currentNumber;
  }
  calculatorOperator = operator;
  currentNumber = "0";
};

// print number on screen
numbers.forEach((number) => {
  number.addEventListener("click", (event) => {
    inputNumber(event.target.value);
    updateScreen(currentNumber);
  });
});

// print operator on screen
operators.forEach((operator) => {
  operator.addEventListener("click", (event) => {
    inputOperator(event.target.value);
  });
});

// decimal operator

inputDecimal = (dot) => {
  if (currentNumber.includes(".")) {
    return;
  }
  currentNumber += dot;
};

decimal.addEventListener("click", (event) => {
  inputDecimal(event.target.value);
  updateScreen(currentNumber);
});

// run operator result
equalSign.addEventListener("click", () => {
  calculator();
  updateScreen(currentNumber);
});

// run button clear
const clearAll = () => {
  preNumber = "";
  calculatorOperator = "";
  currentNumber = "0";
};

clearBtn.addEventListener("click", () => {
  clearAll();
  updateScreen(currentNumber);
});
// end

// definision condition operator(+, - , * , /)
const calculator = () => {
  let result = "";
  switch (calculatorOperator) {
    case "+":
      result = parseFloat(preNumber) + parseFloat(currentNumber);
      break;

    case "-":
      result = preNumber - currentNumber;
      break;

    case "*":
      result = preNumber * currentNumber;
      break;

    case "/":
      result = preNumber / currentNumber;
      break;

    default:
      break;
  }
  currentNumber = result;
  calculatorOperator = " ";
};
