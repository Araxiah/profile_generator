//Driver @Araxiah
//Navigators @mariahfernnn @avijitchoudhury 

const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});


let profile = [];
rl.question(`What's your nickname? `, (answer) => {
  console.log(`Nice to meet you! ${answer}`);
  profile.push(answer)
  console.log(profile)
  rl.question(`What do you like to eat? `, (answer) => {
    console.log(`${answer}? That sounds good`);
    profile.push(answer);
    console.log(profile)
    rl.question(`What is your favourite animal?`, (answer) => {
      console.log(`${answer}! That's awesome!`);
      profile.push(answer)
      console.log(profile)
      rl.question(`What is your favourite colour?`, (answer) => {
        console.log(`${answer}? I agree!`);
        profile.push(answer);
        console.log(`Hello! my name is ${profile[0]}, I like to eat ${profile[1]}. My favouirte animal is ${profile[2]} and my favourite colour is ${profile[3]} :^)`);
        rl.close();
      });

    });

  });

});


