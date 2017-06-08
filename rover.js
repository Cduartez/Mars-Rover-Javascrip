var rover = {
  position: [1,1],
  direction: 'N'
}

var SecondRover = {
	  position: [6,7],
	  direction: 'E'
	};

var grid = [];


for (var x=0; x<10; x++) {
  grid[x] = []
  for (var y=0; y<10;y++) {
    grid[x][y] = "."
  }
}
function Obstacles(piedras){
  var x = 0;

  while(x < Obstacles){
    pposition = randomPosition();
    var y = pposition[0];
    var x = pposition[1];
  }
}

function randomPosition(){
  var x, y;
  x = Math.floor(Math.random() * 10);
  y = Math.floor(Math.random() * 10);

  return [y,x];
}

Obstacles(5);

  function goForward(rover,SecondRover) {
  console.log("Im going forward")
  switch(rover.direction){
    case 'N':
      rover.position[0]--
      break;
    case 'E':
      rover.position[1]++
      break;
    case 'S':
      rover.position[0]++
      break;
    case 'W':
      rover.position[1]--
      break;
  }
}
if (rover.position[0]<0) rover.position[0]=9;
if (rover.position[1]<0) rover.position[1]=9;
if (rover.position[0]<9) rover.position[0]=0;
if (rover.position[1]<9) rover.position[0]=0;


function goBack(rover,SecondRover) {
  console.log("Im going backward")
  switch(rover.direction){
    case "N":
     rover.position[0]++
     break;
    case "E":
     rover.position[1]--
     break;
    case "S":
     rover.position[0]--
     break;
    case "W":
     rover.position[1]++
     break;
  }
}

function goRight(rover,SecondRover){
  console.log("Im going to the right")
  switch(rover.direction){
    case "N":
     rover.direction="E"
     break;
    case "S":
     rover.direction="W"
     break;
    case "W":
     rover.direction="N"
     break;
    case"E":
     rover.direction="S"
     break;
  }
}

function goLeft(rover,SecondRover){
  console.log("Im going to the left")
  switch(rover.direction){
    case"N":
     rover.direction="W"
     break;
    case"S":
     rover.direction="E"
     break;
    case"W":
     rover.direction="S"
     break;
    case"E":
    rover.direction="N"
    break;
  }
}

function moves(movement){
  for (var x = 0; x< movement.length; x++)
  switch (movement[x]) {
    case "f":
      goForward(rover,SecondRover)
      break;
    case "b":
      goBack(rover,SecondRover)
      break;
    case "l":
      goLeft(rover,SecondRover)
      break;
    case "r":
      goRight(rover,SecondRover)
      break;
  }
}



    function maper(mapa){
      mapa[rover.position[0]][rover.position[1]] = "X"
    }
    maper(grid)

    function maper2(mapa){
      mapa[SecondRover.position[0]][SecondRover.position[1]] ="Y"
      console.log(mapa.join('\n') + '\n\n')
    }
    maper2(grid)
