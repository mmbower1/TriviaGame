var score = 0;
var number = 9;
var intervalId;
var wins = 0;
var losses = 0;

var questions = [
    {
        prompt: "How many sides are on a cube?",
        choiceA: "4",
        choiceB: "5",
        choiceC: "6",
        answer: 'c'
    },
    {
        prompt: "What US State is Mt. Rushmore located in?",
        choiceA: "North Dakota",
        choiceB: "South Dakota",
        choiceC: "Wyoming",
        answer: "b"
    },
    {
        prompt: "What US State's Capitol is named Jefferson City?",
        choiceA: 'Missouri',
        choiceB: 'Nebraska',
        choiceC: 'Tennessee',
        answer: 'a'
    },
    {
        prompt: 'How many teams are in the NFL?',
        choiceA: '30',
        choiceB: '31',
        choiceC: '32',
        answer: 'c'
    },
    {
        prompt: 'Who was the 38th US President?',
        choiceA: 'Gerald Ford',
        choiceB: 'Lyndon B. Johnson',
        choiceC: 'Richard Nixon',
        answer: 'a'
    },
    {
        prompt: 'What two colors are used for the Chinese flag?',
        choiceA: 'Black and Red',
        choiceB: 'Yellow and Black',
        choiceC: 'Red and Yellow',
        answer: 'c'
    },
    {
        prompt: 'Who holds the MLB record for most homeruns in a season?',
        choiceA: 'Alex Rodriguez',
        choiceB: 'Barry Bonds',
        choiceC: 'Babe Ruth',
        answer: 'b'
    }
];

function decrement() {

    //  Decrease number by one.
    number--;

    //  Show the number in the #show-number tag.
    $("#seconds").html("<h2>" + number + "</h2>");

    //  Once number hits zero...
    if (number === 0) {
        alert('Time Up');
        losses++;
        //  ...run the stop function.
        stop();

        //  Alert the user that time is up.
        //alert("Time Up!");
    }
}

function timer() {
    clearInterval(intervalId);
    intervalId = setInterval(decrement, 1000);
    
}

function stop() {
    //  Clears our intervalId
    //  Pass the name of the interval to the clearInterval function.
    clearInterval(intervalId);
}

timer();

var i = false;

function setNextQuestion(array) {
    var currentQuestion = questions.shift();
    console.log(currentQuestion);

    $('#questionSpot').html(currentQuestion.prompt);
    $('#answer1').html("A: " + currentQuestion.choiceA);
    $('#answer2').html("B: " + currentQuestion.choiceB);
    $('#answer3').html("C: " + currentQuestion.choiceC);
    $('.answer').attr('correct', currentQuestion.answer)
}

setNextQuestion(questions);

$('.answer').on('click', function() {
    var chosen = $(this).attr('correct');
    console.log(chosen);

    if (chosen === $(this).attr('value')) {
        alert('You win');
        wins++;
        $('#wins').text(wins);
        setNextQuestion();
    }
    else {
        alert('You lose');
        losses++;
        $('#losses').text(losses);
        setNextQuestion();
    }
});

function reset() {

}


// function answers() {
//     $('.answer').on('click', function() {
//         var chosen = $(this).attr('value');

//         if(chosen === questions[i].answer) {
//             console.log('good');
//         }
//     })





//target q div to show q

//clock countdown starts every time player wins, loses, or page refreshes

//questions are displayed