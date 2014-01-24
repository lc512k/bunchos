/* global define, console */
define(['jquery', 'mustache', 'foundation', 'modernizr', 'reveal', 'text!templates/uniform2.html' /*, 'text!templates/form-row.html'*/ ],
  function($, Mustache, Foundation, modernizer, reveal, uniformTemplate) {

    var init, bindEvents, bindFrmEvents;

    bindEvents = function() {
      var $anyUniform, $anyAddBtn, $donationsAndrequests;
      $donationsAndrequests = $('[data-bunchos]');
      $anyUniform = $donationsAndrequests.find('li');
      $donations = $('#bunchos-donation-list');
      $requests = $('#bunchos-request-list');
      $anyUniformItem = $('[data-bunchos-list]').find('a');
      $anyAddBtn = $('[data-bunchos-button="add"]');
      $form = $('#bunchos-form');
      $cancelFormBtn = $form.find('#bunchos-cancel-form');
      $saveFormBtn = $form.find('#bunchos-save-form');

      console.log('anyAddBtn', $anyAddBtn);

      $('body').on('mouseover', 'li', function(e) {
        $(this).find('[data-bunchos-button="delete"]').show();
      });

      $('body').on('mouseout', 'li', function(e) {
        $(this).find('[data-bunchos-button="delete"]').hide();
      });

      $anyAddBtn.on('click', function(e) {
        //$form.slideDown();
        $form.show();
        var currentTargetId = e.currentTarget.id;
        //$(window).scrollTop($('#bunchos-form').scrollTop());

        $('html').animate({
          scrollTop: $('#bunchos-form').offset().top
        }, 600);

        $form.data('bunchos-trigger', currentTargetId);

        bindFormEvents();
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
        if (typeof(Storage) !== "undefined") {
          localStorage.uniform = "hello"
        }
      })
    };

    bindFormEvents = function() {
      console.log('trigger?', $form.data('bunchos-trigger'));
      var $formTitle = $('#bunchos-form-title');

      if ($form.data('bunchos-trigger').indexOf('donation')) {
        $formTitle.html('New Donation');
      } else {
        $formTitle.html('New Request');
      }

      $formInput = $('#bunchos-form-input');
      $formOutput = $('#bunchos-form-output');
      $anyFormNode = $('[data-bunchos-node]');
      $anyFormElement = $('[data-bunchos-element]');

      $anyFormElement.on('click', function() {
        console.log('this', this);
        $formOutput.append($.clone(this));
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
