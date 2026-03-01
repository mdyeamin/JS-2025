// what is reduce?
// reduce is a method that takes a callback function and an initial value as arguments.
// The callback function takes two arguments: the accumulator and the current value.
// The reduce method applies the callback function to each element in the array,
// passing the result of the previous callback as the accumulator for the next iteration.
// The final result is a single value that is the result of reducing the array.
const numbers = [1, 2, 3, 4, 5];

// sum of all numbers in the array
const sum = numbers.reduce(
  (accumulator, currentValue) => accumulator + currentValue,
  0,
);
console.log(sum); // Output: 15

const students = [
  { name: "Alice", age: 15, isBrilliant: true, grade: 85 },
  { name: "Bob", age: 17, isBrilliant: true, grade: 92 },
  { name: "Charlie", age: 16, isBrilliant: false, grade: 78 },
  { name: "David", age: 18, isBrilliant: true, grade: 90 },
  { name: "Eve", age: 14, isBrilliant: true, grade: 88 },
  { name: "Frank", age: 19, isBrilliant: true, grade: 80 },
];

// calculate the average grade of all students
const averageGrade =
  students.reduce((accumulator, student) => accumulator + student.grade, 0) /
  students.length;
console.log(averageGrade); // Output: 85.5
