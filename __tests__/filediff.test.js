import genDiff from '../src/filediff.js';

let pathToFile1;
let pathToFile2;
let resultCompareJSON;

beforeAll(() => {
    pathToFile1 = '__fixtures__/file1.json';
    pathToFile2 = '__fixtures__/file2.json';
    resultCompareJSON = `{
  - follow: false
    host: hexlet.io
  - proxy: 123.234.53.22
  - timeout: 50
  + timeout: 20
  + verbose: true
}`
})

test('JSON compare', () => {
    expect(genDiff(pathToFile1, pathToFile2)).toEqual(resultCompareJSON);
})