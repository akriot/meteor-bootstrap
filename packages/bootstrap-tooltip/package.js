Package.describe({
  name: 'matb33:bootstrap-tooltip',
  summary: 'Bootstrap: tooltip',
  version: '3.3.4',
  git: 'https://github.com/matb33/meteor-bootstrap.git',
  documentation: 'README.md'
});

Package.onUse(function (api) {
  api.use('matb33:bootstrap-base@3.3.4', 'client');
  api.use(['matb33:bootstrap-transition-js@3.3.4', 'jquery', 'less'], 'client');
  api.addFiles(['tooltip.js', 'tooltip.less'], 'client');
});