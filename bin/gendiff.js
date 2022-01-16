#!/usr/bin/env node
const { Command } = require ('commander');
const gendiffHelp = new Command();

gendiffHelp
  .description('Compares two configuration files and shows a difference.')
  .option('-V, --version', 'output the version number')
  .helpOption('-h, --help', 'output usage information');

gendiffHelp.parse();