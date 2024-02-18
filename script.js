const questions = [
    {
        question: " Name the Haruhi Suzumiya Movie",
        answer: 
        [
            {
                text: "Haruhi The Movie",
                correct: false
            },{
                text: "Disappearance of Haruhi Suzumiya",
                correct: true
            },{
                text: "Haruhi Suzumiya: FireWorks",
                correct: false
            },{
                text: "Age of Suzumiya",
                correct: false
            },
        ]
    },{
        question: " In Jujutsu Kaisen, who summoned Mahoraga?",
        answer: 
        [
            {
                text: "Megumi Fushiguro",
                correct: true
            },{
                text: "Itadori",
                correct: false
            },{
                text: "Sukuna",
                correct: false
            },{
                text: "Toji Zenin",
                correct: false
            },
        ]
    },{
        question: " As of Season 2, How many fingers has Sukuna Consumed?",
        answer: 
        [
            {
                text: "10",
                correct: false
            },{
                text: "20",
                correct: false
            },{
                text: "15",
                correct: true
            },{
                text: "17",
                correct: false
            },
        ]
    },{
        question: " Apart from Thorfinn, who was the other Slave on the farm?",
        answer: 
        [
            {
                text: "Rainar",
                correct: false
            },{
                text: "Erwin",
                correct: false
            },{
                text: "Askalad",
                correct: false
            },{
                text: "Einar",
                correct: true
            },
        ]
    },{
        question: " Which Studio is behind Mushoku Tensei(Jobless Reincarnation)?",
        answer: 
        [
            {
                text: "Studio Bind",
                correct: true
            },{
                text: "Mappa",
                correct: false
            },{
                text: "WIT Studio",
                correct: false
            },{
                text: "A1 pictures",
                correct: false
            },
        ]
    },{
        question: " Name the artist/band who made the ost 'Blue Bird' from Naruto Shippuden?",
        answer: 
        [
            {
                text: "Ikimonogakari",
                correct: true
            },{
                text: "LiSA",
                correct: false
            },{
                text: "Survive said the Prophat",
                correct: false
            },{
                text: "Atarashii Gakko",
                correct: false
            },
        ]
    },{
        question: " In My Hero Academia who's quirk is called Hell Flame",
        answer: 
        [
            {
                text: "Endeavour",
                correct: true
            },{
                text: "Bakugo",
                correct: false
            },{
                text: "Shoto Todoroki",
                correct: false
            },{
                text: "Dabi",
                correct: false
            },
        ]
    },{
        question: " In fate Aprocrypha, which class does shakespeare belong to?",
        answer: 
        [
            {
                text: "Caster",
                correct: true
            },{
                text: "Lancer",
                correct: false
            },{
                text: "Saber",
                correct: false
            },{
                text: "Rider",
                correct: false
            },
        ]
    },{
        question: " In food wars who won the BLUE tournament?",
        answer: 
        [
            {
                text: "Soma Yukihira",
                correct: false
            },{
                text: "Megumi Tadokoro",
                correct: false
            },{
                text: "Eishi Tsukasa",
                correct: false
            },{
                text: "Erina Nakiri",
                correct: true
            },
        ]
    },{
        question: " Name the system used in Psycho Pass?",
        answer: 
        [
            {
                text: "Dominator",
                correct: false
            },{
                text: "Trion",
                correct: false
            },{
                text: "Nen",
                correct: false
            },{
                text: "sybil",
                correct: true
            },
        ]
    },{
        question: " Which calamity does Jack(Beast pirates) Represent ?",
        answer: 
        [
            {
                text: "Wildfire",
                correct: false
            },{
                text: "Drought",
                correct: true
            },{
                text: "Plague",
                correct: false
            },{
                text: "Famine",
                correct: false
            },
        ]
    },


];

const questionElement = document.getElementById("question");
const answerButtons = document.getElementById("answer-buttons");
const nextButton = document.getElementById("next-btn");

let currentQuestionIndex = 0;
let score = 0;

function startQuiz() {
    currentQuestionIndex = 0;
    score = 0;
    nextButton.innerHTML = "Next";
    showQuestion();
};

function showQuestion() {
    resetState();
    let currentQuestion = questions[currentQuestionIndex];
    let questionNo = currentQuestionIndex + 1;
    questionElement.innerHTML = questionNo + "." + currentQuestion.question;

    currentQuestion.answer.forEach(answer => {
        const button = document.createElement("button");
        button.innerHTML =  answer.text;
        button.classList.add("btn");
        answerButtons.appendChild(button);
        if(answer.correct) {
            button.dataset.correct = answer.correct;
        }
        button.addEventListener("click", selectAnswer)
    });
}

function resetState() {
    nextButton.style.display = 'none';
    while(answerButtons.firstChild) {
        answerButtons.removeChild(answerButtons.firstChild);
    }
}

function selectAnswer(e) {
    const selectedBtn = e.target;
    const isCorrect = selectedBtn.dataset.correct === "true";
    if(isCorrect) {
        selectedBtn.classList.add("correct");
        score++;
    }else {
        selectedBtn.classList.add("incorrect")
    }

    Array.from(answerButtons.children).forEach(button => {
        if(button.dataset.correct === "true") {
            button.classList.add("correct");
        }
        button.disabled = true;
    });
    nextButton.style.display = "block";
};

function showScore() {
    resetState();
    questionElement.innerHTML = `You score ${score} out of ${questions.length}!`;
    nextButton.innerHTML = "Play Again";
    nextButton.style.display = "block";
};


function handleNextButton() {
    currentQuestionIndex++;
    if(currentQuestionIndex < questions.length) {
        showQuestion();
    }else {
        showScore();
    }
};



nextButton.addEventListener("click", () => {
    if(currentQuestionIndex < questions.length) {
        handleNextButton();
    }else {
        startQuiz();
    }
});


startQuiz();