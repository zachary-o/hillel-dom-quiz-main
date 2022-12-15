const data = [
  {
    id: 1,
    question: "Which of these fish is actually a fish?",
    answers: [
      { answer: "swordfish", isCorrect: true },
      { answer: "jellyfish", isCorrect: false },
      { answer: "starfish", isCorrect: false },
      { answer: "crayfish", isCorrect: false },
    ],
  },
  {
    id: 2,
    question: "A flutter is a group of:",
    answers: [
      { answer: "bees", isCorrect: false },
      { answer: "penguins", isCorrect: false },
      { answer: "butterflies", isCorrect: true },
      { answer: "camels", isCorrect: false },
    ],
  },
  {
    id: 3,
    question: "A group of which animals is referred to as a wake?",
    answers: [
      { answer: "bats", isCorrect: false },
      { answer: "vultures", isCorrect: true },
      { answer: "ants", isCorrect: false },
    ],
  },
];

//=========================

let questionIndex = 0;
let selectedAnswer = null;
let correctCount = 0;
let wrongCount = 0;

const question = document.querySelector(".question");
const answersContainer = document.querySelector(".answers");
const submitBtn = document.querySelector(".submit");
const playAgainBtn = document.querySelector(".play");
const gameScreen = document.querySelector(".game");
const resultScreen = document.querySelector(".result");

const correctAnswers = resultScreen.querySelector(".correct");
const wrongAnswers = resultScreen.querySelector(".wrong");
const scoreResult = resultScreen.querySelector(".score");


//=========================

const selectAnswers = () => {
  answersContainer.querySelectorAll("input").forEach(element => {
    element.addEventListener("click", (event) => {
      selectedAnswer = event.target.value;
    });
  });
};

//=========================

const showQuestion = (index) => {
  if (index === data.length) {
    showResult();
  } else {
    question.textContent = data[index].question;

  const answerStr = data[index].answers.map((item, index) => `
  <div class="answer">
    <input type="radio" id=${index} name="answer" value=${item.isCorrect}/>
    <label for=${index}>${item.answer}</label>
  </div>
  `).join("")

  answersContainer.innerHTML = answerStr;

  selectAnswers();
  }
}

//=========================

const onSubmit = () => {
  submitBtn.addEventListener("click", () => {
    if (selectedAnswer !== null) {
      selectedAnswer === "true" ? correctCount++ : wrongCount++;

      questionIndex++;
      showQuestion(questionIndex);
    } else {
      alert("Select an answer");
    }
  })
}


//=========================

const showResult = () => {
  gameScreen.style.display = "none";
  resultScreen.style.display = "block";

  correctAnswers.textContent = `Correct Answers: ${correctCount}`;
  wrongAnswers.textContent = `Wrong Answers: ${wrongCount}`;
  scoreResult.textContent = `Score: ${(correctCount - wrongCount) * 10}`;
}

//=========================

const resetResult = () => {
  questionIndex = 0;
  correctCount = 0;
  wrongCount = 0;
}


//=========================

playAgainBtn.addEventListener("click", () => {
  gameScreen.style.display = "block";
  resultScreen.style.display = "none";
  resetResult();
  showQuestion(questionIndex);
}) 

onSubmit();
showQuestion(questionIndex);





// 1. Написати функцію, яка показуватиме відповіді та поточне питання.
//  В рамках цієї функції зробити перевірку на останнє питання і якщо перевірка проходить, то показувати результат.
 
//   Приклад розмітки однієї відповіді:
//   <div class="answer">
//     <input type="radio" id=${index} name="answer" value=${isCorrect} />
//     <label for=${index}>{answer}</label>
//   </div>


// 2. Написати функцію, яка вішатиме обробники подій click на всі відповіді. І записувати значення в змінну selectedAnswer


// 3. Написати функцію onSubmit, яка вішатиме обробник подій на кнопку Submit.
// Перевірити чи вибрана відповідь. Якщо вибрано, тоді зробити перевірку на правильну відповідь, інкрементувати correctCount або wrongCount.
// І також інкрементувати індекс наступного питання


// 4. Написати функцію showResult, яка показуватиме блок із результатом та записуватиме значення
// По прикладу
  // `Correct Answers: ${correctCount}`;
  // `Wrong Answers: ${wrongCount}`;
  // `Score: ${(correctCount - wrongCount) * 10}`;


// 5. Написати функцію resetResult, яка скидатиме наступні значення
// questionIndex, correctCount, wrongCount

// 6. Повісити обробник подій на кнопку Play again, яка має показувати блок із питаннями, приховати блок із результом, скинути всі значення в 0, а також показувати перше питання.
