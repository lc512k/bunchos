/* global define, console */
define(['jquery', 'mustache', 'foundation', 'modernizr', 'reveal'],
  function($, Mustache, Foundation, modernizer, reveal) {
    // 'use strict';
    // console.info('$', $);
    // console.info('Mustache', Mustache);
    // console.info('Foundation', Foundation);
    // console.info('modernizer', modernizer);
    // console.info('reveal', reveal);
    var init, bindEvents;

    bindEvents = function() {
      var $anyUniform, $anyAddButton;
      $anyUniform = $('[data-bunchos]').find('li');
      $anyAddButton = $('[data-bunchos-button="add"]');
      console.log('anyUniform', $anyUniform);

      $anyUniform.on('mouseover', function() {
        $(this).find('[data-bunchos-button="delete"]').show();
      });

      $anyUniform.on('mouseout', function() {
        $(this).find('[data-bunchos-button="delete"]').hide();
      });

      $anyAddButton.on('click', function() {

      });

    };

    init = function() {
      $(document).foundation();
      // loadTemplates();
      bindEvents();
    };
    init();
  }
);
