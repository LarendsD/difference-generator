import { readFileSync } from 'fs';
import genDifference from '../src/gendiff.js';

const pathToJson1 = '__fixtures__/file1.json';
const pathToJson2 = '__fixtures__/file2.json';
const pathToYaml1 = '__fixtures__/file1.yml';
const pathToYaml2 = '__fixtures__/file2.yml';
const resultCompare = readFileSync('__fixtures__/result', 'utf8');
const resultComparePlain = readFileSync('__fixtures__/resultPlain', 'utf8');
const resultCompareJSON = readFileSync('__fixtures__/resultJSON', 'utf8');

test('JSON compare', () => {
  expect(genDifference(pathToJson1, pathToJson2)).toEqual(resultCompare);
});

test('JSON compare plain', () => {
  expect(genDifference(pathToJson1, pathToJson2, 'plain')).toEqual(resultComparePlain);
});

test('JSON compare json', () => {
  expect(genDifference(pathToJson1, pathToJson2, 'json')).toEqual(resultCompareJSON);
});

test('yaml compare', () => {
  expect(genDifference(pathToYaml1, pathToYaml2)).toEqual(resultCompare);
});

test('yaml compare plain', () => {
  expect(genDifference(pathToYaml1, pathToYaml2, 'plain')).toEqual(resultComparePlain);
});

test('yaml compare JSON', () => {
  expect(genDifference(pathToYaml1, pathToYaml2, 'json')).toEqual(resultCompareJSON);
});
