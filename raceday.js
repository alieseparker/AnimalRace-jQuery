
var creatures = [];

  function Animal(name, speed, focus) {
    this.name = name;
    this.speed = speed;
    this.focus = focus;
    this.position = 0;
  }

  function createAnimal() {
    var name, speed, focus;
    this.name = document.getElementbyId("animal1name").target;
    this.speed = document.getElementbyId("animal1speed").value;
    this.focus = document.getElementbyId("animal1focus").value;

    creatures.push(new Animal(name, speed, focus));
  }


function addRow() {

    //var myName = document.getElementById("name");
    //var speed = document.getElementById("speed");
    //var focus = document.getElementById("focus")
    var table = document.getElementById("form1");

    var rowCount = table.rows.length;
    var row = table.insertRow(rowCount);

    row.insertCell(0).innerHTML= myName.value;
    row.insertCell(1).innerHTML= speed.value;
    row.insertCell(2).innerHTML= focus.value;


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

  addRow();
  addRow();
  addRow();
