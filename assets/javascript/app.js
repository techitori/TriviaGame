// CLICK EVENTS
$(document).on("click", "#start", function() {
  game.start();
});


$(document).on("click", "#done", function() {
  game.done();
});


var timer;

var game = {

  correct: 0,
  incorrect: 0,
  counter: 60,

  countdown: function() {
    game.counter--;
    $("#counter-number").html(game.counter);
    if (game.counter === 0) {
      console.log("TIME UP");
      game.done();
    }
  },

  start: function() {
    timer = setInterval(game.countdown, 1000);
  },

  done: function() {

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

  this.result();

},

  result: function() {

    clearInterval(timer);

    $("#questions").empty();

    $("#questions").html("<h2>All Done!</h2>");
    $("#questions").append("<h3>Correct Answers: " + this.correct + "</h3>");
    $("#questions").append("<h3>Incorrect Answers: " + this.incorrect + "</h3>");
    $("#questions").append("<h3>Unanswered: " + (10 - (this.incorrect + this.correct)) + "</h3>");
  }
  };
