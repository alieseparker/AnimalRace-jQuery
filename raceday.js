var creatures = [];
var counter = 0;

  function numRacers() {
    var numberRacers = $("#numberofracers").val();
    return numberRacers;
  }

  function numTurns() {
    var numberTurns = $("#laps").val;
    var numberTurns = parseInt(numberTurns);
    return numberTurns;
  }

  function Animal(name, speed, focus) {
    this.name = name;
    this.speed = Number(speed);
    this.focus = Number(focus);
    this.position = 0;
  }

  function createAnimal() {
    var numberRacers=numRacers();
    for(var i = 0; i < numberRacers; i++) {
    creatures[i]=new Animal( $("#animalname"+i).val(),
      parseInt($("#animalspeed"+i).val()), parseInt($("#animalfocus"+i).val()));
    }
  }

  function winner() {
    var whoWins = 0;
    var finalPosition = 0;
    for(var x = 0; x < creatures.length; x++){
      if(creatures[x].position > finalPosition){
        finalPosition = creatures[x].position;
        whoWins = x;

      }
    }
    $("#raceWinner").html("<b>" + creatures[whoWins].name +"</b> WINS THE RACE!!!!");
  }


  function turn(numberTurns){
    var numberRacers = numRacers();
    $("#lapresults").html("<br>Lap #<b>" + (numberTurns) + "</b><br>");
    for(var i = 0; i < numberRacers; i++) {
      if((Math.floor(Math.random()*10)) < creatures[i].focus) {
        creatures[i].position += creatures[i].speed;
        $("#lapresults").html("<b>" +creatures[i].name+ "</b> moves to space # <b>" +creatures[i].position + "</b><br>");
      }
      else {
        $("#lapresults").html("OH NO!!! <b>" +creatures[i].name+ "</b> got distracted and stops to play with some ants. <br>");
      }
    }
  }

    function updateRacers() {
      var numberRacers = numRacers();
      var dispRacers = $("#animals").siblings('div').length;
      $("#animals").siblings('div').empty();

      for(var i = numberRacers; i > 0; i--) {
        $("#animals").after(updateRacerForm(i));
      }
      $(".hideMe").removeClass("hideMe").addClass("seeMe")
    }


    function updateRacerForm(i) {
      return "<div class='animal three columns'><p>Animal# " + i +"</p>" +
        "<p>Animal Name:<input type='text' class='selected' id='animalname" + i + "'></p>" +
        "<p>Animal Speed:<input type='text' class='selected' id='animalspeed" + i + "'></p>" +
        "<p>Animal Focus:<input type='text' class='selected' id='animalfocus" + i + "'></p> </div>";
    }

  function game(){
    var numberTurns = numTurns();
    createAnimal();
    for(var i = 1; i <= numberTurns; i++) {
    turn(i);
    }
    winner();
  }

  $('button').click(function(){
    $("#raceButton").click(game());
    $("#submitButton").click(updateRacers());
  });
