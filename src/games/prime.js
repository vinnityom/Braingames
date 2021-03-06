import beginGame from '..';
import getRandomInt from '../utils';

const description = 'Answer "yes" if given number is prime. Otherwise Answer "no".';
const isPrime = (num) => {
  if (num < 2) {
    return false;
  }

  const isDivisorOfNum = (divisor) => {
    if (divisor > num / 2) {
      return true;
    }
    if (num % divisor === 0) {
      return false;
    }

    return isDivisorOfNum(divisor + 1);
  };

  return isDivisorOfNum(2);
};

const generate = () => {
  const number = getRandomInt(-100, 100);
  const correctAnswer = isPrime(number) ? 'yes' : 'no';

  return {
    question: number.toString(),
    correctAnswer,
  };
};

export default () => beginGame(generate, description);
