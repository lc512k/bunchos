/* -----------------------------------
 * parallax.js - controls the parallax
 * -----------------------------------
 */
 
var parallax = {
	stop: false,
	init: function() {
		
		if(
			os.name == 'ios' 	|| 
			os.name == 'wp' 	|| 
			!enb_parallax 		|| 
			!$.support.opacity	||
			jQuery.browser.opera
		) this.stop = true;
		
		
		if(!this.stop)
			$('#slider, #about, #contacts').addClass('prlx');
			
	},
	
	scroll: function() {
		this.scrollNow = s = $(whichScroll).scrollTop();
				
		curr_page(s);
		
	 	if(this.stop) return;
	 	
	 	if(s > 50) $('#just-scroll').fadeOut();

		// The first page (slider + countdown)
		if(s + $('body > header').height() < $('#countdown').next().offset().top) this.slider();
			
		// The second page (About)	
		var $aboutPrev = $('#about').prev();
		$aboutPrev = ($aboutPrev.attr('id') == 'countdown') ? $aboutPrev.prev() : $aboutPrev;
		
		if($aboutPrev.offset().top + $aboutPrev.height()/2 + newY(s, 0.2)  < s) this.about();
	
	},
	
	slider: function() {
		var s = this.scrollNow;
		
		$('#days').css({y: -s/2		});
		$('#hrs').css( {y: -s/2.6	});
		$('#min').css( {y: -s/2.25	});
		$('#sec').css( {y: -s/2.5	});
		
		$('#days').css('opacity', 1-(s/100)/8);
		$('#hrs').css('opacity', 1-(s/100)/10.4);
		$('#min').css('opacity', 1-(s/100)/9);
		$('#sec').css('opacity', 1-(s/100)/10);
		
		$('#slider > .photos > div').css({y: -newY(s, 0.2)});
	},
	
	about: function() {
		var s = $('#about').offset().top - this.scrollNow - 100;			
				
		var margTop = s.toFixed(2);
			margTop = (margTop < 60) ? 60 : margTop;
		
		var margLR = (-s).toFixed(2);
			margLR = (margLR > -55) ? -55 : margLR;
		
		var rot = (15-s/150).toFixed(2);
			rot = (rot > 15) ? 15 : (rot < 0) ? 0 : rot;
				
		$('#about .photos')
			.css({marginTop: margTop+'px'})
		.find('.item.first')
			.css({marginRight: margLR+'px'})
			.find('span')
				.css({rotate: -rot})
				.end()
			.end()
		.find('.item.third')
			.css({marginLeft: margLR+'px'})
			.find('span')
				.css({rotate: rot});
	}
}
