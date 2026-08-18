let body = document.querySelector("body");
let btn = document.querySelector("button");

btn.addEventListener("click",()=>{
  if(btn.innerText==="Light"){
    body.style.backgroundColor="white";
    body.style.color="black";
    btn.innerText="Dark";
  }else{
    body.style.backgroundColor="black";
    body.style.color="white";
    btn.innerText="Light";
  };
})