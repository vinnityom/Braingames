import beginGame from '..';
import getRandomInt from '../utils';

const isEven = num => num % 2 === 0;
const description = 'Answer "yes" if number even otherwise answer "no".';

const generate = () => {
  const question = getRandomInt(1, 100);
  const answer = isEven(question) ? 'yes' : 'no';

  return {
    question,
    answer,
  };
};

export default () => beginGame(generate, description);
