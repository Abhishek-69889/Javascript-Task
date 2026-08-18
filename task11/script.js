let spn = document.querySelector("span");
let btn = document.querySelector("button");

getcolor=()=>{
  const character = "0123456789ABCDEF"
  let hex = '#';
  for(let i=0;i<6;i++){
    hex += character[Math.floor(Math.random()*16)];
  };
  return hex;
};

btn.addEventListener("click",()=>{
  let newcolor = getcolor();
  document.querySelector("body").style.backgroundColor = newcolor;
  spn.innerText=newcolor;
})