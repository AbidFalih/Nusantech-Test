var readline = require("readline");

var rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.question("Please type the length of the maze (int) = ", (length) => {
  var maze = [];
  var dirrection = ["down", "right", "up", "left"];
  var valueDirrection = 0;
  var xPos = 0,
    yPos = 0;

  fillMazeWithSpaces(maze, length);

  var loop = true;
  while (loop && length > 2) {
    maze[yPos][xPos] = "@";
    switch (dirrection[valueDirrection]) {
      case "down":
        if (yPos + 2 < length) {
          if (maze[yPos + 2][xPos] == "@") {
            if (maze[yPos][xPos + 2] == "@" || maze[yPos][xPos + 1] == "@")
              loop = false;
            valueDirrection = (valueDirrection + 1) % 4;
            break;
          }
        } else if (yPos + 1 == length) {
          valueDirrection = (valueDirrection + 1) % 4;
          break;
        }
        yPos++;
        break;

      case "right":
        if (xPos + 2 < length) {
          if (maze[yPos][xPos + 2] == "@") {
            if (maze[yPos - 2][xPos] == "@" || maze[yPos - 1][xPos] == "@")
              loop = false;
            valueDirrection = (valueDirrection + 1) % 4;
            break;
          }
        } else if (xPos + 1 == length) {
          valueDirrection = (valueDirrection + 1) % 4;
          break;
        }
        xPos++;
        break;

      case "up":
        if (yPos - 2 > -1) {
          if (maze[yPos - 2][xPos] == "@") {
            if (maze[yPos][xPos - 2] == "@" || maze[yPos][xPos - 1] == "@")
              loop = false;
            valueDirrection = (valueDirrection + 1) % 4;
            break;
          }
        } else if (yPos - 1 == -1) {
          valueDirrection = (valueDirrection + 1) % 4;
          break;
        }
        yPos--;
        break;

      case "left":
        if (xPos - 2 > -1) {
          if (maze[yPos][xPos - 2] == "@") {
            if (maze[yPos + 2][xPos] == "@" || maze[yPos + 1][xPos] == "@")
              loop = false;
            valueDirrection = (valueDirrection + 1) % 4;
            break;
          }
        } else if (xPos - 1 == -1) {
          valueDirrection = (valueDirrection + 1) % 4;
          valueDirrection = (valueDirrection + 1) % 4;
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
  if (length < 3) {
    //if length < 3, isi semua maze dengan @
    for (i = 0; i < length; i++) {
      var dummyArray = [];
      for (j = 0; j < length; j++) {
        dummyArray.push("@");
      }
      maze.push(dummyArray);
    }
  } else {
    for (i = 0; i < length; i++) {
      var dummyArray = [];
      for (j = 0; j < length; j++) {
        dummyArray.push(" ");
      }
      maze.push(dummyArray);
    }
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
