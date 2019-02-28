import beginGame from '..';
import getRandomInt from '../utils';

const description = 'What number is missing in the progression?';

const getProgression = (length) => {
  const progression = [];

  const firstElement = getRandomInt(1, 100);
  const step = getRandomInt(1, 15);

  for (let index = 0; index < length; index += 1) {
    progression.push(firstElement + (step * index));
  }

  return progression;
};

const generate = () => {
  const length = 10;
  const progression = getProgression(length);
  const hiddenPosition = getRandomInt(0, length);

  const question = progression.slice();
  question[hiddenPosition] = '..';

  const answer = `${progression[hiddenPosition]}`;

  return {
    question: question.join(' '),
    answer,
  };
};

export default () => beginGame(generate, description);
