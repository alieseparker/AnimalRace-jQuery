
var creatures = [];
var counter = 0;

  function numRacers() {
    var numberRacers = $("#numberofracers").val();
    var numberRacers = parseInt(numberRacers);
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
        for(var i = 5; i > numberRacers; i--) {
          $('#animalnumber'+i).html(" ");
          $('#animalname'+i).css('display','none');
          $('#animalspeed'+i).css('display','none');
          $('#animalfocus'+i).css('display','none');
        }
    }

  function game(){
    var numberTurns = numTurns();
    createAnimal();
    for(var i = 1; i <= numberTurns; i++) {
    turn(i);
    }
    winner();
  }

  function raceClick() {
    $("#raceButton").on('click', game());
  }

  function submitClick() {
    $("#submitButton").on('click', updateRacers());
  }
