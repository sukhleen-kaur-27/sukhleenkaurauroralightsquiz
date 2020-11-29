// var readlinesync= require("readline-sync");
// var chalk=require("chalk");
// var score=0;
// var username=readlinesync.question(chalk.red("HI!!!\nWhat is your name?\n"));
// console.log(chalk`\nWelcome {green.bold ${username}}!!!!\n`);
// // console.log(chalk.whiteBright("Welcome ",chalk.green.bold(username)//,"!!!!\n"));
// // console.log(chalk`Welcome {green.bold ${username}}!!!!\n`);
// var op=["AURORA LIGHTS", "BTS"];
// console.log(chalk.blueBright("Would you like to play the quiz about \"AURORA LIGHTS\" OR \"BTS\""))
// var option=readlinesync.keyInSelect(op);
// var num=0;

// if(option==0){
//   console.log(chalk.yellow("Let's play a quiz about ",chalk.bold("AURORA LIGHTS!!!!")));
//   auroralightsfun();
// }
// else{
// console.log(chalk.yellow("Let's play a quiz about ",chalk.bold("BTS!!!!")));
// }
// var auroraoptions=[
//   [
//     "YES","NO"
//   ],
//   [
//     "Low Altitude Regions", "High Altitude Regions","Medium Altitude Regions"
//   ],
//   [
//     "collision of highly charged  electrons and atoms",
//     "collision of water droplets and atoms",
//     "collision of dust  particles and water droplets"
//   ],
//   [
//     "YES","NO"
//   ],
//   [
//     "India",
//     "Canada",
//     "korea"
//   ]
// ];

// var questions=[
//   {
//     question:"Can you see the AURORA LIGHTS with naked eyes? ",
//     answer:"YES"
//   },
//   {
//     question:"AURORA LIGHTS can be seen where ?",
//     answer:"High Altitude Regions"
//   },
//   {
//     question:"The AURORA LIGHTS are caused due to? ",
//     answer:"collision of highly charged  electrons and atoms "
//   },
//   {
//     question:"Can the AURORA LIGHTS be of green and orange-red color?",
//     answer:"YES"
//   },
//   {
//     question:"Out of which of these AURORA LIGHTS can be seen?",
//     answer:"Fairbanks Alaska"
//   }
// ];
// function play(question,answer,opt)
// {

//   if(opt==1)
//   {
//     console.log(chalk.red(question))
//     var useranswer=reaadlinesync.keyInSelect(auroraoptions[num]);
//     if(useranswer ==answer)
//     {
//       console.log(chalk.greenBright("You are correct!"));
//       score++;
//     }
//     else{
//       console.log(chalk.greenBright("Wrong!"))
//       console.log(chalk.yellowBright("Correct answer is ",chalk.bold.green(answer)));

//     }
//     condole.log("Your score is ",score);
//   }
//   else{

//   }
  
// }
// function auroralightsfun()
// {
//   for(var i=0;i<questions.length;i++)
// {
//   currentquestion=questions[i];
//   play(currentquestion.question,currentquestion.answer);
//   log(chalk.blueBright("--------------------"));
// }
// }
score=0;
var num=0;
var chalk=require("chalk");
var user= require("readline-sync");
var option=[
  ["YES","NO"],
  ["Low Altitude Regions", "High Altitude Regions","Medium Altitude Regions"],
  [ "collision of highly charged  electrons and atoms",
    "collision of water droplets and atoms",
    "collision of dust  particles and water droplets"],
  ["YES","NO"],
  ["India",
   "Canada",
   "korea"]
];



function log(data)
{
  console.log(data);
}
function play(question, answer)
{
  var user1= require("readline-sync");
  console.log("\n");
  console.log(chalk.red(question,"\n")),
  useranswer=user1.keyInSelect(option[num]);
  num2=option[num];
  console.log(chalk.yellowBright(num2[useranswer]));
  num++;
  if(num2[useranswer]==answer)
  {
    score++;
    switch(score){
    case 1 :
    log(chalk.red("OKAY!!! You got it right!!!!"));
    break;
    case 2:
    log(chalk.red("You got it correct again!!!!"));
    break;
    case 3:
    log(chalk.red("You are doing great!!!!"));
    break;
    default:
    log(chalk.red("You're doing awesome!!!!"));
    }
  } 
  else{
    log(chalk.white("Better luck next time!"));
    console.log(chalk.blueBright("Answer is ",answer));
  }
  console.log(chalk.magenta("Your score is ",chalk.cyan(score),"\n"));
}
var questions=[
  {
    question:"Can you see the AURORA LIGHTS with naked eyes?:\n",
    answer:"YES"
  },
  {
    question:"AURORA LIGHTS can be seen where ?:\n",
    answer:"High Altitude Regions"
  },
  {
    question:"The AURORA LIGHTS are caused due to?:\n",
    answer:"collision of highly charged  electrons and atoms"
  },
  {
    question:"Can the AURORA LIGHTS be of green and orange-red color?:\n",
    answer:"YES"
  },
  {
    question:"Out of which of these countries you can see AURORA LIGHTS ?:\n",
    answer:"Canada"
  }
];
var username=user.question(chalk.red("Hi\nWhat is your name?\n "))
console.log(chalk`Welcome {green.bold ${username}}!!!!\n`);
console.log(chalk.blue("Let's do a quiz about AURORA LIGHTS\n"));
  log(chalk.blueBright("--------------------"));
for(var i=0;i<questions.length;i++)
{
  currentquestion=questions[i];
  play(currentquestion.question,currentquestion.answer);
  log(chalk.blueBright("--------------------"));
}

console.log(chalk.whiteBright("\nYour Final Score Is ",score,"!!!!\n"));


