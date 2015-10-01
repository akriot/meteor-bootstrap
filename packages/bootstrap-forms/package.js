// NOTE: this package required moving several mixins to mixins.less, as
// they are used in other bootstrap packages

Package.describe({
  name: 'matb33:bootstrap-forms',
  summary: 'Bootstrap: forms',
  version: '3.3.4',
  git: 'https://github.com/matb33/meteor-bootstrap.git',
  documentation: 'README.md'
});

Package.onUse(function (api) {
  api.use('matb33:bootstrap-base@3.3.4', 'client');
  api.use('less', 'client');
  api.addFiles('mixins.less', 'client', {isImport: true});
  api.addFiles('forms.less', 'client');
});