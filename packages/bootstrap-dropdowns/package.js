Package.describe({
  name: 'matb33:bootstrap-dropdowns',
  summary: 'Bootstrap: dropdowns',
  version: '3.3.4',
  git: 'https://github.com/matb33/meteor-bootstrap.git',
  documentation: 'README.md'
});

Package.onUse(function (api) {
  api.versionsFrom('1.1.0.2');
  api.use('matb33:bootstrap-base', 'client');
  api.use(['jquery', 'less'], 'client');
  api.addFiles(['dropdown.js', 'dropdowns.less'], 'client');
});