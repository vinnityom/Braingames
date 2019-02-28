import beginGame from '..';
import getRandomInt from '../utils';

const description = 'Answer "yes" if given number is prime. Otherwise answer "no".';
const isPrime = (num) => {
  const inner = (devisor) => {
    if (devisor === num) {
      return true;
    }
    if (num % devisor === 0) {
      return false;
    }

    return inner(devisor + 1);
  };

  return inner(2);
};

const generate = () => {
  const number = getRandomInt(1, 100);
  const answer = isPrime(number) ? 'yes' : 'no';

  return {
    question: `${number}`,
    answer,
  };
};

export default () => beginGame(generate, description);
