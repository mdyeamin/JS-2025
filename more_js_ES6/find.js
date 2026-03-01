// what is array find method ?
// The find() method returns the value of the
// first element in the array that satisfies the provided
// condition. Otherwise, it returns undefined.

const students = [
    { name: 'Alice',age: 15 , grade: 85 },
    { name: 'Bob', age: 17, grade: 92 },
    { name: 'Charlie', age: 16, grade: 78 },
    { name: 'yob', age: 17, grade: 82 },
    { name: 'David', age: 18, grade: 90 },
    { name: 'tob', age: 17, grade: 93 },
    { name: 'Eve', age: 14, grade: 88 },
    {name: 'Frank', age: 19, grade: 80 }    
];

const childStudents = students.find(student=> (student.age == 17))
console.log(childStudents);