//explain what is pass by value and pass by reference with examples
// In pass by value, a copy of the value is passed to the function.
// Changes made inside the function do not affect the original value outside the function.
// Example:
let num = 10;
function changeValue(x) {
    x = 20;
}
changeValue(num);
console.log(num); // Output: 10 (unchanged)

// In pass by reference, a reference to the original value is passed to the function.
// Changes made inside the function affect the original value outside the function.
// Example:
let obj = { name: "Alice" };
function changeName(person) {
    person.name = "Bob";
}
console.log(obj.name); // Output: "Alice" (unchanged)
changeName(obj);
console.log(obj.name); // Output: "Bob" (changed)

// explain what is arguments object in js with example
// The arguments object is an array-like object that contains all the arguments passed to a function. 
// It allows you to access the arguments passed to a function even if you don't know how many there are.    
// Example:
function sum() {
    let total = 0;
    for (let i = 0; i < arguments.length; i++) {
        total += arguments[i];
    }
    return total;
}

console.log(sum(1, 2, 7));

// arguments example with array
function passArguments(arr1, arr2) {

console.log(arguments[1]);


}

passArguments([1, 2, 3], [4, 5, 6])

// arguments example with more than 10 arguments

function n(n) {
console.log(arguments, arguments[7]);

}

n(1, 2, 3, 4, 5, 6, 7, 8, 9, 10)