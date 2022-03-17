const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question("What's your name? Nicknames are also acceptable :)", (answer) => {
  console.log(`Thank you: ${answer}!`);
  rl.question("What is your favourite hobby?", (answer) => {
    console.log(`${answer} is a great hobby!`);
    rl.question("What is your favourite genre of music?", (answer) => {
      console.log(`We love ${answer} music too!`);
      rl.question("What is your favourite kind of food?", (answer) => {
        console.log(`Thanks for your answer!`);
        rl.question("What is your favourite sport?", (answer) => {
          console.log(`${answer} is an amazing sport!`);
          rl.question("Last but not least, tell us a bit about yourself and give us a quarky fun fact about yourself!", (answer) => {
            console.log(`Awesome! thank you so much for participating in the Profile Generator survey!`);
            
          })
        })
      })
    })
  })

  rl.close();
});