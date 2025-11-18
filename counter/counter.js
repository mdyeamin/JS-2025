


let counter = 0;

let count = document.getElementById("counterShow")


function increase() {
    counter++;
     
    count.innerText = counter;
    console.log(counter);

}


let showPost = document.getElementById("showPost")
let postInput = document.getElementById("postInput")

function clickTopost(){


    showPost.innerText = postInput.value;
    postInput.value = "";
}