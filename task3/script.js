let p = document.querySelector("p");
let hide = document.getElementsByTagName("button")[0];
let show = document.getElementsByTagName("button")[1];

hide.addEventListener("click",()=>{
  if(p.style.display!=="none"){
    p.style.display="none";
  }else{
    alert("Already hiden!")
  }
});
show.addEventListener("click",()=>{
  if(p.style.display==="none"){
    p.style.display="block";
  }else{
    alert("Wrong command!")
  }
})