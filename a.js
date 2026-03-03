function factorial(n) {
  let result = 1;

  for (let i = 1; i <= n; i++) {
    result *= i;
  }

  return result;

}
const factorialOf171 = factorial(171); // infinite because the result is too large to be represented as a number in JavaScript   
console.log(factorialOf171/ (1000000e+100 * 1000000e+100));  


console.log(1e10);
