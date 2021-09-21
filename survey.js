const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('What is your name? Nicknames are also acceptable :) ', (answer) => {
  rl.question('How old are you?', (answer2) => {
    rl.question('What is your favourite anime?', (answer3) => {
      rl.question('Favourite character?', (answer4) => {
        rl.question('Give one reason why.', (answer5) => {
    //const profileAnswers = answer + answer2 + answer3 + answer4 + answer5 <--or compile all answers and just output
  console.log(`Thank you for your valuable feedback: Answer 1: ${answer}, Answer 2: ${answer2}, Answer 3: ${answer3}, Answer 4: ${answer4}, Answer 5: ${answer5}`);

  rl.close();
})})})});
});