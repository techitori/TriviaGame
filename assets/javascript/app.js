//hide questions befroe game starts
$(document).ready(function(){
  $(".panel-body").hide();
});


// Click events to initiate function
$(document).on("click", "#start", function() {
  game.start();
});


$(document).on("click", "#done", function() {
  game.done();
});

//Initialize variable for counting interval of 1 sec
var count;

//Initialize game variables and functions
var game = {

  correct: 0,
  incorrect: 0,
  seconds: 60,

  //function that carries out timer decrement
  countdown: function() {
    game.seconds--;
    $("#seconds-number").html(game.seconds);
    if (game.seconds === 0) {
      //when time is up, run done function
      game.done();
    }
  },
  //starts countdown when start button pressed
  start: function() {
    count = setInterval(game.countdown, 1000);
    //show questions
    $(document).ready(function(){
      $(".panel-body").show();
    });
  },
  //Initializes when time runs out or done button is pressed. Checks answers and iterates needed points
  done: function() {
    //checks user selection with given correct answer
    $.each($("input[name='q1']:checked"), function() {
      if ($(this).val() == "c") {
        game.correct++;
      }
      else {
        game.incorrect++;
      }
    });

    $.each($("input[name='q2']:checked"), function() {
      if ($(this).val() == "c") {
        game.correct++;
      }
      else {
        game.incorrect++;
      }
    });

    $.each($("input[name='q3']:checked"), function() {
      if ($(this).val() == "d") {
        game.correct++;
      }
      else {
        game.incorrect++;
      }
    });

    $.each($("input[name='q4']:checked"), function() {
      if ($(this).val() == "a") {
        game.correct++;
      }
      else {
        game.incorrect++;
      }
    });

    $.each($("input[name='q5']:checked"), function() {
      if ($(this).val() == "b") {
        game.correct++;
      }
      else {
        game.incorrect++;
      }
    });

    $.each($("input[name='q6']:checked"), function() {
      if ($(this).val() == "d") {
        game.correct++;
      }
      else {
        game.incorrect++;
      }
    });

    $.each($("input[name='q7']:checked"), function() {
      if ($(this).val() == "a") {
        game.correct++;
      }
      else {
        game.incorrect++;
      }
    });

    $.each($("input[name='q8']:checked"), function() {
      if ($(this).val() == "d") {
        game.correct++;
      }
      else {
        game.incorrect++;
      }
    });

    $.each($("input[name='q9']:checked"), function() {
      if ($(this).val() == "c") {
        game.correct++;
      }
      else {
        game.incorrect++;
      }
    });

    $.each($("input[name='q10']:checked"), function() {
      if ($(this).val() == "b") {
        game.correct++;
      }
      else {
        game.incorrect++;
      }
    });
  //Initializes result function
  this.result();

},

  result: function() {
    //stop decrement
    clearInterval(count);
    //clear questions
    $("#questions").empty();
    //prevent user from re-initializing start
    $(".navbar").empty();
    //Print all done message
    $("#questions").html("<h2>All Done!</h2>");
    $("#questions").append("<h3>Correct Answers: " + this.correct + "</h3>");
    $("#questions").append("<h3>Incorrect Answers: " + this.incorrect + "</h3>");
    $("#questions").append("<h3>Unanswered: " + (10 - (this.incorrect + this.correct)) + "</h3>");
  }
  };
