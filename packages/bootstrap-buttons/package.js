Package.describe({
  name: 'matb33:bootstrap-buttons',
  summary: 'Bootstrap: buttons',
  version: '3.3.4',
  git: 'https://github.com/matb33/meteor-bootstrap.git',
  documentation: 'README.md'
});

Package.onUse(function (api) {
  api.versionsFrom('1.1.0.2');
  api.use('matb33:bootstrap-base', 'client');
  api.use('less', 'client');
  api.addFiles('buttons.less', 'client');
});