import json from './json.js';
import plain from './plain.js';
import stylish from './stylish.js';

const chooseFormat = (diff, format) => {
  if (format === 'plain') {
    return plain(diff);
  } if (format === 'json') {
    return json(diff);
  }
  return stylish(diff);
};

export default chooseFormat;
