import { readFileSync } from 'fs';
import path from 'path';
import genDiff from './filediff.js';
import parser from './fileParser.js';
import convert from './convertToAbsolutePath.js';
import chooseFormat from './formatters/index.js';

const genDifference = (path1, path2, formatName = 'stylish') => {
  const fileObj1 = parser(readFileSync(convert(path1)), path.extname(path1).split('.')[1]);
  const fileObj2 = parser(readFileSync(convert(path2)), path.extname(path1).split('.')[1]);
  const fileDifference = genDiff(fileObj1, fileObj2);
  return chooseFormat(fileDifference, formatName);
};

export default genDifference;
