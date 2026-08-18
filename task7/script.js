let txt=document.querySelector("textarea");
let spn = document.querySelector("span");

txt.addEventListener("input",()=>{
  spn.innerText=txt.value.length;
})