#!/usr/bin/env node

import { Command } from 'commander';
import genDiff from '../src/filediff.js';
import convert from '../src/convertToAbsolutePath.js';
import parser from '../src/fileParser.js';

const gendiff = new Command();

gendiff
  .description('Compares two configuration files and shows a difference.')
  .argument('<filepath1>')
  .argument('<filepath2>')
  .option('-V, --version', 'output the version number')
  .helpOption('-h, --help', 'output usage information')
  .option('-f, --format <type>', 'output format', 'stylish')
  .action((filepath1, filepath2, type) => {
    const formattedFile1 = parser(convert(filepath1));
    const formattedFile2 = parser(convert(filepath2));
    console.log(genDiff(formattedFile1, formattedFile2, 0, type.format));
  });

gendiff.parse(process.argv);
