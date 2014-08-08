
var creatures = [];
var globalanimalcount=1;

  function  writeForm(numRacers) {
    if(globalanimalcount<numRacers) {
      for(var i = 1; i <= numRacers; i++) {
        var tempname="animalname"+i, tempspeed="animalspeed"+i, tempfocus="animalfocus"+i, tempform="form"+i;
        var animalname=document.createElement("input");
          animalname.setAttribute('type', 'text');
          animalname.setAttribute('id', tempname);
        var animalspeed=document.createElement("input");
          animalspeed.setAttribute('type', 'text');
          animalspeed.setAttribute('id', tempspeed);
        var animalfocus=document.createElement("input");
           animalfocus.setAttribute('type', 'text');
          animalfocus.setAttribute('id', tempfocus);
        var newForm=document.getElementById(tempform);
          newForm.appendChild(animalname);
          newForm.appendChild(animalspeed);
          newForm.appendChild(animalfocus);
        globalanimalcount++;
      }
    }
   }

  function Animal(name, speed, focus) {
    this.name = name;
    this.speed = speed;
    this.focus = focus;
    this.position = 0;
  }

  function createAnimal(numRacers) {
/*    if(creatures.length!=numRacers) {
      for(var i = 0; i< numRacers; i++) {
        creature[i] = creature [0];
      }
      document.getElementsByType("form1").innerHTML = creature[i];
      for(var i = 0; i< numRacers; i++) {
        creature[i]=document.getElementsById()
      }
    }
*/
    //for(var i = 0; i < numRacers; i++) {
      var animalName = document.getElementById("animal1name");
      var animalSpeed = document.getElementById("animal2speed");
      var animalFocus = document.getElementById("animal3focus");
    //}

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
    game();
  }

  function game(){
    var numRacers = document.getElementsByName("numberofracers").value;
    var numRacers = parseInt(numRacers);
    writeForm(numRacers);
  }
