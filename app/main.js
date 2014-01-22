/* global define, console */
define([
    'jquery',
    'mustache',
    'foundation',
    'modernizr',
    'reveal'
  ],
  function($, Mustache, Foundation, modernizer, reveal) {
    // 'use strict';
    // console.info('$', $);
    // console.info('Mustache', Mustache);
    // console.info('Foundation', Foundation);
    // console.info('modernizer', modernizer);
    // console.info('reveal', reveal);

    var init = function() {
      $(document).foundation();
      // loadTemplates();
      // bindEvents();
    };
    init();
  });
