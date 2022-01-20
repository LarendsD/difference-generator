/* eslint-disable no-restricted-syntax */
import { readFileSync } from 'fs';
import _ from 'lodash';

const onlyInFile1 = '-';
const onlyInFile2 = '+';

function genDiff(filepath1, filepath2) {
  const sortedJson1 = _.sortBy(Object.entries(JSON.parse(readFileSync(filepath1, 'utf8'))));
  const sortedJson2 = _.sortBy(Object.entries(JSON.parse(readFileSync(filepath2, 'utf8'))));
  let result = '{\n';
  for (const [key1, value1] of sortedJson1) {
    for (const [key2, value2] of sortedJson2) {
      if (key1 === key2 && value1 === value2) {
        result += (`    ${key1}: ${value1}\n`);
      }
    }
    if (!result.includes(`    ${key1}: ${value1}\n`)) {
      result += (`  ${onlyInFile1} ${key1}: ${value1}\n`);
    }
  }
  for (const [key2, value2] of sortedJson2) {
    if (!result.includes(`    ${key2}: ${value2}\n`)) {
      result += (`  ${onlyInFile2} ${key2}: ${value2}\n`);
    }
  }
  result += '}';
  return result;
}

export default genDiff;
