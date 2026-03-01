// what is array filter method?//
// The filter() method creates a new array with all elements that
// pass the test implemented by the provided function.
// and it returns a new array with condition true value.

const numbers = [2, 5, 8, 11, 14, 17, 20];

// filter out the even numbers from the array
const evenNum = numbers.filter((num) =>   num % 2 === 0);
// console.log(evenNum);


const students = [
    { name: 'Alice',age: 15 , grade: 85 },
    { name: 'Bob', age: 17, grade: 92 },
    { name: 'Charlie', age: 16, grade: 78 },
    { name: 'David', age: 18, grade: 90 },
    { name: 'Eve', age: 14, grade: 88 },
    {name: 'Frank', age: 19, grade: 80 }    
];

const clildStudents = students.filter(student=> (student.age <= 17))
console.log(clildStudents);
