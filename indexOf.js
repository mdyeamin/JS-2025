// give me 5 names array 
const names = ["Alice", "Bob", "Charlie", "David", "Eve"];

// find the index of "Charlie" in the names array
const index = names.indexOf("Chalie");

console.log(index);


if (index !== -1) {
    console.log (`"Charlie" found at index: ${index}`);
}
else{
    console.log (` not found in the array.`);
}