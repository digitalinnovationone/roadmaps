const API_URL = "https://wpahzm6d6ufb764nzelq226dua0oiprt.lambda-url.us-west-2.on.aws"

const questionState = {
  "questionsList":[
    {
      "question": "O design das coisas é algo importante para você ?",
      "order": 1
    },
    {
      "question": "Você se considera uma pessoa criativa ?",
      "order": 2
    },
    {
      "question": "Qual a importância da inferface de um software para você ?",
      "order": 3
    },
    {
      "question": "Qual a importância da rapidez de um software para você ?",
      "order": 4
    },
    {
      "question": "Você tem facilidade com raciocínio lógico?",
      "order": 5
    },
    {
      "question": "O quanto você gosta de matemática e estatística?",
      "order": 6
    },
    {
      "question": "Você considera a Inteligência Artificial uma área interessante?",
      "order": 7
    },
    {
      "question": "Você se interessa pelo desenvolvimento de aplicativos para celulares?",
      "order": 8
    },
    {
      "question": "Desenvolver soluções de segurança para internet é algo que te motiva?",
      "order": 8
    },
    {
      "question": "Desenvolver soluções de armazenamento em nuvem é algo que seria interessante para você?",
      "order": 9
    },
    {
      "question": "Trabalhar com a análise de grandes volumes de dados de forma inteligente é algo interessante para você?",
      "order": 10
    },
    {
      "question": "Analisar a qualidade das coisas é uma boa característica sua?",
      "order": 11
    },
    {
      "question": "Você trabalharia como desenvolvedor de soluções de internet para casas inteligentes, indústrias e carros autônomos?",
      "order": 12
    },
    {
      "question": "Você se considera um bom lider para agilizar os trabalhos em equipe?",
      "order": 13
    },
    {
      "question": "Você considera decisões gerenciais algo atrativo para trabalhar no dia-a-dia?",
      "order": 14
    }
  ]
}

function drawQuestions(){
  const quizz =  document.getElementById("quiz")
  const questions = questionState.questionsList

  for (let index = 0; index < questions.length; index++) {
    quizz.innerHTML += 
    getQuestionComponent(questions[index].question)
  }

}

function getQuestionComponent(question){
  const htmlBase = `<h2 class="quiz-question">${question}</h2>
  <ul data-quiz-question="1">
    <li class="quiz-answer" data-quiz-answer="1">1</li>
    <li class="quiz-answer" data-quiz-answer="2">2</li>
    <li class="quiz-answer" data-quiz-answer="3">3</li>
    <li class="quiz-answer" data-quiz-answer="4">4</li>
    <li class="quiz-answer" data-quiz-answer="5">5</li>
  </ul>`

  return htmlBase
}

async function requestAPI(answer){

  let myHeaders = new Headers();
  myHeaders.append("Content-Type", "application/json");
  
  let raw = JSON.stringify({
    "answers": answer
  });
  
  let requestOptions = {
    method: 'POST',
    body: raw,
    redirect: 'follow'
  };
  
  fetch(API_URL, requestOptions)
    .then(response => response.text())
    .then(result => console.log(result))
    .catch(error => console.log('error', error));
  
}


function bindEvents(){
  let btnResult = document.getElementById("btn-result")

  btnResult.addEventListener('click', ()=>{
    console.log("ola")
    requestAPI("1234567891234577")
  })
}

drawQuestions()
bindEvents()