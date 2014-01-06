var windowWidth, windowHeight, whichScroll;
var n = 0; // Curr slide
var wasScroll = false;

$(window).on({
	load: set_color,
	resize: resizer
});

os.init();

if($.support.opacity) {
	$(function(){ init() });
	
	// Pre-loader
	window.addEventListener('DOMContentLoaded', function() {
	
	    $('#preloader').nextAll().hide();
	    
	    $('body').queryLoader2({
	    	text: 'Please wait', 
	    	onComplete: function() {
		    	// Init anumation of slider
		    	setInterval(slide, animInterval);
		    }
	    });
	});	
} else {
	// IE8 fix
	$(function(){ $('#preloader').hide() })
	$(window).on({
		load: function() {
			init();	
			set_color();
			
			// Init anumation of slider
			setInterval(slide, animInterval);
		}
	});
}

function init() {
	// Fix scroll in different browsers
	whichScroll	= jQuery.browser.mozilla || jQuery.browser.opera ? 'html' : 'body';
	
	$(window)
		.resize()
		.scroll(function() { parallax.scroll() });
	
	var bodySize = ($(window).width() < 1024) ? 'small' : 'big';
	$('body').data('size', bodySize);
	
	// Preload images in slider
	$('<div/>').attr('id', 'prel-imd').appendTo('body').hide();
	$.each(photos, function(){
		$('<img/>')
			.attr({src: 'img/slider/'+ this})
			.hide()
			.appendTo('#prel-imd');
	});

	// Fix problems
	bagfix();
	
	// Go to the current page (if turned on)
	if(location.hash) {
		var id = (location.hash).substr(4);
		
		$(whichScroll).scrollTop($('#'+id).offset().top-100);
		
		// Задаем текущую страницу после загрузки сайта
		curr_page($('#'+id).offset().top-100);
	}
		
	// Set the first image in slider
	$('<img/>').appendTo('#slider > .photos > div')
		.attr({src: 'img/slider/'+ photos[0]})
		.one({
			load: function() { sliderPhotoAlign() }
		}).each(function() {
			if(this.complete) $(this).trigger("load");
		});
		
	// Init countdown
	countdown.init();
	
	// Scroll to top
	$('body > header > .logo').on('click', function() {
		$(whichScroll).stop(true, true).animate({scrollTop: 0}, {duration: 600, easing: 'easeInOutExpo'});
		if($.support.opacity) return false;
	});	
	
	/* Twitter */
	if(twitter.enb) {
		$.ajax({
			type: 'GET',
			dataType: 'json',
			url: 'twitter/index.php',
			data: { screen_name: twitter.name, include_rts: 1, count: twitter.count },
			success: function(data, textStatus, XMLHttpRequest) {
				var tmp = '';
					
				$.each(data, function(i, tweet){
					
					var created_at = str_tweet_date(tweet.created_at);
					
					/*  [tmp]
					 *
					 *	<li class="tweet">
					 *		<span class="tweet_date">
					 *			<a href="{LINK_TO_TWEET}" target="_blank">{CREATED_AT}</a>
					 *		</span>
					 *		<span class="tweet_text">{TWEET_TEXT}</span>
					 *	</li>
					 *
					 */
						
					tmp += '<li class="tweet"><div>'+ tweet.text +'</div></li>';
				});
				
				$('#contacts .social > ul.twitter').append(tmp)
					.find('li').tweetLinkify();
					
				$('#contacts .social > ul.twitter > li:first').addClass('curr');
				
				setInterval(function(){
					var $ul = $('#contacts .social > ul.twitter'); 
					var $li = $ul.find('li');
					var $curr = $ul.find('.curr');
					
					if($curr.next().index() == -1) {
						$li.animate({marginTop: 0}, function(){
							$li.removeClass('curr')
								.first().addClass('curr');
						});	
					} else {
						$curr.animate({marginTop: -60, opacity: 0}, function() {
							$(this)
								.css('opacity', 1)
								.removeClass('curr')
							.next().addClass('curr');
						});
					}	
				}, 5000);
			},
			error:function(req, status, error) { console.log('error: '+status) }
		});
	} else $('#contacts .social .twitter').hide();

	// Sending forms (subscribe & feedback)
	$('#subscribe, #feedback').on('submit', function() {
		var $form = $(this);
		var email = $form.find('input[name=email]').val();
		
		var callError = function () {
			$form.find('.response').fadeOut(200, function() {
				$form.find('.error').fadeIn(200);
			});
			
			return false;
		}
		
		if(!isEmail(email)) return callError();
		
		if($form.attr('id') == 'feedback') {
			var $input = $form.find('input[name=uname]');
			var $text = $form.find('textarea[name=mess]');
			var er = false;
			
			$form.find('input, textarea').removeClass('er');
			
			if(($input.val()).length < 3) { $input.addClass('er'); er = true }
			if(($text.val()).length < 10) { $text.addClass('er');  er = true }
			
			if(er) return callError();
		}
		
		$.ajax({
			type: 'POST',
			url: $form.attr('action'),
			data: $form.serialize(),
			success: function(response) {
				if(response) {
					$form.find('.error').fadeOut(200, function() {
						$form.find('.response').fadeIn(200);
					});
				}
			}
		});
		
		return false;
	});
	
	$('input[name=email]').on('keyup keydown change', function() {
		$('input[name=email]').val($(this).val());
	});
	
	
	// Init "Just scroll"
	if($(whichScroll).scrollTop() < 50 && enb_parallax && os.name != 'ios' && $.support.opacity) {
		setTimeout(function(){
			
			if(wasScroll) return;
			wasScroll = true;
			
			$('#just-scroll').addClass('blink');
			
		}, 4000);
	}
	
	// Opens "Write us"
	$('.write-us-open').on('click', function() {
		if($.support.opacity) {
		
			$(this).parent().animate({marginTop: -107, opacity: 0}, function(){ $(this).hide() });
			$('footer').css({position: 'fixed', bottom: 0, width: '100%', y: 0});
		
		} else $(this).parent().hide();
				
		$('#contacts .write-us').show();
		var footerY = parseInt($('#contacts').css('y'));
		var scrl = $('#contacts').offset().top + windowHeight - parseInt($('#contacts').css('y'));
		
		$('#contacts .write-us').animate({opacity: 1});
		$(whichScroll).animate({scrollTop: scrl}, function() {
			$('footer').removeAttr('style').css({y: footerY});
		});
	});
}
function resizer() {
	
	windowWidth = $(window).width();
	windowHeight = $(window).height();
	
	parallax.init();
	
	sliderAlign();	
	sliderPhotoAlign();
}

