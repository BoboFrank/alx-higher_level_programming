#!/usr/bin/node

import { argv } from "process";

if (!argv[2]) {
  console.log("No argument");
} else {
  console.log(argv[2]);
}
