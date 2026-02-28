// what is call back function in js  ?
// A callback function is a function that is passed
// as an argument to another function and is executed
// after some operation has been completed.
 
function sayBye (){
    console.log("Bye!");
    
}

function doSomething(task){
console.log(`i have to go to bed 😴`);
task();
}

doSomething(sayBye)

// Real Example (setTimeout)

setTimeout(function(){
    console.log("run after 5s");
    
},5000)