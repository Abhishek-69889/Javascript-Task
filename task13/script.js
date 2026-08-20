let inp = document.querySelector("input");
let btn = document.querySelector("button");
let ul = document.querySelector("ul");

let arr =[];


btn.addEventListener("click",()=>{
  let val = inp.value;
  if(val.length!==0){
    arr.push(val);

    let div1 = document.createElement("div");
    let div2 = document.createElement("div");
    let inp1 = document.createElement("input")
    let li = document.createElement("li")
    let button = document.createElement("button");

    ul.appendChild(div1);
    div1.appendChild(div2);
    div2.appendChild(inp1);
    div2.appendChild(li);
    div1.appendChild(button);
    
    div1.classList.add("list-main");
    inp1.type="checkbox";
    inp1.style.cursor="Pointer";

    arr.forEach(item=>{
      li.innerText=item;
      button.innerText="Delete";
    });

    button.addEventListener("click",()=>{
      div1.remove();
    });

    
    inp1.addEventListener("click",()=>{
      if(inp1.checked){
      console.log("Checked");
      li.style.color="yellow"
      li.style.textDecoration="line-through"
      }else{
        console.log("not checked");
        li.style.color="white";
        li.style.textDecoration="none"
      };
    });

    alert(`${val} added to the to do task`);
    inp.value="";


  }else{
    alert("Enter a valid task Value");
  }
})