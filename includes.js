const username = [
  "user_one",
  "userTwo",
  "user.three",
  "user-four",
  "userFive",];


// console.log(username);


const userFive =  username.includes("userFive");
console.log(userFive); // true

const userSix =  username.includes("userSix");
console.log(userSix); // false