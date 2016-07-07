/**
 * checks if current Path is a ghost installation
 */
import {logger} from './logger';
import fs from 'fs';

export function parseJson(path = '') {
  try {
    fs.accessSync(path + 'package.json', fs.F_OK);
    return JSON.parse(fs.readFileSync(path + 'package.json', 'utf8'));
  } catch (e) {
    logger.error('Couldn\'t find a package.json');
    return false;
  }
}

export function isGhostDir() {
  let json = parseJson();
  if(json.name !== 'ghost') {
    logger.error('You\'re not in a ghost directory');
    return false;
  }else {
    logger.success('Ghost directory detected');
    return json;
  }
}