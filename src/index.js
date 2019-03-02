import readlineSync from 'readline-sync';

const getName = () => readlineSync.question('May I have your name? ');

export default (getGameData, description) => {
  console.log('Welcome to the Brain Games!');
  console.log(description);
  const user = getName();
  console.log(`Hello ${user}!`);
  const numberOfRounds = 3;

  const areAnswersRight = (roundCounter) => {
    const { question, answer: correctAnswer } = getGameData();
    console.log(`Question: ${question}`);
    const userAnswer = readlineSync.question('Your answer: ');

    if (userAnswer !== correctAnswer) {
      console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.`);
      return false;
    }

    console.log('Correct!');
    if (roundCounter < numberOfRounds) {
      return areAnswersRight(roundCounter + 1);
    }
    return true;
  };

  if (areAnswersRight(1)) {
    console.log(`Congratulations, ${user}!`);
  } else {
    console.log(`Let's try again, ${user}!`);
  }
};
