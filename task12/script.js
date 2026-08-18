let h2=document.querySelector("h2");

setInterval(()=>{
  h2.innerText=new Date().toLocaleTimeString();
},1000);