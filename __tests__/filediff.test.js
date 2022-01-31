import readFileSync from 'fs';
import genDiff from '../src/filediff.js';
import parser from '../src/fileParser.js';
import convert from '../src/convertToAbsolutePath.js';
import formatter from '../src/stylish.js';

let pathToJson1;
let pathToJson2;
let pathToYaml1;
let pathToYaml2;
let resultCompare;

beforeAll(() => {
  pathToJson1 = parser(convert('__fixtures__/file1.json'));
  pathToJson2 = parser(convert('__fixtures__/file2.json'));
  pathToYaml1 = parser(convert('__fixtures__/file1.yml'));
  pathToYaml2 = parser(convert('__fixtures__/file2.yml'));
  resultCompare = readFileSync('__fixtures__/result', 'utf8');
});

test('JSON compare', () => {
  expect(formatter(genDiff(pathToJson1, pathToJson2))).toEqual(resultCompare);
});

test('yaml compare', () => {
  expect(formatter(genDiff(pathToYaml1, pathToYaml2))).toEqual(resultCompare);
});
