const questions = [
  {
    question: "What is the best description of fraction(s)?",
    answers: [
      { text: "A. It is part of a whole", correct: false },
      { text: "B. When broken into parts, the parts are fractions of a whole", correct: false },
      { text: "C. It is written with one number over another number", correct: false },
      { text: "D. All of these", correct: true }
    ]
  },
  {
    question: "What type of fraction is less than one whole?",
    answers: [
      { text: "A. Proper fraction", correct: true },
      { text: "B. Improper fraction", correct: false },
      { text: "C. Mixed number", correct: false },
      { text: "D. All of the above", correct: false }
    ]
  },
  {
    question: "If the numerator of a fraction is either equal to or more than its denominator, it is called?",
    answers: [
      { text: "A. Proper fraction", correct: false },
      { text: "B. Improper fraction", correct: true },
      { text: "C. Mixed number", correct: false },
      { text: "D. All of the above", correct: false }
    ]
  },
  {
    question: "Below are the steps in converting improper fractions to mixed fractions. Which is the correct sequence?",
    answers: [
      { text: "A. Step 1, 2 and 3", correct: true },
      { text: "B. Step 3, 1 and 2", correct: false },
      { text: "C. Step 2, 3 and 1", correct: false },
      { text: "D. Step 3, 2 and 1", correct: false }
    ]
  },
  {
    question: "Arrange the given fractions in descending order: 5/6, 5/3, 5/8",
    answers: [
      { text: "A. 5/8, 5/3, 5/6", correct: false },
      { text: "B. 5/8, 5/6, 5/3", correct: false },
      { text: "C. 5/6, 5/3, 5/8", correct: false },
      { text: "D. 5/3, 5/6, 5/8", correct: true }
    ]
  },
  {
    question: "What is 3/4 + 1/4?",
    answers: [
      { text: "A. 4/8", correct: false },
      { text: "B. 1 whole", correct: true },
      { text: "C. 2/4", correct: false },
      { text: "D. 3/8", correct: false }
    ]
  },
  {
    question: "What is 7/8 – 3/8?",
    answers: [
      { text: "A. 4/0", correct: false },
      { text: "B. 1/2", correct: true },
      { text: "C. 4/16", correct: false },
      { text: "D. 10/8", correct: false }
    ]
  },
  {
    question: "Which of the following fractions is equivalent to 1/2?",
    answers: [
      { text: "A. 2/6", correct: false },
      { text: "B. 3/8", correct: false },
      { text: "C. 4/8", correct: true },
      { text: "D. 5/12", correct: false }
    ]
  },
  {
    question: "What is the simplest form of 8/12?",
    answers: [
      { text: "A. 4/6", correct: false },
      { text: "B. 2/3", correct: true },
      { text: "C. 3/4", correct: false },
      { text: "D. 1/2", correct: false }
    ]
  },
  {
    question: "What is 2/3 × 3/4?",
    answers: [
      { text: "A. 5/7", correct: false },
      { text: "B. 6/12", correct: false },
      { text: "C. 1/2", correct: true },
      { text: "D. 2/7", correct: false }
    ]
  },
  {
    question: "How do you divide 1/2 ÷ 1/4?",
    answers: [
      { text: "A. 1/8", correct: false },
      { text: "B. 1/4", correct: false },
      { text: "C. 2", correct: true },
      { text: "D. 4", correct: false }
    ]
  },
  {
    question: "Convert the improper fraction 9/4 to a mixed number.",
    answers: [
      { text: "A. 2 and 1/4", correct: true },
      { text: "B. 3 and 1/4", correct: false },
      { text: "C. 1 and 3/4", correct: false },
      { text: "D. 2 and 3/4", correct: false }
    ]
  },
  {
    question: "Convert 3 and 1/2 to an improper fraction.",
    answers: [
      { text: "A. 5/2", correct: false },
      { text: "B. 6/2", correct: false },
      { text: "C. 7/2", correct: true },
      { text: "D. 8/2", correct: false }
    ]
  },
  {
    question: "Which fraction is the largest?",
    answers: [
      { text: "A. 3/5", correct: false },
      { text: "B. 2/3", correct: false },
      { text: "C. 7/10", correct: true },
      { text: "D. 5/8", correct: false }
    ]
  },
  {
    question: "What is the least common denominator (LCD) of 1/3 and 1/4?",
    answers: [
      { text: "A. 7", correct: false },
      { text: "B. 12", correct: true },
      { text: "C. 6", correct: false },
      { text: "D. 8", correct: false }
    ]
  },
  {
    question: "What is 1/3 + 1/4 using the LCD?",
    answers: [
      { text: "A. 2/7", correct: false },
      { text: "B. 5/12", correct: false },
      { text: "C. 7/12", correct: true },
      { text: "D. 4/12", correct: false }
    ]
  },
  {
    question: "A pizza is cut into 8 equal slices. If you eat 3 slices, what fraction did you eat?",
    answers: [
      { text: "A. 3/5", correct: false },
      { text: "B. 5/8", correct: false },
      { text: "C. 3/8", correct: true },
      { text: "D. 8/3", correct: false }
    ]
  },
  {
    question: "Which fraction is equivalent to 0.75?",
    answers: [
      { text: "A. 1/4", correct: false },
      { text: "B. 2/3", correct: false },
      { text: "C. 3/4", correct: true },
      { text: "D. 3/5", correct: false }
    ]
  },
  {
    question: "What is the reciprocal of 2/5?",
    answers: [
      { text: "A. 2/5", correct: false },
      { text: "B. 5/2", correct: true },
      { text: "C. 1/5", correct: false },
      { text: "D. 5/10", correct: false }
    ]
  },
  {
    question: "What does the acronym 'ABM' strand mean?",
    answers: [
      { text: "A. Ako Muna Baby", correct: false },
      { text: "B. Anti-Ballistic Missle", correct: false},
      { text: "C. Account-Based Marketing", correct: false},
      { text: "D. Accountancy, Business, and Management", correct: true}
    ]
  }
];

