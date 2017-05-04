'use strict';

var log = function log() {
  var _console;

  (_console = console).log.apply(_console, arguments);
};

var isSite = function isSite() {
  var site = /^(github.com)$/;
  return site.exec(document.location.hostname);
};

if (isSite) {
  log('true');
} else {
  log('false');
}
