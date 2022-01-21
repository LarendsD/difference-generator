/* eslint-disable no-restricted-syntax */
import _ from 'lodash';
import parser from './fileParser.js';

const onlyInFile1 = '-';
const onlyInFile2 = '+';

function genDiff(filepath1, filepath2) {
  const sortedFile1 = _.sortBy(Object.entries(parser(filepath1)));
  const sortedFile2 = _.sortBy(Object.entries(parser(filepath2)));
  let result = '{\n';
  for (const [key1, value1] of sortedFile1) {
    for (const [key2, value2] of sortedFile2) {
      if (key1 === key2 && value1 === value2) {
        result += (`    ${key1}: ${value1}\n`);
      }
    }
    if (!result.includes(`    ${key1}: ${value1}\n`)) {
      result += (`  ${onlyInFile1} ${key1}: ${value1}\n`);
    }
  }
  for (const [key2, value2] of sortedFile2) {
    if (!result.includes(`    ${key2}: ${value2}\n`)) {
      result += (`  ${onlyInFile2} ${key2}: ${value2}\n`);
    }
  }
  result += '}';
  return result;
}

export default genDiff;
