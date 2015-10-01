Package.describe({
  name: 'matb33:bootstrap-grid',
  summary: 'Bootstrap: grid',
  version: '3.3.4',
  git: 'https://github.com/matb33/meteor-bootstrap.git',
  documentation: 'README.md'
});

Package.onUse(function (api) {
  api.use('matb33:bootstrap-base@3.3.4', 'client');
  api.use('less', 'client');
  api.addFiles('grid.less', 'client');
});