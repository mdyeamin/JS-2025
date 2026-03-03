// fetch
// fetch("https://jsonplaceholder.typicode.com/todos/21")
//   .then((res) => res.json())
//   .then((data) => console.log(data));

const url = "https://jsonplaceholder.typicode.com/posts";

document.getElementById("dataLoad").addEventListener("click", () => {
  fetch(url)
    .then((res) => res.json())
// .then(data=> loadData(data))
    .then(loadData); // এভাবেও কল করা যায়, কোন সমস্যা নাই
});

function loadData(posts) {
  posts.forEach(element => {
    console.log(element.title);
    
  });
}
