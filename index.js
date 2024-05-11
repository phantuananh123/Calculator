let num1 = "";
let num2 = "";
let operator = null;

const display = document.querySelector("#display");

const addNumber = (num) => {
  if (!operator) {
    num1 += num;
    display.innerHTML = num1;
  } else {
    num2 += num;
    display.innerHTML = num2;
  }
  console.log(num1, num2);
};
const setOperator = (newOperator) => {
  if (operator) {
    // calculate();
  } else {
    operator = newOperator;
  }
};
const calculate = () => {
  let result;
  if (operator === "add") {
    result = parseFloat(num1) + parseFloat(num2);
  }
  if (operator === "minus") {
    result = parseFloat(num1) - parseFloat(num2);
  }
  if (operator === "divide") {
    result = parseFloat(num1) / parseFloat(num2);
  }
  if (operator === "multiply") {
    result = parseFloat(num1) * parseFloat(num2);
  }
  display.innerHTML = result;
  num1 = "";
  num2 = "";
  operator = null;
  console.log(result);
};
const clearall = () => {
  num1 = "";
  num2 = "";
  operator = null;
  display.innerHTML = num1;
};
