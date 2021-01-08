var readline = require("readline");

var rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.question("Please type the length of the maze (int) = ", (length) => {
  var maze = [];
  var dirrection = ["down", "right", "left", "up"];
  var valueDirrection = 0;
  var xPos = 1,
    yPos = 0;

  fillMazeWithSpaces(maze, length);

  var loop = true;
  while (loop && length > 2) {
    maze[yPos][xPos] = " ";
    switch (dirrection[valueDirrection]) {
      case "down":
        if (yPos + 2 < length) {
          if (maze[yPos + 2][xPos] == " ") {
            if (xPos + 2 == length) loop = false;
            valueDirrection = (valueDirrection + 1) % 4;
            break;
          }
        } else if (yPos + 2 == length) {
          valueDirrection = (valueDirrection + 1) % 4;
          break;
        }
        yPos++;
        break;

      case "right":
        if (xPos + 2 == length) {
          if (yPos - 2 < 1) {
            loop = false;
          } else {
            maze[yPos--][xPos] = " ";
            maze[yPos--][xPos] = " ";
            valueDirrection = (valueDirrection + 1) % 4;
          }
          break;
        }
        xPos++;
        break;

      case "up":
        if (yPos - 1 == 0) {
          if (xPos + 2 >= length - 1) {
            loop = false;
          } else {
            maze[yPos][xPos++] = " ";
            maze[yPos][xPos++] = " ";
            valueDirrection = (valueDirrection + 1) % 4;
          }
          break;
        }
        yPos--;
        break;

      case "left":
        if (xPos - 2 > -1) {
          if (maze[yPos][xPos - 2] == " ") {
            if (yPos - 1 == 0) loop = false;
            valueDirrection = (valueDirrection + 1) % 4;
            break;
          }
        }
        xPos--;
        break;

      default:
        break;
    }
  }

  printTheMaze(maze, length);

  rl.close();
});

const fillMazeWithSpaces = (maze, length) => {
  var i, j;
  for (i = 0; i < length; i++) {
    var dummyArray = [];
    for (j = 0; j < length; j++) {
      dummyArray.push("@");
    }
    maze.push(dummyArray);
  }
};

const printTheMaze = (maze, length) => {
  for (i = 0; i < length; i++) {
    var line = "";
    for (j = 0; j < length; j++) {
      line += maze[i][j];
    }
    console.log(line);
  }
};
