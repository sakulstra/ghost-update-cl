'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = upgrade;

var _logger = require('../logger');

function upgrade(pathToLatest, options) {
  if (pathToLatest === undefined) {
    _logger.logger.warning('you have to specify the path to the new ghost directory');
    exit(1);
  }
  rm('-R', './core');
  mv(pathToLatest + 'core', './');
  mv(pathToLatest + 'index.js', './');
  mv(pathToLatest + 'package.json', './');
  mv(pathToLatest + 'npm-shrinkwrap.json', './');
  exec('npm install --production', { silent: !options.verbose });
}