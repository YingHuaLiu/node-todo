#!/usr/bin/env/ node

const program = require('commander');
const api = require('./index')

program
  .option('-x, --xxx', 'what the x')

program
  .command('add')
  .description('add a task')
  .action((...args) => {
    const words = args[1].join(' ');
    void api.add(words)
  });
program
  .command('clear')
  .description('clear all task')
  .action(() => {
    void api.clear()
  });

if (process.argv.length === 2) {
  void api.showAll()
}

program.parse(process.argv)


