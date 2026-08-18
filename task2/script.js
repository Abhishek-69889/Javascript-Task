let h1 = document.querySelector("h1");
let btn1 = document.getElementsByTagName("button")[0];
let btn2 = document.getElementsByTagName("button")[1];
let btn3 = document.getElementsByTagName("button")[2];
let btn4 = document.getElementsByTagName("button")[3];
btn1.addEventListener("click",()=>{
  if(h1.style.color != "red"){
    h1.style.color="red";
    btn1.innerText="White"
  }else{
    h1.style.color="white";
    btn1.innerText="Red"
  };
})
btn2.addEventListener("click",()=>{
  if(h1.style.color != "yellow"){
    h1.style.color="Yellow";
    btn2.innerText="White"
  }else{
    h1.style.color="white";
    btn2.innerText="Yellow"
  };
})
btn3.addEventListener("click",()=>{
  if(h1.style.color != "blue"){
    h1.style.color="Blue";
    btn3.innerText="White"
  }else{
    h1.style.color="white";
    btn3.innerText="Blue"
  };
})
btn4.addEventListener("click",()=>{
  if(h1.style.color != "green"){
    h1.style.color="Green";
    btn4.innerText="White"
  }else{
    h1.style.color="white";
    btn4.innerText="Green"
  };
})