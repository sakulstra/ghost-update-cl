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
} else {
  _logger.logger.info('Trying to upgrade from ghost ' + json.version);
}

_commander2.default.version(_package2.default.version);

_commander2.default.command('backup [backupPath]').alias('b').option('-v, --verbose', 'show output of scripts in the console').description('creates a .tar.gz of current installation').action(function (backupPath, options) {
  (0, _commands.backup)(backupPath, options);
});

_commander2.default.command('download [downloadPath]').alias('d').option('-s, --sourceUrl [url]', 'Provide an additional [sourceUrl]').option('-v, --verbose', 'show output of scripts in the console').description('downloads latest ghost').action(function (downloadPath, options) {
  (0, _commands.download)(downloadPath, options);
});

_commander2.default.command('upgrade [pathToLatest]').alias('u').description('upgrade to latest ghost').action(function (pathToLatest, options) {
  (0, _commands.upgrade)(pathToLatest, options);
});

_commander2.default.command('all').alias('a').option('-s, --sourceUrl [url]', 'Provide an additional [sourceUrl]').option('-v, --verbose', 'show output of scripts in the console').description('upgrade ghost (backup, download and upgrade)').action(function (options) {
  (0, _commands.backup)('../backup/', options);
  (0, _commands.download)('../latest-ghost/', options);
  (0, _commands.upgrade)('../latest-ghost/', options);
});

_commander2.default.parse(process.argv);