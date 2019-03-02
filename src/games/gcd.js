import beginGame from '..';
import getRandomInt from '../utils';

const description = 'Find the greatest common divisor of given numbers.';
const getGCD = (a, b) => {
  const smallest = Math.min(a, b);

  const iter = (acc, currentDivisor) => {
    const newAcc = a % currentDivisor === 0 && b % currentDivisor === 0
      ? currentDivisor : acc;

    if (currentDivisor === smallest) {
      return newAcc;
    }

    return iter(newAcc, currentDivisor + 1);
  };

  return iter(0, 1);
};

const generate = () => {
  const first = getRandomInt(1, 100);
  const second = getRandomInt(1, 100);

  const correctAnswer = getGCD(first, second).toString();

  return {
    question: `${first} ${second}`,
    correctAnswer,
  };
};

export default () => beginGame(generate, description);
