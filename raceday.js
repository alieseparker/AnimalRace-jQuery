
var creatures = [];

  function Animal(name, speed, focus) {
    this.name = name;
    this.speed = speed;
    this.focus = focus;
    this.position = 0;
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

  function createAnimal(numAnimals) {
    var name, speed, focus;
    alert("Animal #" + (numAnimals+1));
    name = prompt("What is the animals name?");
    speed = prompt("How fast is "+name);
    speed = parseInt(speed);
    focus = prompt("How focused is "+name);
    focus = parseInt(focus);

    creatures.push(new Animal(name, speed, focus));
  }

  var numAnimals = prompt("How many animals do you want to race?");
  for(var i = 0; i < numAnimals; i++){
      createAnimal(i);
  }
  //creatures[0] = new Animal("Peter",5,2);
  //creatures[1] = new Animal("Yurtle",2,10);
  var turns = prompt("How many turns will the animals race for?");
  turns = parseInt(turns)

  alert("The Race Will Start in:");
  alert("3...");
  alert("2...");
  alert("1...");
  alert("GO!!!");

  for(var  i = 0; i<turns; i++) {
    turn(i);
  }
  winner();