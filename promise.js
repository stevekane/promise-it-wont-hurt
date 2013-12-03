#!/usr/bin/env node

const workshopper = require('workshopper')
  , path = require('path');


workshopper({
  name: "promise-it-wont-hurt",
  title: "Promise It Won't Hurt",
  subtitle: "Learn to use promises in Node and browsers",
  appDir: __dirname,
  menu: {
    bg: "red",
    fg: "white"
  },
  helpFile: path.join(__dirname, "help.txt")
}).init();
