import { readFileSync } from 'fs';
import genDiff from '../src/filediff.js';
import parser from '../src/fileParser.js';
import convert from '../src/convertToAbsolutePath.js';

const pathToJson1 = parser(convert('__fixtures__/file1.json'));
const pathToJson2 = parser(convert('__fixtures__/file2.json'));
const pathToYaml1 = parser(convert('__fixtures__/file1.yml'));
const pathToYaml2 = parser(convert('__fixtures__/file2.yml'));
const resultCompare = readFileSync('__fixtures__/result', 'utf8');
const resultComparePlain = readFileSync('__fixtures__/resultPlain', 'utf8');
const resultCompareJSON = readFileSync('__fixtures__/resultJSON', 'utf8');

test('JSON compare', () => {
  expect(genDiff(pathToJson1, pathToJson2)).toEqual(resultCompare);
});

test('JSON compare plain', () => {
  expect(genDiff(pathToJson1, pathToJson2, 0, 'plain')).toEqual(resultComparePlain);
});

test('JSON compare json', () => {
  expect(genDiff(pathToJson1, pathToJson2, 0, 'json')).toEqual(resultCompareJSON);
});

test('yaml compare', () => {
  expect(genDiff(pathToYaml1, pathToYaml2)).toEqual(resultCompare);
});

test('yaml compare plain', () => {
  expect(genDiff(pathToYaml1, pathToYaml2, 0, 'plain')).toEqual(resultComparePlain);
});

test('yaml compare JSON', () => {
  expect(genDiff(pathToYaml1, pathToYaml2, 0, 'json')).toEqual(resultCompareJSON);
});
