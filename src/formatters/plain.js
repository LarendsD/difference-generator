/* eslint-disable no-lonely-if */
/* eslint-disable no-restricted-syntax */
import _ from 'lodash';

let path = '';

const isString = (value) => ((typeof value === 'string') ? `'${value}'` : value);

const formatValue = (value) => ((_.isObject(value)) ? '[complex value]' : isString(value));

function plain(values, property = '') {
  const sortedValues = _.sortBy(Object.entries(values));
  let formattedValues = '';
  for (const [key, value] of sortedValues) {
    const [cleanKey, separator] = key.split('/');
    path = property;
    if (separator === '!') {
      if (_.has(values, `${cleanKey}/+`)) {
        formattedValues += `Property '${property}${cleanKey}' was updated. From ${formatValue(values[key])} to ${formatValue(values[`${cleanKey}/+`])}\n`;
      } else {
        formattedValues += `Property '${property}${cleanKey}' was removed\n`;
      }
    } else if (separator === '+') {
      if (!_.has(values, `${cleanKey}/!`)) {
        formattedValues += `Property '${property}${cleanKey}' was added with value: ${formatValue(values[key])}\n`;
      }
    } else if (_.isObject(value)) {
      path += `${cleanKey}.`;
      formattedValues += plain(value, path);
    }
  }
  path = '';
  return formattedValues;
}

export default plain;