function sliderAlign() {
	var $slider = $('#slider');
	
	var sliderHeight = $(window).height()-$('body > header').height();
	
	$slider.height(sliderHeight)
		.find('.pattern').height($slider.height());
	
	if(windowWidth > 640) 
		$('.page').css('min-height', sliderHeight/2) 
	else $('.page').css('min-height', 0)
	$('#slider > .text').css({marginTop: sliderHeight*0.15});	
	
	var bodySize = ($(window).width() < 1024) ? 'small' : 'big';
	var mt = (bodySize == 'small') ? 200 : 160;
	
	if($('body').data('size') != bodySize) {
		countdown.init();
		$('body').data('size', bodySize)
	}
	
	$('#countdown').css({marginTop: -sliderHeight*0.2-mt});
}

function curr_page(s) {
	var $inview = $('body > section.inview');
	var c = $inview.offset().top - s - 110;
	
	if( c < 0 && c > -windowHeight+100) return;  
	
	wasScroll = true;
	
	$('body > section').each(function(){
		var c = $(this).offset().top - s - 110;
		
		if( c < 0 && c > -windowHeight+100) {
			$('body > section').removeClass('inview');
			$(this).addClass('inview');
			
			if(save_page) location.hash = 'go-'+$(this).attr('id');
			
			return false;
		} 		
	});
}

function slide() {
	if(photos.length == 1 || !$('#slider').hasClass('inview')) return;
		
	var $newSlide = $('<div/>').appendTo('#slider > .photos');
		$('<img/>').appendTo($newSlide);
	
	n = (n+1 > photos.length-1) ? 0 : n+1;
	
	var backImage = 'img/slider/'+ photos[n];
	
	// Params of animation
	var ml = windowWidth;
	var op = 1;
	var animCss = {marginLeft: 0};
	
	if(animType == 'fade') {
		ml = 0; op = 0;
		animCss = {opacity: 1}
	}
	
	if($.support.opacity)
		$newSlide.find('img')
			.attr({src: backImage})
			.one({
				load: function() {
					sliderPhotoAlign();
					
					$newSlide.css({
						position: 'absolute',
						marginTop: -$newSlide.prev().height(),
						marginLeft: ml,
						height: $newSlide.prev().height(),
						opacity: op,
						y: $newSlide.prev().css('y'),
						zIndex: 1
					}).animate(animCss, {
						duration: 1000, 
						easing: 'easeInOutExpo', 
						complete: function(){
							$newSlide
								.removeAttr('style')
								.css({y: $newSlide.prev().css('y')})
							.prev().remove();
						}
					});		
				}
			}).each(function() {
				if(this.complete) $(this).trigger("load");
			});
	else {
		// IE 8
		$newSlide.find('img').attr({src: backImage});
		sliderPhotoAlign();
		$newSlide.css({
			position: 'absolute',
			marginTop: -$newSlide.prev().height(),
			marginLeft: ml,
			height: $newSlide.prev().height(),
			opacity: op,
			zIndex: 1
		}).animate(animCss, {
			duration: 1000, 
			easing: 'easeInOutExpo', 
			complete: function(){
				$newSlide
					.removeAttr('style')
				.prev().remove();
			}
		});	
	}
}

// Align current photo in slider
function sliderPhotoAlign() {
	if(window.si) clearInterval(window.si);
	
	var $img = $('#slider > .photos > div > img:last')
		.removeAttr('style')
		.css({height: '100%'});
	
	if($img.width() === null) return;
	if($img.width() == 0) return window.si = setInterval(sliderPhotoAlign, 10);
	
	var st = ($img.width() < windowWidth) ? {width: '100%'} : {height: '100%'};
		
	$('#slider > .photos > div > img:last').removeAttr('style').css(st);
}