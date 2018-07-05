var score = 0;
var number = 7;
var intervalId;

var questions = [
    {
        prompt: "How many sides are on a cube?",
        choiceA: "4",
        choiceB: "5",
        choiceC: "6",
        answer: 'c'
    },
    {
        prompt: "What US State has Mt. Rushmore?",
        choiceA: "North Dakota",
        choiceB: "South Dakota",
        choiceC: "Wyoming",
        answer: "b"
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
    //  We just pass the name of the interval
    //  to the clearInterval function.
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

//loop through questions
var i = false;
for (var i = 0; i < questions.length; i++) {
    $('#questionSpot').html(questions[i].prompt);
    $('#answer1').html("A: " + questions[i].choiceA);
    $('#answer2').html("B: " + questions[i].choiceB);
    $('#answer3').html("C: " + questions[i].choiceC);
    // answers();
    console.log(i);

    function answers(i) {
        $('.answer').on('click', function() {
            var chosen = $(this).attr('value');
            console.log(i);

            if(chosen === questions[i].answer) {
                console.log('good');
            } 
            else {

                console.log('Not good');
            }
        })
    }

// function answers() {
//     $('.answer').on('click', function() {
//         var chosen = $(this).attr('value');
        
//         if(chosen === questions[i].answer) {
//             console.log('good');
//         }
//     })



   
}
//target q div to show q

//clock countdown starts every time player wins, loses, or page refreshes

//questions are displayed

//