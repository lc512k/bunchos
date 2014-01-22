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
      var $anyUniform, $anyAddBtn, $donationsAndrequests;
      $donationsAndrequests = $('[data-bunchos]');
      $anyUniform = $donationsAndrequests.find('li');
      $donations = $('#donation-list');
      $requests = $('#request-list');
      $anyUniformItem = $('[data-bunchos-list]').find('a');
      $anyAddBtn = $('[data-bunchos-button="add"]');
      $form = $('#form');
      $cancelFormBtn = $form.find('#cancel-form');
      $saveFormBtn = $form.find('#save-form');

      console.log('anyAddBtn', $anyAddBtn);

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
        var currentTargetId = e.currentTarget.id;
        console.log(e.currentTarget.id);
        //$(window).scrollTop($('#form').scrollTop());

        $('html').animate({
          scrollTop: $('#form').offset().top
        }, 600);

        $form.data('bunchos-trigger', currentTargetId)

      });


      $cancelFormBtn.on('click', function() {
        $form.hide();
      });

      $saveFormBtn.on('click', function() {
        $form.hide();
        var trigger = $form.data('bunchosTrigger');
        //console.log("$donations", uniformTemplate, Mustache.render(uniformTemplate))
        //$donations.append(Mustache.render(uniformTemplate));

        if (trigger === "add-donation") {
          $(Mustache.render(uniformTemplate)).appendTo($donations).fadeIn(300);
        } else if (trigger === "add-request") {

          $(Mustache.render(uniformTemplate)).appendTo($requests).fadeIn(300);
        }
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
