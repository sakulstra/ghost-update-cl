require('shelljs/global');
config.verbose = true;
config.fatal = true;

import program from 'commander';
import pkg from '../package.json';
import {isGhostDir} from './utils';
import {logger} from './logger';
import {backup, download} from './commands';

let json;

if(!(json = isGhostDir())){
  exit(1);
}

// TODO: use a fix path and check if it already contains the latest ghost
const ghostLatestPath = '../ghost-latest/';

program
  .version(pkg.version);

program
  .command('backup [backupPath]')
  .alias('b')
  .option('-v, --verbose', 'show output of scripts in the console')
  .description('creates a .tar.gz of current installation')
  .action(function(backupPath, options) {
    backup(backupPath, options);
  });

program
  .command('download [downloadPath]')
  .alias('d')
  .description('downloads latest ghost')
  .action(function(downloadPath, options) {
    download(downloadPath, options);
  });

program
  .command('upgrade')
  .alias('u')
  .description('upgrade to latest ghost')
  .action(function() {
    rm('-R', './core');
    mv('../new-ghost/core', './');
    mv('../new-ghost/index.js','./');
    mv('../new-ghost/package.json','./');
    mv('../new-ghost/npm-shrinkwrap.json','./');
    exec('npm install --production');
  });

program.parse(process.argv);