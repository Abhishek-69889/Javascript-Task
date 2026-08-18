let inp1 = document.getElementsByTagName("input")[0];
let inp2 = document.getElementsByTagName("input")[1];
let h2 = document.getElementsByTagName("h2")[0];
let btns = document.querySelectorAll("button");

function getNumber(){
  let a  = Number(inp1.value);
  let b  = Number(inp2.value);
  return [a, b];
}; 

function calculate(operation , name){
  let [a, b]=getNumber();
  let result = operation(a,b);
  h2.innerText = name + ": " + result;
};

btns[0].addEventListener("click",()=>{
  calculate((a,b)=>a-b , "Substraction");
});

btns[1].addEventListener("click",()=>{
  calculate((a,b)=>a+b, "Addition");
});

btns[2].addEventListener("click",()=>{
  calculate((a,b)=>a*b, "Multiplication");
});

btns[3].addEventListener("click",()=>{
  calculate((a,b)=>a/b, "Division");
});

btns[4].addEventListener("click",()=>{
  calculate((a,b)=>a%b, "Modulo");
});