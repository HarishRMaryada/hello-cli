#!/usr/bin/env node

const chalk = require("chalk");
const figlet = require("figlet")

const figletGreeting = chalk.yellow(figlet.textSync('CLI INIT',{ horizontalLayout: 'full' }))

console.log(figletGreeting);
