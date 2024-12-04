const quizBox = document.querySelector('.quiz-box')
continueBtn.onclick = () => {
    quizSection.classList.add('active');
    Main.classList.remove('active');
    quizBox.classList.add('active');

    showQuestions(0);
}

let questionCount = 0;

const nextBtn = document.querySelector('.next-btn');

nextBtn.onclick = () => {
    questionCount++;
    showQuestions(questionCount);
}


//getting questions and operations from array
function showQuestions(index) {
    const questionText = document.querySelector('.question-text');
    questionText.textContent = '${questions[index].numb}. ${questions[index].question}';
}