/* global requirejs */

requirejs.config({
  baseUrl: 'lib',
  paths: {
    app: '../app',
    templates: '../templates',
    data: '../data',
    extras: '../extras',
    jquery: 'jquery-2.1.0',
    mustache: 'mustache',
    foundation: 'foundation/foundation',
    text: 'text',
    tv4: 'tv4',
    modernizr: 'modernizr',
    reveal: 'foundation/foundation.reveal'
  },
  shim: {
    'foundation': {
      deps: ['jquery', 'modernizr']
    },
    'modernizr': {
      deps: ['jquery']
    },
    'reveal': {
      deps: ['jquery', 'foundation'],
      exports: 'reveal'
    }
  }
});

requirejs(['app/main', 'extras/google']);
