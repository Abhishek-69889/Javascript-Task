let h1=document.querySelector('h1');
let btn = document.querySelector('button')
btn.addEventListener("click" , ()=>{
  if(h1.innerText!="this is modified text"){
    h1.innerText="this is modified text";
  }else{
    h1.innerText="This is javascript task 1.";
  };
})