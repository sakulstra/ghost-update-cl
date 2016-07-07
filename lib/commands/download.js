import {logger} from '../logger';
/**
 * has to reference a location outside the current directory
 * @type {string}
 */
const defaultPath = '../ghost-latest/';

export default function backup(downloadPath, options) {
  if (!which('wget')) {
    logger.error('Sorry, this script requires wget');
    exit(1);
  }
  if(downloadPath === undefined){
    logger.warning('downloadPath is undefined so we assume you want to download to ' + defaultPath);
    downloadPath = defaultPath;
  }else{
    // TODO: make sure path ends with a /
  }
  // TODO: could be solved more intelligent
  if (test('-e', downloadPath)) {
    rm(downloadPath);
  }
  mkdir(downloadPath);
  exec('wget https://ghost.org/zip/ghost-latest.zip -P ' + downloadPath, {silent: !options.verbose});
  exec('unzip ' + downloadPath + 'ghost-latest.zip -d ' + downloadPath, {silent: !options.verbose});
  rm(downloadPath + 'ghost-latest.zip');
}