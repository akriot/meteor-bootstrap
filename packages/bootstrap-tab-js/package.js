Package.describe({
  name: 'matb33:bootstrap-tab-js',
  summary: 'Bootstrap 3.3.4: tab js',
  version: '10.0.0',
  git: 'https://github.com/matb33/meteor-bootstrap.git',
  documentation: 'README.md'
});

Package.onUse(function (api) {
  api.versionsFrom('1.2.0.2');
  api.use('matb33:bootstrap-base@10.0.0', 'client');
  api.use(['matb33:bootstrap-navs@10.0.0', 'matb33:bootstrap-transition-js@10.0.0', 'jquery'], 'client');
  api.addFiles('tab.js', 'client');
});