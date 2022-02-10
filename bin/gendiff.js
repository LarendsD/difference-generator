#!/usr/bin/env node
import { Command } from 'commander';
import genDiff from '../index.js';

const gendiff = new Command();

gendiff
  .description('Compares two configuration files and shows a difference.')
  .argument('<filepath1>')
  .argument('<filepath2>')
  .option('-V, --version', 'output the version number')
  .helpOption('-h, --help', 'output usage information')
  .option('-f, --format <type>', 'output format', 'stylish')
  .action((filepath1, filepath2, type) => {
    console.log(genDiff(filepath1, filepath2, 0, type.format));
  });

gendiff.parse(process.argv);

export default gendiff;
