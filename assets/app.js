var score = 0;
var number = 9;
var intervalId;
var wins;
var losses;

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
    }
];

function decrement() {

    //  Decrease number by one.
    number--;

    //  Show the number in the #show-number tag.
    $("#seconds").html("<h2>" + number + "</h2>");

    //  Once number hits zero...
    if (number === 0) {

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

//cycling through questions
// for ( var i=0; i < questions.length; i++) {
//     var response = window.prompt(questions[i].prompt);
//     if (response == questions[i].answer) {
//         score++;
//         alert('Correct');
//     }
//     else {
//         alert('Wrong');
//     }
// }
// alert('You got ' + score + '/' + questions.length);

var i = false;

function randomize(array) {
    var currentQuestion = array[Math.floor(Math.random() * array.length)];
    console.log(currentQuestion);

    $('#questionSpot').html(currentQuestion.prompt);
    $('#answer1').html("A: " + currentQuestion.choiceA);
$('#answer2').html("B: " + currentQuestion.choiceB);
$('#answer3').html("C: " + currentQuestion.choiceC);
$('.answer').attr('correct', currentQuestion.answer)
}
randomize(questions);

        $('.answer').on('click', function() {
            var chosen = $(this).attr('correct');
            console.log(chosen);

            if (chosen === $(this).attr('value')) {
                alert('good');
            } 
            else {
                alert('Not good');
            }
        })

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

//