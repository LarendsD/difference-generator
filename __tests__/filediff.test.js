import { readFileSync } from 'fs';
import genDiff from '../src/filediff.js';
import parser from '../src/fileParser.js';
import convert from '../src/convertToAbsolutePath.js';

let pathToJson1;
let pathToJson2;
let pathToYaml1;
let pathToYaml2;
let resultCompare;
let resultComparePlain;

beforeAll(() => {
  pathToJson1 = parser(convert('__fixtures__/file1.json'));
  pathToJson2 = parser(convert('__fixtures__/file2.json'));
  pathToYaml1 = parser(convert('__fixtures__/file1.yml'));
  pathToYaml2 = parser(convert('__fixtures__/file2.yml'));
  resultCompare = readFileSync('__fixtures__/result', 'utf8');
  resultComparePlain = readFileSync('__fixtures__/resultPlain', 'utf8');
});

test('JSON compare', () => {
  expect(genDiff(pathToJson1, pathToJson2)).toEqual(resultCompare);
});

test('JSON compare plain', () => {
  expect(genDiff(pathToJson1, pathToJson2, 'plain')).toEqual(resultComparePlain);
});

test('yaml compare', () => {
  expect(genDiff(pathToYaml1, pathToYaml2)).toEqual(resultCompare);
});

test('yaml compare plain', () => {
  expect(genDiff(pathToYaml1, pathToYaml2, 'plain')).toEqual(resultComparePlain);
});
