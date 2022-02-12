import plain from './plain.js';
import stylish from './stylish.js';

const chooseFormat = (diff, format) => {
  switch (format) {
    case 'plain':
      return plain(diff);
    case 'json':
      return JSON.stringify(diff);
    case 'stylish':
      return stylish(diff);
    default:
      throw new Error('Invalid format name!');
  }
};

export default chooseFormat;
