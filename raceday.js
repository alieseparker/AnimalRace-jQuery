
var creatures = [];


var counter = 0;

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

  function Animal(name, speed, focus) {
    this.name = name;
    this.speed = speed;
    this.focus = focus;
    this.position = 0;
  }

  function createAnimal(numRacers) {
      creatureinput=document.getElementByTagName('input').childNodes;
      for(var i = 0; i< numRacers; i++) {
        creatureinput=document.getElementByTagName('input').childNodes;
        creatures[i] = new Animal(creatureinput[i].getElementsByNames('animalname').value,
                      creatureinput[i].getElementsByNames('animalspeed').value,
                      creatureinput[i].getElementsByName('animalfocus').value);
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
    alert(creatures[whoWins].name +" WINS THE RACE!!!!");
  }

  function turn(numTurns){
    alert("Turn #" + (numTurns+1));
    for(var i = 0; i < creatures.length; i++){
      if((Math.floor(Math.random()*10)) < creatures[i].focus){
        creatures[i].position += creatures[i].speed;
        alert(creatures[i].name+ " moves to space # " +creatures[i].position);
      }
      else {
        alert("OH NO!!! " +creatures[i].name+ " got distracted and stops to play with some ants.");
      }
    }
  }

  function buttonClick() {
    var button = document.getElementById("submitButton");
      if(button.addEventListener){
        button.addEventListener("click", function() { alert("alert");});
      }
      else {
        button.attachEvent("click", function() { alert("alert");});
      };
  }

  function game(){
    var numRacers = document.getElementsByName("numberofracers").value;
    var numRacers = parseInt(numRacers);
    if(creatures.length<numRacers) {
      for(var i = 1; i < numRacers; i++) {
        moreFields();
      }
    }
    else {
        createAnimal(numRacers);
    }
  }
