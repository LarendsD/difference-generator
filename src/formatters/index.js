import plain from './plain.js';
import stylish from './stylish.js';

const chooseFormat = (diff, format) => {
  if (format === 'plain') {
    return plain(diff);
  }
  return stylish(diff);
};

export default chooseFormat;
