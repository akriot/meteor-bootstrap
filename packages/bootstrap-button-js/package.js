Package.describe({
  name: 'matb33:bootstrap-button-js',
  summary: 'Bootstrap: button js',
  version: '3.3.4',
  git: 'https://github.com/matb33/meteor-bootstrap.git',
  documentation: 'README.md'
});

Package.onUse(function (api) {
  api.use('matb33:bootstrap-base@3.3.4', 'client');
  api.use(['matb33:bootstrap-buttons@3.3.4', 'jquery'], 'client');
  api.addFiles('button.js', 'client');
});