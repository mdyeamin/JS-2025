// what is closure in js?
// closure is a function that has access to the variables in its outer scope, even after the outer function has returned.

function outerFunction(owner) {
  let increase = 0;
  function innerFunction() {
    increase++;
    console.log("this is for",owner, increase);
  }
  return innerFunction;
}
const yeamin = outerFunction("Yeamin");
const user  = outerFunction("User");
yeamin();
yeamin();
yeamin();
yeamin();
yeamin();
user();
user();
yeamin();