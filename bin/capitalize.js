// This file is a wrapper around the capitalzation module so we can pass in command line args to run the capitalizeNthAlphanumericChar function.
const capitalizeNthAlphanumericChar = require('../lib/capitalization')

const args = process.argv.slice(2);
console.log('args: ', args);

console.log(capitalizeNthAlphanumericChar(args[0], args[1]))