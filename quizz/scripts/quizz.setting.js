const API_URL = "https://wpahzm6d6ufb764nzelq226dua0oiprt.lambda-url.us-west-2.on.aws"

const CARRER_URL = "https://digitalinnovationone.github.io/roadmaps/"

const questionState = {
  "questionsList": [
    {
      "question": "Qual o seu nível de interesse na prototipação (design/desenho inicial) de um software?",
      "order": 1
    },
    {
      "question": "Qual o seu nível de interesse em atividades que favorecem a criatividade no desenvolvimento de um software?",
      "order": 2
    },
    {
      "question": "Qual o seu nível de interesse na interface (UI) e experiência (UX) proporcionadas por um software?",
      "order": 3
    },
    {
      "question": "Qual o seu nível de interesse em aspectos de performance em um software?",
      "order": 4
    },
    {
      "question": "Qual o seu nível de interesse no desenvolvimento do raciocínio lógico como uma ferramenta para atuar na área de computação?",
      "order": 5
    },
    {
      "question": "Qual o seu nível de interesse em matemática e estatística como ferramentas para atuar na área de computação?",
      "order": 6
    },
    {
      "question": "Qual o seu nível de interesse em Inteligência Artificial (IA)?",
      "order": 7
    },
    {
      "question": "Qual o seu nível de interesse no desenvolvimento de aplicativos para celulares?",
      "order": 8
    },
    {
      "question": "Qual o seu nível de interesse em segurança da informação?",
      "order": 9
    },
    {
      "question": "Qual o seu nível de interesse em computação em nuvem?",
      "order": 10
    },
    {
      "question": "Qual o seu nível de interesse na análise de grandes volumes de dados para tomadas de decisão?",
      "order": 11
    },
    {
      "question": "Qual o seu nível de interesse na avaliação da qualidade como fator determinante no sucesso de projetos?",
      "order": 12
    },
    {
      "question": "Qual o seu nível de interesse no desenvolvimento de soluções de Internet para casas inteligentes, indústrias e carros autônomos na área de computação?",
      "order": 13
    },
    {
      "question": "Qual o seu nível de interesse em habilidades de liderança e trabalho em equipe no contexto de gestão de projetos?",
      "order": 14
    },
    {
      "question": "Qual o seu nível de interesse na tomada de decisões gerenciais no contexto de gestão de projetos?",
      "order": 15
    },
    {
      "question": "Qual o seu nível de interesse em tecnologias para o desenvolvimento de jogos?",
      "order": 16
    }
  ]
}

const state = {
  "questionIndex": 0,
  "responses": ""
}

const httpStatus = {
  OK: 200,
  BadRequest: 400
}

function drawQuestion() {
  const quizz = document.getElementById("question")
  const questions = questionState.questionsList

  let questionPicker = questions[state.questionIndex].question
  quizz.innerHTML = questionPicker
}

function drawCounter() {
  const counterDisplay = document.getElementById("counter")

  let actualIndex = state.questionIndex + 1
  let maxItem = questionState.questionsList.length

  counterDisplay.innerHTML = `${actualIndex} / ${maxItem}`
}

function updateBar() {
  const percentageText = document.getElementById('percentage-current');
  const percentageBar = document.getElementById('percentage-bar--filled');

  const total = questionState.questionsList.length;
  const percentage = (state.questionIndex + 1) / total * 100;

  percentageBar.style.width = `${percentage}%`;
  percentageText.innerText = `${percentage.toFixed(0)}%`;
}

function isCompleted() {
  if (
    state.questionIndex >
    (questionState.questionsList.length - 1)
  ) {
    return true
  }
  else {
    return false
  }
}

async function redirectToCareer() {
  
  // send responses to api
  const resultJSON = await requestAPI(state.responses)
  let careerPath = ""

  if (resultJSON.status == httpStatus.OK) {
    careerPath = await getCareerPath(resultJSON.career.id)
    window.location.replace(`${CARRER_URL}${careerPath}`)
  } else if (resultJSON.status == httpStatus.BadRequest) {
    alert(resultJSON.message)
    window.location.reload(true)
  } else {
    console.log(`Status Code ${resultJSON.status} não tratado`)
  }
}

async function getCareerPath(careerId) {
  const careerPath = {
    1: 'careers/backend',
    2: 'careers/frontend',
    3: 'careers/mobile',
    4: 'careers/infra-devops-security',
    5: 'careers/cloud',
    6: 'careers/data-analytics',
    7: 'careers/games',
    8: 'careers/qa',
    9: 'careers/web3-ia',
    10: 'careers/lideranca-softskills',
    11: 'careers/crm',
  }

  if (careerPath[careerId]) {
    return careerPath[careerId];
  }

  return 'Invalid careerId';
}


function bindButtons() {
  const buttons = [...document
    .getElementsByClassName("rating")
  ]

  state.responses = ""

  buttons.forEach(element => {
    element.addEventListener('click', async () => {

      updateBar();

      if (state.responses.length < 16) {
        state.responses += element.innerHTML
        state.questionIndex += 1
      }

      if (isCompleted()) {
        const buttonsContainer = document.getElementById("level-buttons");
        const loaderContainer = document.getElementById("level-loader");

        buttonsContainer.classList.add('hidden');
        loaderContainer.classList.remove('hidden');

        await redirectToCareer()
      } else {
        drawQuestion()
        drawCounter()
      }
    })
  });
}

async function requestAPI(answer) {

  const myHeaders = new Headers();
  myHeaders.append("Content-Type", "application/json");

  const raw = JSON.stringify({
    "answers": answer
  });

  const requestOptions = {
    method: 'POST',
    body: raw,
    redirect: 'follow'
  };

  try {
    const response = await fetch(API_URL, requestOptions);
    return response.json();
  } catch (error) {
    console.log(error)
  }

}

function init() {
  bindButtons()
  drawQuestion()
  drawCounter()
}

init()
