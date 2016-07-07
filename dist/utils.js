'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.isGhostDir = isGhostDir;

var _logger = require('./logger');

var _fs = require('fs');

var _fs2 = _interopRequireDefault(_fs);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * checks if current Path is a ghost installation
 */
function isGhostDir() {
  try {
    _fs2.default.accessSync('package.json', _fs2.default.F_OK);
    var json = JSON.parse(_fs2.default.readFileSync('package.json', 'utf8'));
    if (json.name !== 'ghost') {
      _logger.logger.error('You\'re not in a ghost directory');
      return false;
    } else {
      _logger.logger.success('Ghost directory detected');
      return json;
    }
  } catch (e) {
    _logger.logger.error('Couldn\'t find a package json');
    return false;
  }
}