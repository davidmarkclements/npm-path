var fs = require('fs');
var path = require('path');
var paths = process.env.PATH.split(':');

module.exports = function () {
  var npm;

  paths.some(function (p) {
    p = p.replace('~', process.env.HOME);
    p = path.resolve(p);
    p = path.join(p, 'npm');
    npm = p;
    return fs.existsSync(p);
  });

  return npm;
}
