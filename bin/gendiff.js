#!/usr/bin/env node
import { Command } from 'commander';
import genDifference from '../src/index.js';

const gendiff = new Command();

gendiff
  .description('Compares two configuration files and shows a difference.')
  .argument('<filepath1>')
  .argument('<filepath2>')
  .option('-V, --version', 'output the version number')
  .helpOption('-h, --help', 'output usage information')
  .option('-f, --format <type>', 'output format', 'stylish')
  .action((filepath1, filepath2, option) => {
    console.log(genDifference(filepath1, filepath2, option.format));
  });

gendiff.parse(process.argv);

export default gendiff;
