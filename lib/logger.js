import {green, yellow, red} from 'colors';

export const logger = {
  success(msg) {
    console.log(green(`success:   `) + msg);
  },
  warning(msg) {
    console.log(yellow(`warning:   `) + msg);
  },
  error(msg) {
    console.log(red(`error:     `) + msg);
  }
};