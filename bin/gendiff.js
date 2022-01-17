#!/usr/bin/env node
const { Command } = require ('commander');
const gendiffHelp = new Command();

gendiffHelp
  .description('Compares two configuration files and shows a difference.')
  .argument('<filepath1>')
  .argument('<filepath2>')
  .option('-V, --version', 'output the version number')
  .helpOption('-h, --help', 'output usage information')
  .option('-f, --format [type]', 'output format');

gendiffHelp.parse();