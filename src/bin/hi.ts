#!/usr/bin/env node
import hello from '../hello';
console.log(process.argv);
console.log(hello(process.argv[0]));
