let ul = document.querySelector("ul");
let btns= document.querySelectorAll("button");

const questions=[
  {
        question: "What does HTML stand for?",
        options: [
            "Hyper Text Markup Language",
            "High Text Markup Language",
            "Hyper Tabular Markup Language",
            "None of the above"
        ],
        correctAnswer: 0 // Index pointing to the correct choice in the options array
    },
    {
        question: "Which programming language is known as the language of the web?",
        options: ["Python", "C++", "JavaScript", "Java"],
        correctAnswer: 2
    }
];

let i=0;
let question = questions[i];

let div=document.createElement("div");
let h3=document.createElement("h3");

h3.innerText=question.question;

div.classList.add("question_box");
div.appendChild(h3);

question.options.forEach((option , index)=>{
let div_option=document.createElement("div");
  let input=document.createElement("input");
  let label=document.createElement("label");
div_option.classList.add("option");


  input.type="radio";

  label.innerText=option;
div.appendChild(div_option)

  div_option.appendChild(input);
  div_option.appendChild(label);
})


btns[1].addEventListener("click",()=>{
  i++;
  let question = questions[i];

let div=document.createElement("div");
let h3=document.createElement("h3");

h3.innerText=question.question;

div.classList.add("question_box");
div.appendChild(h3);

question.options.forEach((option , index)=>{
let div_option=document.createElement("div");
  let input=document.createElement("input");
  let label=document.createElement("label");
div_option.classList.add("option");


  input.type="radio";

  label.innerText=option;
div.appendChild(div_option)

  div_option.appendChild(input);
  div_option.appendChild(label);
})

ul.appendChild(div);
})





ul.appendChild(div)