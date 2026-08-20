// let inp = document.querySelector("input");
// let btn = document.querySelector("button");
// let ul = document.querySelector("ul");

// // Get tasks from localStorage
// let arr = JSON.parse(localStorage.getItem("tasks")) || [];


// // Function to create and display a task
// function addTask(item) {

//     let div1 = document.createElement("div");
//     let div2 = document.createElement("div");
//     let inp1 = document.createElement("input");
//     let li = document.createElement("li");
//     let button = document.createElement("button");

//     // Add elements to HTML
//     ul.appendChild(div1);

//     div1.appendChild(div2);
//     div2.appendChild(inp1);
//     div2.appendChild(li);
//     div1.appendChild(button);

//     // Add classes and properties
//     div1.classList.add("list-main");

//     inp1.type = "checkbox";
//     inp1.style.cursor = "pointer";

//     li.innerText = item;
//     button.innerText = "Delete";


//     // Delete task
//     button.addEventListener("click", () => {

//         // Remove task from screen
//         div1.remove();

//         // Remove task from array
//         arr = arr.filter(task => task !== item);

//         // Update localStorage
//         localStorage.setItem("tasks", JSON.stringify(arr));
//     });


//     // Checkbox
//     inp1.addEventListener("click", () => {

//         if (inp1.checked) {

//             console.log("Checked");

//             li.style.color = "yellow";
//             li.style.textDecoration = "line-through";

//         } else {

//             console.log("Not checked");

//             li.style.color = "white";
//             li.style.textDecoration = "none";
//         }
//     });
// }



// // Add new task
// btn.addEventListener("click", () => {

//     let val = inp.value;

//     if (val.length !== 0) {

//         // Add task to array
//         arr.push(val);

//         // Save array to localStorage
//         localStorage.setItem("tasks", JSON.stringify(arr));

//         // Display task on screen
//         addTask(val);

//         // Clear input
//         inp.value = "";

//     } else {

//         alert("Enter a valid task Value");
//     }
// });



// // Display saved tasks when page loads
// arr.forEach(item => {
//     addTask(item);
// });


let inp = document.querySelector("input");
let btn = document.querySelector("button");
let ul = document.querySelector("ul");

let arr =JSON.parse(localStorage.getItem("Task")) || [];

function setTask(item){

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
    li.innerText=item;
    button.innerText="Delete";

    button.addEventListener("click",()=>{
      div1.remove();

      arr = arr.filter(task=>task!=item);
      localStorage.setItem("Task",JSON.stringify(arr));
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
}


btn.addEventListener("click",()=>{
  let val = inp.value;
  if(val.length!==0){
    arr.push(val);
    localStorage.setItem("Task",JSON.stringify(arr));
    setTask(val);
  }else{
    alert("Enter a valid task Value");
  };
  
  inp.value="";  
})

arr.forEach(element => {
  setTask(element);
});