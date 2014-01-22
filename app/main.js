/* global define, console */
define(['jquery', 'mustache', 'foundation', 'modernizr', 'reveal', 'text!templates/uniform2.html'],
  function($, Mustache, Foundation, modernizer, reveal, uniformTemplate) {
    // 'use strict';
    // console.info('$', $);
    // console.info('Mustache', Mustache);
    // console.info('Foundation', Foundation);
    // console.info('modernizer', modernizer);
    // console.info('reveal', reveal);
    var init, bindEvents;

    bindEvents = function() {
      var $anyUniform, $anyAddBtn, $donatingAndRequesting;
      $donatingAndRequesting = $('[data-bunchos]');
      $anyUniform = $donatingAndRequesting.find('li');
      $donating = $('[data-bunchos="donating"]');
      $requesting = $('[data-bunchos="requesting"]');
      $anyUniformItem = $('[data-bunchos]').find('a');
      $anyAddBtn = $('[data-bunchos-button="add"]');
      $form = $('[data-bunchos-form]');
      $cancelFormBtn = $form.find('[data-bunchos-button="cancel"]');
      $saveFormBtn = $form.find('[data-bunchos-button="save"]');

      console.log('anyAddBtn', $anyAddBtn);

      // $anyUniform.on('mouseover', function(e) {
      //   console.log('li fade in', this)
      //   $(this).find('[data-bunchos-button="delete"]').show();
      // });

      $('body').on('mouseover', 'li', function(e) {
        console.log('li fade in', this)
        $(this).find('[data-bunchos-button="delete"]').show();
      });

      $('body').on('mouseout', 'li', function(e) {
        console.info('li fade out', this)
        $(this).find('[data-bunchos-button="delete"]').hide();
      });

      $anyAddBtn.on('click', function(e) {
        //$form.slideDown();
        $form.show();
        //console.log($('#form'));
        //$(window).scrollTop($('#form').scrollTop());

        $('html').animate({
          scrollTop: $('#form').offset().top
        }, 600);
      });

      $cancelFormBtn.on('click', function() {
        $form.hide();
      })
      $saveFormBtn.on('click', function() {
        $form.hide();

        //console.log("$donating", uniformTemplate, Mustache.render(uniformTemplate))
        //$donating.append(Mustache.render(uniformTemplate));

        $(Mustache.render(uniformTemplate)).appendTo($donating).fadeIn(500);
      })

      // $anyUniformItem.on('mouseover', function(e) {
      //   return false;
      // });
      // $anyUniformItem.on('mouseout', function(e) {
      //   return false;
      // });

    };

    init = function() {
      $(document).foundation();
      // loadTemplates();
      bindEvents();
    };
    init();
  }
);
