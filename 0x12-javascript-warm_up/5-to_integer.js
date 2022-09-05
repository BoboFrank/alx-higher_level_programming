#!/usr/bin/node

import { argv } from 'process';

if (Number(argv[2]) !== 'string' || typeof argv[2] === 'undefined') {
  console.log('Not a number');
} else {
  console.log('My number is ' + argv[2]);
}
