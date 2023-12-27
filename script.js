 
  const quizapp = [
    {
      Question: 'How good is Benjamin in Javascript',
      a: 'he is a wizard',
      b: 'dont know anything',
      c: 'he can handle a bit of it',
      d: 'doesn`t have one of the greatest companies in industry',
      correct: 'a',
    },
    {
      Question: 'how old is Benjamin?',
      a: '30yrs',
      b: '172yrs',
      c: '10yrs',
      d: '22yrs',
      correct: 'd',
    },
    {
      Question: 'where did he go to school?',
      a: 'MUT',
      b: 'JKUAT',
      c: 'DEKUT',
      d: 'MUST',
      correct: 'a',
    },
    {
      Question: 'which of the following is not a library?',
      a: 'vue',
      b: 'kotlin',
      c: 'next.js',
      d: 'react.js',
      correct: 'b',
    },
    {
      Question: 'one of the following doesn`t belong to the tech industry which one?',
      a: 'cattle farming',
      b: 'front-end developer',
      c: 'back-end developer',
      d: 'full-stack developer',
      correct: 'a',
    },
  ];
  
  const questionEl = document.getElementById('question');
  const a_text = document.getElementById('a_text');
  const b_text = document.getElementById('b_text');
  const c_text = document.getElementById('c_text');
  const d_text = document.getElementById('d_text');
  const finish = document.getElementById('finish');
  
  let currentQuestion = 0;
  let score = 0; // Track the user's score
  
  loadquiz();
  
  function loadquiz() {
    const currentquizData = quizapp[currentQuestion];
  
    questionEl.innerHTML = currentquizData.Question;
    a_text.innerText = currentquizData.a;
    b_text.innerText = currentquizData.b;
    c_text.innerText = currentquizData.c;
    d_text.innerText = currentquizData.d;
  
    // Reset the answered flag for each new question
    answered = false;
  }
  
  function getSelected() {
    const answersEls = document.querySelectorAll('.answer'); // Note the correct selector
    let selectedAnswer = undefined;
  
    answersEls.forEach((answerEl) => {
      if (answerEl.checked) {
        selectedAnswer = answerEl.id;
      }
    });
  
    return selectedAnswer;
  }
  
  function checkAnswer(selectedOption) {
    if (answered) {
      // User has already answered, ignore additional clicks
      return;
    }
  
    answered = true;
  
    const currentquizData = quizapp[currentQuestion];
    const isCorrect = selectedOption === currentquizData.correct;
  
    if (isCorrect) {
      score++; // Increment score for correct answer
      alert('Correct!');
    } else {
      alert('Wrong answer. Try again!');
    }
  }
  
  finish.addEventListener('click', () => {
    const selectedAnswer = getSelected();
  
    if (selectedAnswer) {
      checkAnswer(selectedAnswer);
    }
  
    currentQuestion++;
  
    if (currentQuestion < quizapp.length) {
      loadquiz();
    } else {
      alert(`Your score is ${score}/${quizapp.length}`);
    }
  });
  
  
  