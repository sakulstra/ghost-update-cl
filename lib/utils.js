/**
 * checks if current Path is a ghost installation
 */
import {logger} from './logger';
import fs from 'fs';

export function isGhostDir(){
  try {
    fs.accessSync('package.json', fs.F_OK);
    let json = JSON.parse(fs.readFileSync('package.json', 'utf8'));
    if(json.name !== 'ghost') {
      logger.error('You\'re not in a ghost directory');
      return false;
    }else {
      logger.success('Ghost directory detected');
      return json;
    }
  } catch (e) {
    logger.error('Couldn\'t find a package json');
    return false;
  }
}