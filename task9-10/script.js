let inp = document.querySelector("input");
let btn = document.querySelector("button");
let ul = document.querySelector("ul");


//without using array

/*btn.addEventListener("click",()=>{
  if(inp.value.length!==0){
    var div= document.createElement("div");
    let li = document.createElement("li");
    let dbtn = document.createElement("button");

    dbtn.addEventListener("click",()=>{
      div.remove();
    });

    li.innerText=inp.value;
    dbtn.innerText="Delete";
    ul.appendChild(div);
    div.appendChild(li);
    div.appendChild(dbtn);
    inp.value="";
  }else{
    alert("Enter a Valid list name..!")
  }
})*/


// using array

let arr = [];

btn.addEventListener("click",()=>{
  if(inp.value.length!==0){
    arr.push(inp.value);

    let div = document.createElement("div");
    let li = document.createElement("li");
    let dbtn = document.createElement("button");

    ul.appendChild(div);
    div.appendChild(li);
    div.appendChild(dbtn);
    
    arr.forEach(item => {
      li.innerText = item;
      dbtn.innerText = "Delete";
    });
    dbtn.addEventListener("click",()=>{
      div.remove();
    });

    setTimeout(() => {
      alert(`${inp.value} added to the list`);
    }, 1000);
  
    inp.value="";
  }else{
    alert("Enter a valid list name")
  }
})