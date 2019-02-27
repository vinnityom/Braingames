import readlineSync from 'readline-sync';

const getName = () => readlineSync.question('May I have your name? ');
export const getRandomInt = (min, max) => Math.floor(Math.random() * (max - min)) + min;

export const greetUser = (description = '') => {
  console.log('Welcome to the Brain Games!');
  console.log(description);
  const name = getName();
  console.log(`Hello ${name}!`);
  return name;
};

export const beginGame = (getGameData, description) => {
  const user = greetUser(description);
  const numberOfRounds = 3;

  const startRound = (roundCounter) => {
    const { question, answer: correctAnswer } = getGameData();
    console.log(`Question: ${question}`);
    const userAnswer = readlineSync.question('Your answer: ');
    if (userAnswer !== correctAnswer) {
      console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.`);
      return roundCounter;
    }
    console.log('Correct!');
    if (roundCounter < numberOfRounds) {
      return startRound(roundCounter + 1);
    }
    return roundCounter;
  };

  const playedRounds = startRound(1);

  if (playedRounds === numberOfRounds) {
    console.log(`Congratulations, ${user}!`);
  } else {
    console.log(`Let's try again, ${user}!`);
  }
};
