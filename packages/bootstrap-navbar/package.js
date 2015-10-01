Package.describe({
  name: 'matb33:bootstrap-navbar',
  summary: 'Bootstrap 3.3.4: navbar',
  version: '10.0.0',
  git: 'https://github.com/matb33/meteor-bootstrap.git',
  documentation: 'README.md'
});

Package.onUse(function (api) {
  api.versionsFrom('1.2.0.2');
  api.use('matb33:bootstrap-base', 'client');
  api.use(['matb33:bootstrap-navs'], 'client', { weak: true });	// due to specificity issues, navs has to be loaded before this package
  api.use(['matb33:bootstrap-forms', 'less'], 'client');
  api.addFiles('navbar.less', 'client');
});