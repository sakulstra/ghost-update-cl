import {logger} from '../logger';
/**
 * has to reference a location outside the current directory
 * @type {string}
 */
const defaultPath = '../backups/';

export default function backup(backupPath, options) {
  if (!which('tar')) {
    logger.error('Sorry, this script requires tar');
    exit(1);
  }
  if(backupPath === undefined){
    logger.warning('backupPath is undefined so we assume you want to backup to ' + defaultPath);
    backupPath = defaultPath;
  }else{
    // TODO: make sure path ends with a /
  }
  let timeStamp = new Date().toLocaleString().replace(' ', '_');
  // TODO: read config and name backup according to production url
  let filename = 'ghost_backup_' + timeStamp + '.tar.gz';
  if (!test('-e', backupPath)) {
    mkdir(backupPath);
  }
  exec('tar -czf ' + backupPath + filename + ' .', {silent: !options.verbose});
  // TODO: figure out how to export to json - like in ghost admin panel
}