// example of using forEach and map method in array with for loop
const items = [1, 2, 3, 4, 5];

const double = []
for (let item of items){
    // console.log(item *2);
    // const double = item * item;
    // // console.log(double);
    double.push(item * 2);
}

// another way to do the same thing is using
// map method with arrow function
const doubleIt = num => num * num;
const doubled = items.map(doubleIt);
// console.log(doubled);


// another way to do the same thing is using map
// method with inline arrow function
const doubleIt2 = items.map(num => num * num); 
console.log(doubleIt2);



const friends = ["Alice", "Bob", "Charlie", "David", "Eve", "Frank", "Grace", "Heidi", "Ivan", "Judy"];

// using for loop to get the first 5 friends
const firstFiveFriends = friends.slice(0, 5);
console.log(firstFiveFriends);

const firstLetters =  friends.map(friend => friend[0]);
console.log(firstLetters);
