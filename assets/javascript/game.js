var targetNumber = 53;

  $("#number-to-guess").text(targetNumber);

  var counter = 0;

  // Now for the hard part. Creating multiple crystals each with their own unique number value.

  // We begin by expanding our array to include four options.
  var numberOptions = [12, 5, 7, 1];

  // Next we create a for loop to create crystals for every numberOption.
  for (var i = 0; i < numberOptions.length; i++) {

    // For each iteration, we will create an imageCrystal
    var imageMeal = $("<img>");


    // First each crystal will be given the class ".crystal-image".
    // This will allow the CSS to take effect.
    imageMeal.addClass("meal-image");
 


    // Each imageCrystal will be given a src link to the crystal image
    imageMeal.attr("src", "assets/images/mealone.png");
    imageMeal.attr("src", "assets/images/mealtwo.png");
    imageMeal.attr("src", "assets/images/mealthree.png");
    imageMeal.attr("src", "assets/images/mealfour.png");


    // Each imageCrystal will be given a data attribute called data-crystalValue.
    // This data attribute will be set equal to the array value.
    imageMeal.attr("data-mealvalue", numberOptions[i]);

    // Lastly, each crystal image (with all it classes and attributes) will get added to the page.
    $(".meals").append(imageMeal);

  }

  // This time, our click event applies to every single crystal on the page. Not just one.
  $(".meal-image").on("click", function() {
    console.log;
    // Determining the crystal's value requires us to extract the value from the data attribute.
    // Using the $(this) keyword specifies that we should be extracting the crystal value of the clicked crystal.
    // Using the .attr("data-crystalvalue") allows us to grab the value out of the "data-crystalvalue" attribute.
    // Since attributes on HTML elements are strings, we must convert it to an integer before adding to the counter

    var mealValue = ($(this).attr("data-mealvalue"));
    mealValue = parseInt(mealValue);
    // We then add the crystalValue to the user's "counter" which is a global variable.
    // Every click, from every crystal adds to the global counter.
    counter += mealValue;

    // All of the same game win-lose logic applies. So the rest remains unchanged.
    alert("New score: " + counter);

    if (counter === targetNumber) {
      alert("You win!");
    }

    else if (counter >= targetNumber) {
      alert("You lose!!");
    }

  });
