#!/usr/bin/env node

const workshopper = require('workshopper')
    , path        = require('path')

function fpath (f) {
  return path.join(__dirname, f)
}

workshopper({
    name        : 'promise-it-wont-hurt'
  , appDir      : __dirname
  , languages   : ['en', 'fr']
  , helpFile    : fpath('./i18n/help/{lang}.txt')
  , menu: {
    bg: "red",
    fg: "white"
  }
})
