let input= document.querySelector("input");
let btn= document.querySelector("button");
let h2= document.querySelector("h2");

btn.addEventListener("click",()=>{

  if(!input.value){
    alert("Enter Your name")
  }else{
    h2.innerText="Hello " + input.value + "!";
    input.value='';
  };
})