let span = document.querySelector("span");
let sub = document.getElementsByTagName("button")[0];
let add = document.getElementsByTagName("button")[1];

let cnt =0;
sub.addEventListener("click",()=>{
  cnt--;
  span.innerText=cnt;
});
add.addEventListener("click",()=>{
  cnt++;
  span.innerText=cnt;
})
