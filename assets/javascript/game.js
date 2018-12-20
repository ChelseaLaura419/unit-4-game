$(document).ready(function() {
  
  
  var targetNumber = Math.floor((Math.random() * 60) + 1);

  $("#number-to-guess").text(targetNumber);

  var wins = 0;
  var losses = 0;
  var counter = 0;

  var winsText = document.getElementById("wins-text");
  var lossesText = document.getElementById("losses-text");


  var numberOptions = [1, 5, 7, 3];

  for (var i = 0; i < numberOptions.length; i++) {

    var imageMeal = $("#meal" + i);


    imageMeal.attr("data-mealvalue", numberOptions[i]);


  }

  $(".meal-image").on("click", function() {

    var mealValue = ($(this).attr("data-mealvalue"));
    mealValue = parseInt(mealValue);

    counter += mealValue;

    $("#your-score").text(counter);

    if (counter === targetNumber) {
      wins++;
      alert("You Won!");
    }

    else if (counter >= targetNumber) {
      losses++;
      alert("You Lose!");
    }

    winsText.textContent = "Wins: " + wins;
    lossesText.textContent = "Losses: " + losses;

  });

});