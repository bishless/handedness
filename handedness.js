/* global jQuery, console */

(function ( $ ) {
	
	$.fn.handedness = function (options) {
		
		// starting w/ right-handed as default because lazy
		var defHand = {
			hand: 'righthanded'
		};
	
		var obj = $.extend(defHand, options);
		
		return this.each(function () {
			
			var selButton = $(this);
			
			selButton.click(function () {
				console.log(this.class() + 'button has been clicked');
				// righthanders
				if (this.class === 'right') { 
					$('.click-primary').text().replace('right', 'left');
					$('.click-secondary').text().replace('left', 'right');
				// lefthanders
				} else {
					$('.click-primary').text().replace('left', 'right');
					$('.click-secondary').text().replace('right', 'left');
				}
			});
		});
		
	};
	
})( jQuery );