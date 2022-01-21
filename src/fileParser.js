import * as path from 'path';
import * as jsyaml from 'js-yaml';
import { readFileSync } from 'fs';

const parser = (filepath) => {
  if (path.extname(filepath) === '.json') {
    return JSON.parse(readFileSync(filepath, 'utf8'));
  } if (path.extname(filepath) === '.yaml' || path.extname(filepath) === '.yml') {
    return jsyaml.load(readFileSync(filepath, 'utf8'));
  }
  return 'none of this';
};

export default parser;
