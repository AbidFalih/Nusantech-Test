var readline = require("readline");

var rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.question("Please type the length of the maze (int) = ", (length) => {
  var i,
    j,
    right = true;

  for (i = 1; i <= length; i++) {
    var answer = "";
    answer += "@";
    if (i % 2 !== 0) {
      if (right) {
        answer += " ";
        for (j = 0; j < length - 3; j++) answer += "@";
        right = false;
      } else {
        for (j = 0; j < length - 3; j++) answer += "@";
        answer += " ";
        right = true;
      }
    } else {
      for (j = 0; j < length - 2; j++) answer += " ";
    }
    answer += "@";
    console.log(answer);
  }

  rl.close();
});
