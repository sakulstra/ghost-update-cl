# ghost-update-cli
# BEWARE: This is experimental and not considered to be stable!
## Introduction
I tried to create a cli which basically automates the upgrade process described here: http://support.ghost.org/how-to-upgrade/#command-guide

This package is pretty much hacked together - could definitely be done better, don't have to high expectations!

## Commands
simply type `ghost-cli help` to see available commands. With no parameter provided ghost-cli will execute all commands.

## Development
The package is in early development and not even published on npm yet. If you want to try it, help finding bugs or even help developing it you have to do two things.

1. clone the package `git clone https://github.com/sakulstra/ghost-update-cli && cd ghost-update-cli`
2. link the package `npm link`

From now on you can use the ghost-cli command line.

If you want to change sth. you can simply edit the files and run `npm run compile` to compile the changes.
