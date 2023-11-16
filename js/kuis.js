//inisiasi soal dalam quiz
const questions = [
    {
        question: "Sebuah prisma segitiga memiliki alas dengan panjang sisi 3cm dan tinggi 6 cm. berapakah volume prisma tersebut dengan tinggi prisma 10cm ?",
        optionA: "75cm",
        optionB: "90cm",
        optionC: "95cm",
        optionD: "80cm",
        correctOption: "optionB"
    },

    {
        question: "Sebuah prisma segilima memiliki rusuk alas 5cm dan tinggi rusuk tegak 12cm. luas semua sisi tegaknya adalah?",
        optionA: "600cm",
        optionB: "500cm",
        optionC: "400cm",
        optionD: "300cm",
        correctOption: "optionD"
    },

    {
        question: "Sebuah prisma segitiga memiliki luas alas 24cm dan tinggi prisma tersebut adalah 12cm berapakah volume dari prisma tersebut?",
        optionA: "288cm",
        optionB: "277cm",
        optionC: "265cm",
        optionD: "286cm",
        correctOption: "optionA"
    },

    {
        question: "sebuah prisma segitiga memiliki alas segitiga dengan panjang 12cm, 9cm, dan 15cm, dan tinggi prisma tersebut adalah 20cm berapakah luas permukaannya ?",
        optionA: "283cm",
        optionB: "271cm",
        optionC: "282cm",
        optionD: "300cm",
        correctOption: "optionC"
    },

    {
        question: "Sebuah prisma segitiga memiliki luas alas 30cm dan tinggi prisma tersebut adalah 50cm berapakah volume dari prisma tersebut ?",
        optionA: "1500cm",
        optionB: "1200cm",
        optionC: "1300cm",
        optionD: "1400cm",
        correctOption: "optionA"
    },

    {
        question: "Berikut yang tidak termasuk kedalam ciri-ciri prisma segitiga adalah?",
        optionA: "Memiliki 9 buah tulang rusuk",
        optionB: "Memiliki 6 titik sudut",
        optionC: "Memiliki alas dan tutup berbentuk segitiga",
        optionD: "Memiliki 8 buah tulang rusuk",
        correctOption: "optionD"
    },

    {
        question: "Berapa jumlah titik sudut pada bangun prisma segilima?",
        optionA: "10",
        optionB: "9",
        optionC: "11",
        optionD: "12",
        correctOption: "optionA"
    },

    {
        question: "Berapa jumlah titik sudut pada bangun prisma segi enam ?",
        optionA: "11",
        optionB: "12",
        optionC: "13",
        optionD: "14",
        correctOption: "optionB"
    },

    {
        question: "Berapa jumlah tulang rusuk pada bangun prisma segienam?",
        optionA: "18",
        optionB: "17",
        optionC: "16",
        optionD: "15",
        correctOption: "optionA"
    },

    {
        question: "Berapa jumlah titik sudut pada bangun prisma segitiga",
        optionA: "7",
        optionB: "6",
        optionC: "8",
        optionD: "9",
        correctOption: "optionB"
    },

    {
        question: " Sebuah prisma segitiga memiliki alas dengan panjang sisi 2cm dan tinggi 4cm. berapakah volume prisma tersebut dengan tinggi prisma 10cm ?",
        optionA: "41cm",
        optionB: "42cm",
        optionC: "40cm",
        optionD: "45cm",
        correctOption: "optionC"
    },

  
    {
        question: "Sebuah prisma segitiga memiliki alas dengan panjang sisi 2cm dan tinggi 10cm. berapakah volume prisma tersebut dengan tinggi prisma 6cm ?",
        optionA: "70cm",
        optionB: "75cm",
        optionC: "65cm",
        optionD: "60cm",
        correctOption: "optionD"
    },


    {
        question: "Sebuah prisma segitiga memiliki alas dengan panjang sisi 8cm dan tinggi 5cm. berapakah volume prisma tersebut dengan tinggi prisma 5cm  ?",
        optionA: "100cm",
        optionB: "230cm",
        optionC: "150cm",
        optionD: "360cm",
        correctOption: "optionA"
    },

    {
        question: "Bangun ruang tiga dimensi yang dibatasi oleh alas dan tutup yang identik berbentuk segi-n dan sisi tegak persegi atau persegi panjang adalah?",
        optionA: "Limas",
        optionB: "Balok",
        optionC: "Kubus",
        optionD: "Prisma",
        correctOption: "optionD"
    },

    {
        question: "Sebuah prisma segitiga memiliki alas dengan panjang sisi 3cm dan tinggi 4cm. berapakah volume prisma tersebut dengan tinggi prisma 7cm  ?",
        optionA: "42cm",
        optionB: "43cm",
        optionC: "44cm",
        optionD: "45cm",
        correctOption: "optionA"
    },

    {
        question: "Berikut yang termasuk ciri-ciri dari bangun ruang prisma segi lima?",
        optionA: "Mempunyai 7 buah sisi",
        optionB: "Mempunyai 10 titik sudut",
        optionC: "Mempunyai 15 tulang rusuk",
        optionD: "benar semua",
        correctOption: "optionD"
    },

    {
        question: "Sebuah prisma segitiga memiliki alas dengan panjang sisi 10cm dan tinggi 8cm. berapakah volume prisma tersebut dengan tinggi prisma 4cm ?",
        optionA: "160cm",
        optionB: "156cm",
        optionC: "610cm",
        optionD: "200cm",
        correctOption: "optionA"
    },

    {
        question: "Berikut yang termasuk ciri-ciri prisma segienam?",
        optionA: "Benar semua",
        optionB: "Memiliki 12 titik sudut",
        optionC: "Salah semua",
        optionD: "Memiliki 6 buah sisi",
        correctOption: "optionB"
    },

    {
        question: "Sebuah prisma segitiga memiliki alas dengan panjang sisi 3cm dan tinggi 2cm. berapakah volume prisma tersebut dengan tinggi prisma 2cm ?",
        optionA: "6cm",
        optionB: "7cm",
        optionC: "8cm",
        optionD: "9cm",
        correctOption: "optionA"
    },

    {
        question: "Berikut yang tidak termasuk prisma segi-n adalah?",
        optionA: "Prisma segilima",
        optionB: "Prisma segienam",
        optionC: "Prisma segitiga",
        optionD: "Prisma segisepuluh",
        correctOption: "optionD"
    },

    {
        question: "Sebuah prisma segitiga memiliki alas dengan panjang sisi 7cm dan tinggi 2cm. berapakah volume prisma tersebut dengan tinggi prisma 10cm?",
        optionA: "70cm",
        optionB: "60cm",
        optionC: "50cm",
        optionD: "400cm",
        correctOption: "optionA"
    },

    {
        question: "Bangun prisma segienam memiliki berapa sisi?",
        optionA: "10",
        optionB: "11",
        optionC: "12",
        optionD: "Salah semua",
        correctOption: "optionD"
    },

    {
        question: "Sebuah prisma segitiga memiliki alas dengan panjang sisi 8cm dan tinggi 2cm. berapakah volume prisma tersebut dengan tinggi prisma 7cm?",
        optionA: "65cm",
        optionB: "56cm",
        optionC: "55cm",
        optionD: "70cm",
        correctOption: "optionB"
    },

    {
        question: "Bangun prisma segilima memiliki berapa sisi ?",
        optionA: "5",
        optionB: "6",
        optionC: "7",
        optionD: "8",
        correctOption: "optionC"
    },

    {
        question: "Bangun prisma segienam memiliki berapa sisi ?",
        optionA: "8",
        optionB: "3",
        optionC: "5",
        optionD: "9",
        correctOption: "optionA"
    }

]


