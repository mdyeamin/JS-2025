// fetch
// fetch("https://jsonplaceholder.typicode.com/todos/21")
//   .then((res) => res.json())
//   .then((data) => console.log(data));

const url = "https://jsonplaceholder.typicode.com/posts";
const fetchPost = ()=>{
  fetch(url)
    .then((res) => res.json())
// .then(data=> loadData(data))
    .then(loadData); // এভাবেও কল করা যায়, কোন সমস্যা নাই
}
document.getElementById("dataLoad").addEventListener("click", () => fetchPost());

function loadData(posts) {
  // get the container 
  const container = document.getElementById("card-container")
  container.innerHTML = ""; // clear the container before adding new cards
  posts.forEach(element => {
    const div = document.createElement("div")
    div.innerHTML = `
    <div class="card">
        <h3>${element.title}</h3>
        <p>${element.body}</p>
    </div>
    `
    container.append(div)
  });

}
fetchPost()