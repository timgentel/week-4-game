$( document ).ready(function(){
    var random = Math.floor(Math.random()*101 +19)
    // Selects a random number to be shown at the start of the game
    // Number should be should be between 19 - 120
    $("#randomNumber").append(random);
    // Appending random number to the randomNumber id in the html doc
    //
    var num1 = Math.floor(Math.random()*11+1)
    var num2 = Math.floor(Math.random()*11+1)
    var num3 = Math.floor(Math.random()*11+1)
    var num4 = Math.floor(Math.random()*11+1)
    // Setting up random numbers for each jewel
    // Random number has to be between 1 - 12
    // 
    
    
    var guessedNum= 0; 
    var wins= 0;
    var losses = 0;

    $("#winsNum").text(wins);
    $("#lossesNum").text(losses);
    $("#totalScore").text(guessedNum);
    //  Decaring variables for tallies
    
  //resets the game
  function reset(){
        random=Math.floor(Math.random()*101 +19);
        console.log(random)
        $('#randomNumber').text(random);
        num1 = Math.floor(Math.random()*11+1);
        num2 = Math.floor(Math.random()*11+1);
        num3 = Math.floor(Math.random()*11+1);
        num4 = Math.floor(Math.random()*11+1);
        guessedNum = 0;
        $("#totalScore").text(guessedNum);
  }
  function winLoss(){
    if (guessedNum === random){
      wins++
      $("#winsNum").text(wins);
      reset();
    } else if(guessedNum > random) {
      losses++
      $("#lossesNum").text(losses);
      reset();
    }

  }

  $( "#yellowCrystal" ).click(function() {
    guessedNum = guessedNum + num1;
    $("#totalScore").text(guessedNum); 
    winLoss();
  });
  
  $( "#blueCrystal" ).click(function() {
    guessedNum = guessedNum + num2;
    $("#totalScore").text(guessedNum); 
    winLoss();
  });
  
  $( "#purpleCrystal" ).click(function() {
    guessedNum = guessedNum + num3;
    $("#totalScore").text(guessedNum); 
    winLoss();
  });

  $( "#pinkCrystal" ).click(function() {
    guessedNum = guessedNum + num4;
    $("#totalScore").text(guessedNum); 
    winLoss();
  });
    
        
});
/*
generate starting random number  between 19-120
generate hidden random number between 1-12 for each crystal
each time a cystal is pressed add the num to guessed number 
if guessed num equal starting random number add 1 to wins 
if guessed num is higher then starting number add 1 to loses 
once game is over reset starting random num, crystals num and reset guessed number to 0




*/