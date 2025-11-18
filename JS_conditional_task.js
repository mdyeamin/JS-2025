/*
// task 1 

Free Drinks
    - Burger more than 500tk: free Coke
    - Else Coke: 30tk
*/
// answer 1

let burgerPrice = 300;
let cokePrice = 30;
if (burgerPrice >= 500) {
cokePrice = 0    
}
else{
    coke = 30;
}
// console.log(coke);


/*
// task 2

BMI Calculator and Health Category

Create a JavaScript program that calculates the Body Mass Index (BMI) and assigns a health category based on the BMI value. Use nested if-else statements to determine the health category.

    - Calculate BMI using the formula: BMI = weight (kg) / (height (m))^2
    - BMI < 18.5, you are underweight.
    - BMI >= 18.5 and BMI <=24.9, you are normal.
    - BMI >=25 and BMI <= 29.9, you are overweight.
    - Otherwise, you are obese.
*/

// answer 2

let weight = 75;
let height = 1.72;
let BMI = weight / (height * height)
let category;

if (BMI <18.5) {
category = "underweight"    
}
else if(BMI >= 18.5 && BMI <= 24.9){
category = "you are normal"
}
else if (BMI >=25 && BMI<= 29.9){
category = "you are overweight"
}
else{
    category = "you are obese"
}
console.log(category);
console.log( parseFloat(BMI).toFixed(2));


/*
// task 3 
Grade Calculator

Create a simple JavaScript program that takes a student's score as input and returns their corresponding grade based on the following grading scale:

    A: 90-100
    B: 80-89
    C: 70-79
    D: 60-69
    F: 0-59
*/

// answer 3

/*

// task 4
if you get more then 80 then inside your friend score. 
    If your friend get more than 80. then go for a lunch. 
    if your friend get below 80 but greater than or equal 60 then tell your friend, good luck next time. 
    if your friend get less than 60 but more than or equal to 40 then, keep your friend's message unseen.
    if your friend get less than 40, block your friend
if you get less than 80 go to home and sleep and act sad

Note: 
use nested if-else-if-else
*/

// answer 4

let my_score = 85;
let friend_score = 39;
let myShouldToDo;
if (my_score >= 80) {
  if (friend_score >= 80) {
    myShouldToDo = "go for a lunch";
  } else if (friend_score < 80 && friend_score >= 60) {
    myShouldToDo = "Hi friend, good luck next time";
  } else if (friend_score < 60 && friend_score >= 40) {
    myShouldToDo = "keep your friend's message unseen.";
  } else if (friend_score < 40) {
    myShouldToDo = "block your friend";
  }
} else {
  myShouldToDo = "go to home and sleep and act sad";
}

// console.log(myShouldToDo);




/*
// task 5 
you have two numbers in two variables, called: num1, num2

now declare a variable called result. 
if num1 is bigger than num2 then result will be double of num1. if not, then the value of the variable result will be the sum of num1 and num2.

write a simple if-else. 

also, write it using ternary operator.
 */

// answer 5 


let num1 = 25;
let num2 = 20;
let result;

if (num1 > num2) {
    result = num1 * 2;
}
else{
    result = num1 + num2;
}
// console.log(result);


/*
// task 6 
Ticket fare Calculator
    - Children (age < 10): free
    - Students get a 50% discount
    - Senior citizens (age >= 60) gets a 15% Discount
    - Otherwise Regular ticket fare 800 tk
*/
let age =100;
let isStudents = false; 
let ticketFare = 800;

 if (isStudents) {
    ticketFare = ticketFare / 2
}
else if (age < 10) {
    
    ticketFare = 0;
}
else if (age >= 60) {

    ticketFare = ticketFare - ticketFare * 15 / 100;
    
}
else{
    ticketFare
}
// console.log(ticketFare);

