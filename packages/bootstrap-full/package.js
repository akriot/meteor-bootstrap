Package.describe({
  name: 'matb33:bootstrap-full',
  summary: 'Bootstrap: use all styles and js',
  version: '3.3.4',
  git: 'https://github.com/matb33/meteor-bootstrap.git',
  documentation: 'README.md'
});

Package.onUse(function (api) {
  api.versionsFrom('1.2.0.2');
  api.use('matb33:bootstrap-base@3.3.4', 'client');
  api.use([
    'matb33:bootstrap-affix-js@3.3.4',
    'matb33:bootstrap-alert-js@3.3.4',
    'matb33:bootstrap-alerts@3.3.4',
    'matb33:bootstrap-badges@3.3.4',
    'matb33:bootstrap-breadcrumbs@3.3.4',
    'matb33:bootstrap-button-groups@3.3.4',
    'matb33:bootstrap-button-js@3.3.4',
    'matb33:bootstrap-buttons@3.3.4',
    'matb33:bootstrap-carousel@3.3.4',
    'matb33:bootstrap-close-icon@3.3.4',
    'matb33:bootstrap-code@3.3.4',
    'matb33:bootstrap-collapse-js@3.3.4',
    'matb33:bootstrap-component-animations@3.3.4',
    'matb33:bootstrap-dropdowns@3.3.4',
    'matb33:bootstrap-forms@3.3.4',
    'matb33:bootstrap-glyphicons@3.3.4',
    'matb33:bootstrap-grid@3.3.4',
    'matb33:bootstrap-input-groups@3.3.4',
    'matb33:bootstrap-jumbotron@3.3.4',
    'matb33:bootstrap-labels@3.3.4',
    'matb33:bootstrap-list-group@3.3.4',
    'matb33:bootstrap-media-items@3.3.4',
    'matb33:bootstrap-modal-js@3.3.4',
    'matb33:bootstrap-modals@3.3.4',
    'matb33:bootstrap-navbar@3.3.4',
    'matb33:bootstrap-navs@3.3.4',
    'matb33:bootstrap-pager@3.3.4',
    'matb33:bootstrap-pagination@3.3.4',
    'matb33:bootstrap-panels@3.3.4',
    'matb33:bootstrap-popovers@3.3.4',
    'matb33:bootstrap-print@3.3.4',
    'matb33:bootstrap-progress-bars@3.3.4',
    'matb33:bootstrap-responsive-embed@3.3.4',
    'matb33:bootstrap-scrollspy-js@3.3.4',
    'matb33:bootstrap-tab-js@3.3.4',
    'matb33:bootstrap-tables@3.3.4',
    'matb33:bootstrap-theme@3.3.4',
    'matb33:bootstrap-thumbnails@3.3.4',
    'matb33:bootstrap-tooltip@3.3.4',
    'matb33:bootstrap-transition-js@3.3.4',
    'matb33:bootstrap-type@3.3.4',
    'matb33:bootstrap-wells@3.3.4'
  ], 'client');
});