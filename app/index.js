'use strict';

var util = require('util');
var path = require('path');
var yeoman = require('yeoman-generator');
var chalk = require('chalk');
var yosay = require('yosay');

module.exports = yeoman.generators.Base.extend({

  // The name `constructor` is important here
  initializing: function () {
    this.pkg = require('../package.json');
  },

  prompting: function () {
    var done = this.async();

    // Have Yeoman greet the user.
    this.log(yosay(
      'Welcome to the fantabulous ' + chalk.red('JSPM') + ' generator!'
    ));

    var prompts = [{
      name: 'name',
      message: 'Whats the name of this project?'
    }];

    this.prompt(prompts, function (props) {
      this.name = props.name;
      this.framework = 'React';
      done();
    }.bind(this));
  },

  configuring: function() {
    this.template('_package.json', 'package.json');
    this.template('src/config.react.js', 'src/config.js');
  },

  writing: function() {
    if (this.framework === 'React') {
      this.template('src/main/main.react.js', 'src/main/main.js');
      this.fs.copyTpl(
        this.templatePath('src/index.html'),
        this.destinationPath('src/index.html'),
        { name: this.name }
      );
    }

    this.template('src/components/my-component.js', 'src/components/my-component.js');
    this.fs.copyTpl(
      this.templatePath('server'),
      this.destinationPath('server')
    );
  },

  install: function () {
    this.spawnCommand('npm', ['install']);
    this.spawnCommand('jspm', ['install']);
  }
});
