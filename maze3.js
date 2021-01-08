var readline = require("readline");

var rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.question("Please type the length of the maze (int) = ", (length) => {
  var maze = [];
  var dirrection = ["down", "right", "up", "left"];
  var valueDirrection1 = 0;
  var xPos1 = 0,
    yPos1 = 0;
  var valueDirrection2 = 2;
  var xPos2 = length - 1,
    yPos2 = length - 1;

  fillMazeWithSpaces(maze, length);

  var loop = true;
  while (loop && length > 2) {
    maze[yPos1][xPos1] = "@";
    maze[yPos2][xPos2] = "@";

    switch (dirrection[valueDirrection1]) {
      case "down":
        if (yPos1 + 2 < length) {
          if (maze[yPos1 + 2][xPos1] == "@") {
            if (maze[yPos1][xPos1 + 2] == "@" || maze[yPos1][xPos1 + 1] == "@")
              loop = false;
            valueDirrection1 = (valueDirrection1 + 1) % 4;
            break;
          }
        } else if (yPos1 + 1 == length) {
          valueDirrection1 = (valueDirrection1 + 1) % 4;
          break;
        }
        yPos1++;
        break;

      case "right":
        if (xPos1 + 2 < length) {
          if (maze[yPos1][xPos1 + 2] == "@") {
            if (maze[yPos1 - 2][xPos1] == "@" || maze[yPos1 - 1][xPos1] == "@")
              loop = false;
            valueDirrection1 = (valueDirrection1 + 1) % 4;
            break;
          }
        } else if (xPos1 + 1 == length) {
          valueDirrection1 = (valueDirrection1 + 1) % 4;
          break;
        }
        xPos1++;
        break;

      case "up":
        if (yPos1 - 2 > -1) {
          if (maze[yPos1 - 2][xPos1] == "@") {
            if (maze[yPos1][xPos1 - 2] == "@" || maze[yPos1][xPos1 - 1] == "@")
              loop = false;
            valueDirrection1 = (valueDirrection1 + 1) % 4;
            break;
          }
        } else if (yPos1 - 1 == -1) {
          valueDirrection1 = (valueDirrection1 + 1) % 4;
          break;
        }
        yPos1--;
        break;

      case "left":
        if (xPos1 - 2 > -1) {
          if (maze[yPos1][xPos1 - 2] == "@") {
            if (maze[yPos1 + 2][xPos1] == "@" || maze[yPos1 + 1][xPos1] == "@")
              loop = false;
            valueDirrection1 = (valueDirrection1 + 1) % 4;
            break;
          }
        } else if (xPos1 - 1 == -1) {
          valueDirrection1 = (valueDirrection1 + 1) % 4;
          valueDirrection1 = (valueDirrection1 + 1) % 4;
        }
        xPos1--;
        break;

      default:
        break;
    }

    //maze from bottom
    switch (dirrection[valueDirrection2]) {
      case "down":
        if (yPos2 + 2 < length) {
          if (maze[yPos2 + 2][xPos2] == "@") {
            if (maze[yPos2][xPos2 + 2] == "@" || maze[yPos2][xPos2 + 1] == "@")
              loop = false;
            valueDirrection2 = (valueDirrection2 + 1) % 4;
            break;
          }
        } else if (yPos2 + 1 == length) {
          valueDirrection2 = (valueDirrection2 + 1) % 4;
          break;
        }
        yPos2++;
        break;

      case "right":
        if (xPos2 + 2 < length) {
          if (maze[yPos2][xPos2 + 2] == "@") {
            if (maze[yPos2 - 2][xPos2] == "@" || maze[yPos2 - 1][xPos2] == "@")
              loop = false;
            valueDirrection2 = (valueDirrection2 + 1) % 4;
            break;
          }
        } else if (xPos2 + 1 == length) {
          valueDirrection2 = (valueDirrection2 + 1) % 4;
          break;
        }
        xPos2++;
        break;

      case "up":
        if (yPos2 - 2 > -1) {
          if (maze[yPos2 - 2][xPos2] == "@") {
            if (maze[yPos2][xPos2 - 2] == "@" || maze[yPos2][xPos2 - 1] == "@")
              loop = false;
            valueDirrection2 = (valueDirrection2 + 1) % 4;
            break;
          }
        } else if (yPos2 - 1 == -1) {
          valueDirrection2 = (valueDirrection2 + 1) % 4;
          break;
        }
        yPos2--;
        break;

      case "left":
        if (xPos2 - 2 > -1) {
          if (maze[yPos2][xPos2 - 2] == "@") {
            if (maze[yPos2 + 2][xPos2] == "@" || maze[yPos2 + 1][xPos2] == "@")
              loop = false;
            valueDirrection2 = (valueDirrection2 + 1) % 4;
            break;
          }
        } else if (xPos2 - 1 == -1) {
          valueDirrection2 = (valueDirrection2 + 1) % 4;
        }
        xPos2--;
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
