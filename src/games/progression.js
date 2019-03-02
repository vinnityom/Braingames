import beginGame from '..';
import getRandomInt from '../utils';

const description = 'What number is missing in the progression?';
const lengthOfProgression = 10;

const getProgression = (first, step) => {
  const progression = [];

  for (let index = 0; index < lengthOfProgression; index += 1) {
    progression.push(first + (step * index));
  }

  return progression;
};

const generate = () => {
  const firstElement = getRandomInt(0, 100);
  const stepOfProgression = getRandomInt(0, 15);

  const progression = getProgression(firstElement, stepOfProgression);
  const hiddenElementPosition = getRandomInt(0, lengthOfProgression);

  const question = progression.slice();
  question[hiddenElementPosition] = '..';

  const correctAnswer = progression[hiddenElementPosition].toString();

  return {
    question: question.join(' '),
    correctAnswer,
  };
};

export default () => beginGame(generate, description);
