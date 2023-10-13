const arguments = process.argv.slice(2);

const timer = function() {

  let count = [];

  for (const arr of arguments) {
    for (const val of arr) {
      let num = parseInt(val);
      if (num > 0) {
        count.push(num);
      }
    }
  }

  const sortedCount = count.sort((a, b) => a - b);
  const delays = [];

  for (const val of sortedCount) {
    delays.push(val * 1000);
  }

  for (const time of delays) {
    setTimeout(() => {
      process.stdout.write('\x07');
    }, time);
  }

};
timer(arguments);