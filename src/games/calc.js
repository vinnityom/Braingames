import beginGame from '..';
import getRandomInt from '../utils';

const description = 'What is the result of the expression?';

const getExpression = (i, x, y) => {
  const expression = {};
  switch (i) {
    case 1:
      expression.sign = '+';
      expression.result = x + y;
      break;
    case 2:
      expression.sign = '-';
      expression.result = x - y;
      break;
    case 3:
      expression.sign = '*';
      expression.result = x * y;
      break;
    default:
      break;
  }
  return expression;
};

const generate = () => {
  const firstNumber = getRandomInt(1, 50);
  const secondNumber = getRandomInt(1, 50);

  const { sign, result } = getExpression(getRandomInt(1, 4), firstNumber, secondNumber);

  const question = `${firstNumber} ${sign} ${secondNumber}`;
  const correctAnswer = result.toString();

  return {
    question,
    correctAnswer,
  };
};

export default () => beginGame(generate, description);
