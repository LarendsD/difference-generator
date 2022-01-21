import genDiff from '../src/filediff.js';

let pathToJson1;
let pathToJson2;
let pathToYaml1;
let pathToYaml2;
let resultCompare;

beforeAll(() => {
  pathToJson1 = '__fixtures__/file1.json';
  pathToJson2 = '__fixtures__/file2.json';
  pathToYaml1 = '__fixtures__/file1.yml';
  pathToYaml2 = '__fixtures__/file2.yml';
  resultCompare = `{
  - follow: false
    host: hexlet.io
  - proxy: 123.234.53.22
  - timeout: 50
  + timeout: 20
  + verbose: true
}`;
});

test('JSON compare', () => {
  expect(genDiff(pathToJson1, pathToJson2)).toEqual(resultCompare);
});

test('yaml compare', () => {
  expect(genDiff(pathToYaml1, pathToYaml2)).toEqual(resultCompare);
});
