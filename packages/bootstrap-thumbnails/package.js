Package.describe({
  name: 'matb33:bootstrap-thumbnails',
  summary: 'Bootstrap 3.3.4: thumbnails',
  version: '10.0.0',
  git: 'https://github.com/matb33/meteor-bootstrap.git',
  documentation: 'README.md'
});

Package.onUse(function (api) {
  api.versionsFrom('1.2.0.2');
  api.use('matb33:bootstrap-base@3.3.4', 'client');
  api.use('less', 'client');
  api.addFiles('thumbnails.less', 'client');
});