import fs from 'fs';
import path from 'path';
import genDiff from './filediff.js';
import parser from './fileParser.js';
import render from './formatters/index.js';

const genDifference = (path1, path2, formatName = 'stylish') => {
  const filePath1 = path.resolve('__fixtures__', path1);
  const fileObj1 = parser(fs.readFileSync(filePath1, 'utf-8'), path1);
  const filePath2 = path.resolve('__fixtures__', path2);
  const fileObj2 = parser(fs.readFileSync(filePath2, 'utf-8'), path2);
  const result = genDiff(fileObj1, fileObj2);
  return render(result, formatName);
};

export default genDifference;
