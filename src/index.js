import json from './formatters/json.js';
import plain from './formatters/plain.js';
import stylish from './formatters/stylish.js';

const chooseFormat = (diff, format) => {
  if (format === 'plain') {
    return plain(diff);
  } if (format === 'json') {
    return json(diff);
  }
  return stylish(diff);
};

export default chooseFormat;
