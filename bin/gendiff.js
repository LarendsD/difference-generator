#!/usr/bin/env node

import { Command } from 'commander';
import genDiff from '../src/filediff.js';
import convert from '../src/convertToAbsolutePath.js';

const gendiff = new Command();

gendiff
  .description('Compares two configuration files and shows a difference.')
  .argument('<filepath1>')
  .argument('<filepath2>')
  .option('-V, --version', 'output the version number')
  .helpOption('-h, --help', 'output usage information')
  .option('-f, --format [type]', 'output format')
  .action((filepath1, filepath2) => {
    console.log(genDiff(convert(filepath1), convert(filepath2)));
  });

gendiff.parse();
