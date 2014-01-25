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

        var $formTitle = $('#bunchos-form-title');

        if ($form.data('bunchos-trigger').indexOf('donation') > 0) {
          $formTitle.html('New Donation');
        } else {
          $formTitle.html('New Request');
        }
      });

      $formInput = $('#bunchos-form-input');
      $formOutput = $('#bunchos-form-output');
      $anyFormNode = $('[data-bunchos-node]');
      $anyFormElement = $('[data-bunchos-element]');

      $anyFormElement.on('click', function(e) {
        var currentDiv = $(this).parent().attr('id');
        var nextDivId = +currentDiv.substring(currentDiv.length - 1, currentDiv.length) + 1;
        var clone = $($.clone(this));
        clone.hide().appendTo($formOutput).fadeIn(300);
        $('#bunchos-element-' + nextDivId).slideDown();
        $('#' + currentDiv).fadeTo('fast', 0.3);
        //$(this).parent().hide();
      });

      $anyFormNode.on('click', function() {
        var currentDiv = $(this).parent().attr('id');
        var nextDivId = +currentDiv.substring(currentDiv.length - 1, currentDiv.length) + 1;
        $('#bunchos-element-' + nextDivId).slideDown();
        $('#' + currentDiv).fadeTo('fast', 0.3);
      });

      $cancelFormBtn.on('click', function() {
        $anyFormElement.hide();
        $form.hide();
        $formOutput.html('');
      });

      $saveFormBtn.on('click', function() {
        $anyFormElement.hide();
        $form.hide();
        var clone = $($('#bunchos-form-output').html());
        clone.hide().appendTo($requests).fadeIn(300);
        $formOutput.html('');
      })
    };

    init = function() {
      $(document).foundation();
      bindEvents();
    };
    init();
  }
);
