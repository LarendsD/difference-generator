import { fileURLToPath } from 'url';
import * as path from 'path';
import { dirname } from 'path';
import convert from '../src/convertToAbsolutePath.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const getFixturePath = (filename) => path.join(__dirname, '..', '__fixtures__', filename);

let simplePath;
let absolutePath;

beforeAll(() => {
  simplePath = '__fixtures__/file1.json';
  absolutePath = getFixturePath('file1.json');
});

test('testWithAbsolute path', () => {
  expect(convert(absolutePath)).toEqual(absolutePath);
});

test('testWithSimple path', () => {
  expect(convert(simplePath)).toEqual(absolutePath);
});
