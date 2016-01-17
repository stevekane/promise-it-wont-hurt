#!/usr/bin/env node

'use strict';

var workshopper = require('workshopper');
var path = require('path');

var fpath = path.join.bind(null, __dirname);

workshopper({
  name: 'promise-it-wont-hurt',
  appDir: __dirname,
  languages: ['en', 'fr'],
  helpFile: fpath('./i18n/help/{lang}.txt'),
  menu: {
    bg: 'red',
    fg: 'white',
  },
});
