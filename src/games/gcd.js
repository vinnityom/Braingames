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

  const gcd = getGCD(first, second);

  return {
    question: `${first} ${second}`,
    correctAnswer: `${gcd}`,
  };
};

export default () => beginGame(generate, description);