let shuffledQuestions = [] //empty array to hold shuffled selected questions

function handleQuestions() { 
    //function to shuffle and push 10 questions to shuffledQuestions array
    while (shuffledQuestions.length <= 9) {
        const random = questions[Math.floor(Math.random() * questions.length)]
        if (!shuffledQuestions.includes(random)) {
            shuffledQuestions.push(random)
        }
    }
}


let questionNumber = 1
let playerScore = 0  
let wrongAttempt = 0 
let indexNumber = 0

// function for displaying next question in the array to dom
function NextQuestion(index) {
    handleQuestions()
    const currentQuestion = shuffledQuestions[index]
    document.getElementById("question-number").innerHTML = questionNumber
    document.getElementById("player-score").innerHTML = playerScore
    document.getElementById("display-question").innerHTML = currentQuestion.question;
    document.getElementById("option-one-label").innerHTML = currentQuestion.optionA;
    document.getElementById("option-two-label").innerHTML = currentQuestion.optionB;
    document.getElementById("option-three-label").innerHTML = currentQuestion.optionC;
    document.getElementById("option-four-label").innerHTML = currentQuestion.optionD;

}


function checkForAnswer() {
    const currentQuestion = shuffledQuestions[indexNumber] //gets current Question 
    const currentQuestionAnswer = currentQuestion.correctOption //gets current Question's answer
    const options = document.getElementsByName("option"); //gets all elements in dom with name of 'option' (in this the radio inputs)
    let correctOption = null

    options.forEach((option) => {
        if (option.value === currentQuestionAnswer) {
            //get's correct's radio input with correct answer
            correctOption = option.labels[0].id
        }
    })
   
    //checking to make sure a radio input has been checked or an option being chosen
    if (options[0].checked === false && options[1].checked === false && options[2].checked === false && options[3].checked == false) {
        document.getElementById('option-modal').style.display = "flex"
    }

    //checking if checked radio button is same as answer
    options.forEach((option) => {
        if (option.checked === true && option.value === currentQuestionAnswer) {
            document.getElementById(correctOption).style.backgroundColor = "green"
            playerScore++
            indexNumber++
            //set to delay question number till when next question loads
            setTimeout(() => {
                questionNumber++
            }, 1000)
        }

        else if (option.checked && option.value !== currentQuestionAnswer) {
            const wrongLabelId = option.labels[0].id
            document.getElementById(wrongLabelId).style.backgroundColor = "red"
            document.getElementById(correctOption).style.backgroundColor = "green"
            wrongAttempt++
            indexNumber++
            //set to delay question number till when next question loads
            setTimeout(() => {
                questionNumber++
            }, 1000)
        }
    })
}



