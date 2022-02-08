/* eslint-disable no-restricted-syntax */
import _ from 'lodash';

const space = '  ';

function stylish(values, depth = 1) {
  const sortedValues = _.sortBy(Object.entries(values));
  let formattedValues = '{\n';
  for (const [key, value] of sortedValues) {
    const keys = key.split('/');
    if (keys[1] === '!DELETED') {
      keys[1] = '-';
    } else if (keys[1] === '+ADDED') {
      keys[1] = '+';
    } else {
      keys[1] = ' ';
    }
    if (_.isObject(value)) {
      formattedValues += `${space.repeat(depth)}${keys[1]} ${keys[0]}: ${stylish(value, depth + 2)}`;
    } else {
      formattedValues += `${space.repeat(depth)}${keys[1]} ${keys[0]}: ${value}\n`;
    }
  }
  formattedValues += `${space.repeat(depth - 1)}}\n`;
  return formattedValues;
}

export default stylish;
