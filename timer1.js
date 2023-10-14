const timer = function() {
  for (const val of process.argv.slice(2)) {
    if (parseInt(val) > 0) {
      setTimeout(() => {
        process.stdout.write('\x07');
      }, parseInt(val) * 1000);
    }
  }
};
timer();