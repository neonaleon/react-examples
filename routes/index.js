var express = require('express');
var router = express.Router();

var fs = require('fs');
var path = require('path');
var React = require('react');

var exampleFiles = fs.readdirSync(path.join(__dirname, 'examples'));

var exampleNames = exampleFiles.map(function(filename){
  return path.basename(filename, '.js');
});

exampleNames.forEach(function(name){
  router.use('/examples/' + name, require('./examples/' + name));
});

var Index = require('../build/index');
router.get('/', function(req, res) {
  var Index = React.createFactory(require('../build/index'));
  var props = { examples: exampleNames.map(function(name){ return { name: name, link: '/examples/' + name } }) };
  res.send(React.renderToString(Index(props)));
});

module.exports = router;