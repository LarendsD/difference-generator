import genDiff from './filediff.js';
import parser from './fileParser.js';

const genDifference = (path1, path2, formatName = 'stylish') => {
  console.log(path1, path2);
  const fileObj1 = parser(path1);
  const fileObj2 = parser(path2);
  return genDiff(fileObj1, fileObj2, 0, formatName);
};

export default genDifference;
