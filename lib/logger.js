import {green, yellow, red, cyan} from 'colors';

export const logger = {
  success(msg) {
    console.log(green(`success:   `) + msg);
  },
  info(msg) {
    console.log(cyan('info:      ') + msg);
  },
  warning(msg) {
    console.log(yellow(`warning:   `) + msg);
  },
  error(msg) {
    console.log(red(`error:     `) + msg);
  }
};