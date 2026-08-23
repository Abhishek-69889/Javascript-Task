let input = document.querySelector("input");
let lis = document.querySelectorAll("li");
let btn = document.querySelector("button");
console.log(lis);

btn.addEventListener("click",()=>{
  lis.forEach(element=>{
  if(input.value==element){
    console.log(` ${element}`)
  }
})
})