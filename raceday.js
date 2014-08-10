
var creatures = [];
var counter = 0;

/*
function moreFields() {
  counter++;
  var newFields = document.getElementById('table').cloneNode(true);
  newFields.id = '';
  var newField = newFields.childNodes;
    for (var i = 0; i < newField.length; i++) {
      var theName = newField[i].name
      if(theName){
        newField[i].name = theName + counter;
      }
  }
  var insertHere = document.getElementById('aftertable');
  insertHere.parentNode.insertBefore(newFields,insertHere);
}

window.onload = moreFields;
*/

  function numRacers() {
    var numberRacers = document.getElementById('numberofracers').value;
    var numberRacers = parseInt(numberRacers);
    return numberRacers;
  }

  function numTurns() {
    var numberTurns = document.getElementById("laps").value;
    var numberTurns = parseInt(numberTurns);
    return numberTurns;
  }

  function Animal(name, speed, focus) {
    this.name = name;
    this.speed = speed;
    this.focus = focus;
    this.position = 0;
  }

  function createAnimal() {
    var numberRacers=numRacers();
    for (var i = 0; i < numberRacers; i++) {
      creatures[i]=new Animal(document.getElementById('animalname'+i).value,
        parseInt(document.getElementById('animalspeed'+i).value),
        parseInt(document.getElementById('animalfocus'+i).value));
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
    document.getElementById("raceWinner").innerHTML = ("<b>" +creatures[whoWins].name +"</b> WINS THE RACE!!!!");
  }


  function turn(numberTurns){
    var numberRacers = numRacers();
    document.getElementById("lapresults").innerHTML += ("<br>Lap #<b>" + (numberTurns) + "</b><br>");
    for(var i = 0; i < numberRacers; i++) {
      if((Math.floor(Math.random()*10)) < creatures[i].focus) {
        creatures[i].position += creatures[i].speed;
        document.getElementById("lapresults").innerHTML += ("<b>" +creatures[i].name+ "</b> moves to space # <b>" +creatures[i].position + "</b><br>");
      }
      else {
        document.getElementById("lapresults").innerHTML += ("OH NO!!! <b>" +creatures[i].name+ "</b> got distracted and stops to play with some ants. <br>");
      }
    }
  }



  function submitClick() {
    var button = document.getElementById("submitButton");
      if(button.addEventListener){
        button.addEventListener("click", function(){});
      }
      else {
        button.attachEvent("click", function(){});
      }
    updateRacers();
  }

    function updateRacers() {
      var numberRacers = numRacers();
        for(var i = 5; i > numberRacers; i--) {
          var num=('animalnumber'+i);
          var name=('animalname'+i);
          var speed = ('animalspeed'+i);
          speed = parseInt(speed);
          var focus=('animalfocus'+i);
          focus = parseInt(focus);
          document.getElementById(num).innerHTML=" ";
          document.getElementById(name).type='hidden';
          document.getElementById(speed).type='hidden';
          document.getElementById(focus).type='hidden';
        }
    }

    function raceClick() {
    var button = document.getElementById("raceButton");
      if(button.addEventListener){
        button.addEventListener("click");
      }
      else {
        button.attachEvent("click");
      }
    game();
  }


  function game(){
    var numberTurns = numTurns();
    createAnimal();
    for(var i = 1; i <= numberTurns; i++) {
    turn(i);
    }
    winner();
  }

