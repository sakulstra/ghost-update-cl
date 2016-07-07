'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.logger = undefined;

var _colors = require('colors');

var logger = exports.logger = {
  success: function success(msg) {
    console.log((0, _colors.green)('success:   ') + msg);
  },
  info: function info(msg) {
    console.log((0, _colors.cyan)('info:      ') + msg);
  },
  warning: function warning(msg) {
    console.log((0, _colors.yellow)('warning:   ') + msg);
  },
  error: function error(msg) {
    console.log((0, _colors.red)('error:     ') + msg);
  }
};