let current = 0;
let score = 0;
let answered = false;

function showQuestion() {
  const q = questions[current];
  document.getElementById('question-text').textContent = `${current + 1}. ${q.question}`;
  document.getElementById('progress-text').textContent = `Question ${current + 1} of ${questions.length}`;
  document.getElementById('progress-fill').style.width = `${((current + 1) / questions.length) * 100}%`;

  const opts = document.getElementById('options');
  opts.innerHTML = '';
  answered = false;
  document.getElementById('next-btn').style.display = 'none';

  q.answers.forEach((a, i) => {
    const btn = document.createElement('button');
    btn.className = 'quiz-btn';
    btn.textContent = a.text;
    btn.onclick = () => selectAnswer(btn, a.correct);
    opts.appendChild(btn);
  });
}

function selectAnswer(selected, isCorrect) {
  if (answered) return;
  answered = true;
  if (isCorrect) { selected.classList.add('correct'); score++; }
  else { selected.classList.add('incorrect'); }

  // reveal correct answer
  const btns = document.querySelectorAll('.quiz-btn');
  questions[current].answers.forEach((a, i) => {
    if (a.correct) btns[i].classList.add('correct');
    btns[i].disabled = true;
  });

  document.getElementById('next-btn').style.display = 'block';
  document.getElementById('next-btn').textContent = current < questions.length - 1 ? 'Next →' : 'See Results';
}

function handleNext() {
  current++;
  if (current < questions.length) {
    showQuestion();
  } else {
    showScore();
  }
}

function showScore() {
  document.getElementById('quiz-area').style.display = 'none';
  document.getElementById('score-area').style.display = 'block';
  document.getElementById('score-display').textContent = `${score} / ${questions.length}`;
  const pct = (score / questions.length) * 100;
  let msg = pct === 100 ? '🎉 Perfect score! Outstanding!' :
            pct >= 80 ? '👏 Great job! Almost there!' :
            pct >= 60 ? '👍 Good effort! Keep practicing.' :
            '📚 Keep studying — you got this!';
  document.getElementById('score-message').textContent = msg;
}

function restartQuiz() {
  current = 0; score = 0;
  document.getElementById('quiz-area').style.display = 'block';
  document.getElementById('score-area').style.display = 'none';
  showQuestion();
}

showQuestion();