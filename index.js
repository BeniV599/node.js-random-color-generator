import kuler from 'kuler';
import randomColor from 'randomcolor';

// Prints the result in the required pattern

function printResult(color) {
  const fullHash = kuler('#'.repeat(31), color);
  const partHash = kuler('#'.repeat(5), color);
  const partSpace5 = kuler(' '.repeat(5), color);
  const partSpace7 = kuler(' '.repeat(7), color);

  console.log(`${fullHash}
${fullHash}
${fullHash}
${partHash} ${partSpace5} ${partSpace7} ${partSpace5} ${partHash}
${partHash} ${partSpace5} ${kuler(color, color)} ${partSpace5} ${partHash}
${partHash} ${partSpace5} ${partSpace7} ${partSpace5} ${partHash}
${fullHash}
${fullHash}
${fullHash}`);
}

// Randomly generates color depending on user input and then print it

const color = randomColor({
  luminosity: process.argv[3],
  hue: process.argv[2],
});
printResult(color);
