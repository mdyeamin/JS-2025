// what is hoisting in JavaScript? 
// Hoisting is a JavaScript mechanism where variable and function declarations are moved to the top of their scope before code execution.
// In JavaScript, it is possible to use variables and functions before they are declared.
// This behavior is due to hoisting, which moves declarations to the top of their scope.
// Example of hoisting with variables
console.log(x); // Output: undefined // because variable declarations are hoisted but not their initializations
var x = 5;
// but let and const are not hoisted
// Example of hoisting with functions
sayHello(); // Output: Hello // because function declarations are hoisted
function sayHello() {
  console.log("Hello");
}