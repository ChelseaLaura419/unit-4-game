$(document).ready(function() {
  
  
  var targetNumber = Math.floor((Math.random() * 60) + 1);

  $("#number-to-guess").text(targetNumber);

  var counter = 0;


  var numberOptions = [12, 5, 7, 1];

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
      alert("You Won!");
    }

    else if (counter >= targetNumber) {
      alert("You Lose!");
    }

  });

});