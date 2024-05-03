const question = document.getElementById("question");
const button1 = document.getElementById("button1");
const button2 = document.getElementById("button2");
const answer = document.getElementById("answer");
const pic = document.getElementById("pic");

button1.addEventListener("click", function() {
    CheckAnswer(1);
});

button2.addEventListener("click", function() {
    CheckAnswer(2);
});

var questions = [
    {
        question: "What is the capi&shy;tal of France?",
        correctAnswer: "Paris",
        wrongAnswer: "London"
    },
    {
        question: "Who wrote 'Romeo and Juli&shy;et'?",
        correctAnswer: "William Shakespeare",
        wrongAnswer: "Jane Austen"
    },
    {
        question: "What is the chemical sym&shy;bol for water?",
        correctAnswer: "H2O",
        wrongAnswer: "CO2"
    }
];
var index = -1;
var correct;
var howmuch = 0;
var checked = false;

//Start
NewQuestion();


function NewQuestion() {
    index++;
    pic.style.display = "none";
    answer.style.display = "none";

    button1.style.backgroundColor = "#767d7b";
    button2.style.backgroundColor = "#767d7b";

    question.textContent = questions[index].question;

    checked = false;

    if (Math.random() < 0.5)
    {
        button1.textContent = questions[index].correctAnswer;
        button2.textContent = questions[index].wrongAnswer;
        correct = 1;

    }
    else 
    {
        button2.textContent = questions[index].correctAnswer;
        button1.textContent = questions[index].wrongAnswer;
        correct = 2;
    }
}

function CheckAnswer(button)
{   
    if (!checked) {
        pic.style.display = "block";
        answer.style.display = "block";

        if (button === correct)
        {
            pic.src = "images/true.png";
            answer.textContent = "Richtig!";
            howmuch++;
        } else {
            pic.src  = "images/false.png";
            answer.textContent = "Falsch, es wäre " + questions[index].correctAnswer;
        }
        if (correct === 1)
        {
            button1.style.backgroundColor = "#4CAF50";
            button2.style.backgroundColor = "#b62525";
        }
        else {
            button1.style.backgroundColor = "#b62525";
            button2.style.backgroundColor = "#4CAF50";
        }

        checked = true;
        
        setTimeout(function() {
            if (index < (questions.length - 1)) {
                NewQuestion();
            }
            else {
                answer.textContent = "Du hast " + howmuch + " richig, also ein Anteil von " + Math.round((howmuch/questions.length) * 100) + "%";;
            }
        }, 3000);
    }  
}
