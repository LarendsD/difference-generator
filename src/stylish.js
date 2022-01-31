/* eslint-disable no-restricted-syntax */
import _ from 'lodash';

const space = '  ';

function formatter(values, depth = 1) {
  const sortedValues = _.sortBy(Object.entries(values));
  let formattedValues = '{\n';
  for (const [key, value] of sortedValues) {
    const keys = key.split('/');
    if (keys[1] === '+' || keys[1] === '!') {
      if (keys[1] === '!') {
        keys[1] = '-';
      }
      if (_.isObject(value)) {
        formattedValues += `${space.repeat(depth)}${keys[1]} ${keys[0]}: ${formatter(value, depth + 2)}`;
      } else {
        formattedValues += `${space.repeat(depth)}${keys[1]} ${keys[0]}: ${value}\n`;
      }
    } else if (_.isObject(value)) {
      formattedValues += `${space.repeat(depth)}  ${keys[0]}: ${formatter(value, depth + 2)}`;
    } else {
      formattedValues += `${space.repeat(depth)}  ${keys[0]}: ${value}\n`;
    }
  }
  formattedValues += `${space.repeat(depth - 1)}}\n`;
  return formattedValues;
}

export default formatter;
