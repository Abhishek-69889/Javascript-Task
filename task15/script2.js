let ul = document.querySelector("ul");
let btns = document.querySelectorAll("button");

const questions=[
  {
    question:"HTML stands for",
    option:[
      "HTML",
      "HMML",
      "HTMM",
      "HTLL"
    ],
    correct:0
  },
  {
    question:"CSS stands for",
    option:[
      "CSS",
      "CCC",
      "SSS",
      "CSCS"
    ],
    correct:0
  },
  {
    question:"JS stands for",
    option:[
      "SJ",
      "JS",
      "JJ",
      "SS"
    ],
    correct:1
  },
]



function showQuestion(question){
  ul.innerText='';

  // creating elements

  let div=document.createElement("div");
  // let span=document.createElement("span");

  // giving classes

  div.classList.add("question_box");
  let h3=document.createElement("h3");

  // assigning value
  // span.innerText=i+1;
  // h3.appendChild(span);
  h3.innerText=question.question;
  div.appendChild(h3);


  question.option.forEach((element,index) => {
 
    let div2=document.createElement("div");
    let input=document.createElement("input");
    let label=document.createElement("label");

      div2.classList.add("option")
      input.type="radio";

      label.innerText=element;
      input.value=index;

      div2.appendChild(input);
      div2.appendChild(label);
      div.appendChild(div2);
  });

  ul.appendChild(div);
};



let answers =[];

let i=0;
showQuestion(questions[i])

btns[1].addEventListener("click",()=>{
 let selected = document.querySelector("input[type='radio']:checked");

if (!selected) {
  answers[i]=-1;
}else{
  let selectedIndex = Number(selected.value);
  answers[i]=selectedIndex;
}



  if(i<questions.length-1){
    i++;
    showQuestion(questions[i]);
     if(i===questions.length-1){
    btns[1].innerText="Finish"
    }
  }else{
    let score = calculateScore();
    console.log(score);
    ul.innerText=`Test Finished! Your score is ${score}`
    btns[1].innerText="Exit"
    btns[0].style.display="none"
  }
  
})

btns[0].addEventListener("click",()=>{
  if(i>0){
    i--;
    let question = questions[i];
    showQuestion(question);
  };
})

function calculateScore(){
  let score=0;
  for(let i=0;i<answers.length;i++){
    if(questions[i].correct===answers[i]) score++;
  };

  return score;
};


