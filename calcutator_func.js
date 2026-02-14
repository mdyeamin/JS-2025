function addition(a, b) {
  return a + b;
}
function subtraction(a, b) {
  return a - b;
}
function multiply(a, b) {
  return a * b;
}
function divide(a, b) {
  return a / b;
}

function calculate(a, b, operation) {
  if (operation === "addition") {
    return addition(a, b);
  } else if (operation === "subtraction") {
    return subtraction(a, b);
  } else if (operation === "multiply") {
    return multiply(a, b);
  } else if (operation === "divide") {
    return divide(a, b);
  } else {
    return "Please give the 2 number and do the math calc using 'Addition','Subtraction','Addition','Multiply','Divide',";
  }
}

const result = calculate(10, 7, "subtraction");

console.log(result);
