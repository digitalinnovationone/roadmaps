const API_URL = "https://wpahzm6d6ufb764nzelq226dua0oiprt.lambda-url.us-west-2.on.aws"

const CARRER_URL = "https://digitalinnovationone.github.io/roadmaps/"

const questionState = {
  "questionsList": [
    {
      "question": "O design das coisas é algo importante para você?",
      "order": 1
    },
    {
      "question": "Você se considera uma pessoa criativa?",
      "order": 2
    },
    {
      "question": "Qual a importância da interface de um software para você?",
      "order": 3
    },
    {
      "question": "Qual a importância da rapidez de um software para você?",
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
      "order": 9
    },
    {
      "question": "Desenvolver soluções de armazenamento em nuvem é algo que seria interessante para você?",
      "order": 10
    },
    {
      "question": "Trabalhar com a análise de grandes volumes de dados de forma inteligente é algo interessante para você?",
      "order": 11
    },
    {
      "question": "Analisar a qualidade das coisas é uma boa característica sua?",
      "order": 12
    },
    {
      "question": "Você trabalharia como desenvolvedor de soluções de internet para casas inteligentes, indústrias e carros autônomos?",
      "order": 13
    },
    {
      "question": "Você se considera um bom líder para agilizar os trabalhos em equipe?",
      "order": 14
    },
    {
      "question": "Você considera decisões gerenciais algo atrativo para trabalhar no dia-a-dia?",
      "order": 15
    },
    {
      "question": "Você considera a carreira de desenvolvimento de games a mais motivadora para a área de TI?",
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
