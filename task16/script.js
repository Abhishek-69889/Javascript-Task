let input = document.querySelector("input");
let ul = document.querySelector("ul");
let lis = document.querySelectorAll("li");

let items = ["apple", "banana", "cat", "dog", "house", "sun", "moon", "star", "tree", "water", "fire", "book", "pen", "desk", "chair", "shoe", "shirt", "hat", "car", "bus", "train", "road", "city", "town", "hill", "bird", "fish", "milk", "bread", "food"];

// IIFE (Immediately Invoked Function Expression)
(function (items){
  items.forEach(element => {
    let li = document.createElement("li");
    li.innerText=element;
    ul.appendChild(li);
  });
})(items);

input.addEventListener("input",()=>{
  const result = items.filter(element=>element.toLocaleLowerCase().includes(input.value.toLocaleLowerCase()))
  console.log(result);
  if(result.length>0){
    ul.innerText="";
    result.forEach(element => {
    let li = document.createElement("li");
    li.innerText=element;
    ul.appendChild(li);
    });
  }
})