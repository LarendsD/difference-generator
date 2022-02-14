import { readFileSync } from 'fs';
import path from 'path';
import buildDiff from './treeBuilder.js';
import parser from './fileParser.js';
import chooseFormat from './formatters/index.js';

const convert = (filepath) => path.resolve(process.cwd(), filepath);

const genDifference = (path1, path2, formatName = 'stylish') => {
  const fileObj1 = parser(readFileSync(convert(path1)), path.extname(path1).split('.')[1]);
  const fileObj2 = parser(readFileSync(convert(path2)), path.extname(path1).split('.')[1]);
  const fileDifference = buildDiff(fileObj1, fileObj2);
  return chooseFormat(fileDifference, formatName);
};

export default genDifference;
