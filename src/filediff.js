/* eslint-disable no-restricted-syntax */
import _ from 'lodash';

const onlyInFile1 = '/!';
const onlyInFile2 = '/+';
const inTwoFiles = '/ ';

function genDiff(filepath1, filepath2) {
  const sortedFile1 = Object.entries(filepath1);
  const sortedFile2 = Object.entries(filepath2);
  const result = {};
  for (const [key1, value1] of sortedFile1) {
    for (const [key2, value2] of sortedFile2) {
      if (_.isObject(value1) && _.isObject(value2)) {
        if (key1 === key2) {
          result[key1 + inTwoFiles] = genDiff(value1, value2);
        }
      }
      if (key1 === key2 && value1 === value2) {
        result[key1 + inTwoFiles] = value1;
      }
    }
    if (result[key1 + inTwoFiles] === undefined) {
      result[key1 + onlyInFile1] = value1;
    }
  }
  for (const [key2, value2] of sortedFile2) {
    if (result[key2 + inTwoFiles] === undefined) {
      result[key2 + onlyInFile2] = value2;
    }
  }
  return result;
}

export default genDiff;
