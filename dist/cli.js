'use strict';

var _commander = require('commander');

var _commander2 = _interopRequireDefault(_commander);

var _package = require('../package.json');

var _package2 = _interopRequireDefault(_package);

var _utils = require('./utils');

var _logger = require('./logger');

var _commands = require('./commands');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

require('shelljs/global');
config.verbose = true;
config.fatal = true;

var json = void 0;

if (!(json = (0, _utils.isGhostDir)())) {
  exit(1);
}
console.log(json);

// TODO: use a fix path and check if it already contains the latest ghost
var ghostLatestPath = '../ghost-latest/';

_commander2.default.version(_package2.default.version);

_commander2.default.command('backup [backupPath]').alias('b').option('-v, --verbose', 'show output of scripts in the console').description('creates a .tar.gz of current installation').action(function (backupPath, options) {
  (0, _commands.backup)(backupPath, options);
});

_commander2.default.command('download').alias('d').description('downloads latest ghost').action(function () {
  if (!which('wget')) {
    _logger.logger.error('Sorry, this script requires wget');
    exit(1);
  }
  // TODO: could be solved more intelligent
  if (!test('-e', ghostLatestPath)) {
    rm(ghostLatestPath);
  }
  mkdir(ghostLatestPath);
  exec('wget https://ghost.org/zip/ghost-latest.zip -P ' + ghostLatestPath);
  exec('unzip ' + ghostLatestPath + 'ghost-latest.zip -d ' + ghostLatestPath);
  rm(ghostLatestPath + 'ghost-latest.zip');
});

_commander2.default.command('upgrade').alias('u').description('upgrade to latest ghost').action(function () {
  rm('-R', './core');
  mv('../new-ghost/core', './');
  mv('../new-ghost/index.js', './');
  mv('../new-ghost/package.json', './');
  mv('../new-ghost/npm-shrinkwrap.json', './');
  exec('npm install --production');
});

_commander2.default.parse(process.argv);