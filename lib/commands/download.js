import {logger} from '../logger';
import {parseJson} from '../utils';
/**
 * has to reference a location outside the current directory
 * @type {string}
 */
const defaultPath = '../ghost-latest/';
const defaultUrl = 'https://ghost.org/zip/ghost-latest.zip';

export default function download(downloadPath, options) {
  if (!which('wget')) {
    logger.error('Sorry, this script requires wget');
    exit(1);
  }
  if(downloadPath === undefined) {
    logger.warning('downloadPath is undefined so we assume you want to download to ' + defaultPath);
    downloadPath = defaultPath;
  }else if(downloadPath.slice(-1) !== '/') {
    downloadPath += '/';
  }
  // TODO: could be solved more intelligent
  if (test('-e', downloadPath)) {
    rm('-R', downloadPath);
  }
  mkdir(downloadPath);
  // define which ghost version to load
  let sourceUrl = defaultUrl;
  if(options.sourceUrl !== undefined){
    sourceUrl = options.sourceUrl;
  }
  exec('wget ' + sourceUrl + ' -O '+ downloadPath +'ghost-latest.zip', {silent: !options.verbose});
  exec('unzip ' + downloadPath + 'ghost-latest.zip -d ' + downloadPath, {silent: !options.verbose});
  rm(downloadPath + 'ghost-latest.zip');
  let json = parseJson(downloadPath);
  logger.info('Downloaded ghost ' + json.version);
}