//called when the next button is called
function handleNextQuestion() {
    checkForAnswer()
    unCheckRadioButtons()
    //delays next question displaying for a second
    setTimeout(() => {
        if (indexNumber <= 9) {
            NextQuestion(indexNumber)
        }
        else {
            handleEndGame()
        }
        resetOptionBackground()
    }, 1000);
}

//sets options background back to null after display the right/wrong colors
function resetOptionBackground() {
    const options = document.getElementsByName("option");
    options.forEach((option) => {
        document.getElementById(option.labels[0].id).style.backgroundColor = ""
    })
}

// unchecking all radio buttons for next question(can be done with map or foreach loop also)
function unCheckRadioButtons() {
    const options = document.getElementsByName("option");
    for (let i = 0; i < options.length; i++) {
        options[i].checked = false;
    }
}

// function for when all questions being answered
function handleEndGame() {
    let remark = null
    let remarkColor = null

    // condition check for player remark and remark color
    if (playerScore <= 3) {
        remark = "Bad Grades, Keep Practicing."
        remarkColor = "red"
    }
    else if (playerScore >= 4 && playerScore < 7) {
        remark = "Average Grades, You can do better."
        remarkColor = "orange"
    }
    else if (playerScore >= 7) {
        remark = "Excellent, Keep the good work going."
        remarkColor = "green"
    }
    const playerGrade = (playerScore / 10) * 100

    //data to display to score board
    document.getElementById('remarks').innerHTML = remark
    document.getElementById('remarks').style.color = remarkColor
    document.getElementById('grade-percentage').innerHTML = playerGrade
    document.getElementById('wrong-answers').innerHTML = wrongAttempt
    document.getElementById('right-answers').innerHTML = playerScore
    document.getElementById('score-modal').style.display = "flex"

}

//closes score modal and resets game
function closeScoreModal() {
    questionNumber = 1
    playerScore = 0
    wrongAttempt = 0
    indexNumber = 0
    shuffledQuestions = []
    NextQuestion(indexNumber)
    document.getElementById('score-modal').style.display = "none"
}

//function to close warning modal
function closeOptionModal() {
    document.getElementById('option-modal').style.display = "none"
}