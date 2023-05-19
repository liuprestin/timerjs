//This function takes multiple numbers
//each number is the number of seconds to launch an alarm 
function timer() {
  const args = process.argv;

  for (let x = 2; x < args.length; x++) {
    if (isNaN(args[x]) || args[x] < 0) {
      console.log("Please pass in a positive integer");
    } else {
      setTimeout(() => {
        process.stdout.write("\x07");
      }, x * 1000);
    }
  }
}

timer();
