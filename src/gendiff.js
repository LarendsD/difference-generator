import genDiff from './filediff.js';
import parser from './fileParser.js';
import convert from './convertToAbsolutePath.js';

const genDifference = (path1, path2, formatName = 'stylish') => {
  const fileObj1 = parser(convert(path1));
  const fileObj2 = parser(convert(path2));
  return genDiff(fileObj1, fileObj2, 0, formatName);
};

export default genDifference;
