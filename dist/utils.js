'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.parseJson = parseJson;
exports.isGhostDir = isGhostDir;

var _logger = require('./logger');

var _fs = require('fs');

var _fs2 = _interopRequireDefault(_fs);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * checks if current Path is a ghost installation
 */
function parseJson() {
  var path = arguments.length <= 0 || arguments[0] === undefined ? '' : arguments[0];

  try {
    _fs2.default.accessSync(path + 'package.json', _fs2.default.F_OK);
    return JSON.parse(_fs2.default.readFileSync(path + 'package.json', 'utf8'));
  } catch (e) {
    _logger.logger.error('Couldn\'t find a package.json');
    return false;
  }
}

function isGhostDir() {
  var json = parseJson();
  if (json.name !== 'ghost') {
    _logger.logger.error('You\'re not in a ghost directory');
    return false;
  } else {
    _logger.logger.success('Ghost directory detected');
    return json;
  }
}