
$(document).ready(function(){
        
    $("#colorful").colorfulTab();    
    
    $("#colorful-elliptic").colorfulTab({
        theme: "elliptic"
    }); 
   
   $("#colorful-flatline").colorfulTab({
        theme: "flatline"
    });    
    
    

});

$('.counter').counterUp({
    delay: 10,
    time: 2500
});



// $('.news_silk').slick({
//     slidesToShow: 3,
//     slidesToScroll: 1,
//     speed:500,
//     autoplay: true,
//     autoplaySpeed: 1000,
//     arrows:false,

//   });
//   news_silk responsive

$('.news_silk').slick({
    slidesToShow: 4,
    slidesToScroll: 1,
    speed:500,
    autoplay: true,
    autoplaySpeed: 2000,
    arrows:false,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2
        }
      },
      {
        breakpoint: 575.98,
        settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            speed:500,
            autoplay: true,
            autoplaySpeed: 2000,
            arrows:false,
        }
      }
      // You can unslick at a given breakpoint now by adding:
      // settings: "unslick"
      // instead of a settings object
    ]
  });
//   news_silk responsive




//   back_to_top///////////////////

(function($) { "use strict";

		// back to top
	$(document).ready(function(){"use strict";
	
		//Scroll back to top
		
		var progressPath = document.querySelector('.progress-wrap path');
		var pathLength = progressPath.getTotalLength();
		progressPath.style.transition = progressPath.style.WebkitTransition = 'none';
		progressPath.style.strokeDasharray = pathLength + ' ' + pathLength;
		progressPath.style.strokeDashoffset = pathLength;
		progressPath.getBoundingClientRect();
		progressPath.style.transition = progressPath.style.WebkitTransition = 'stroke-dashoffset 10ms linear';		
		var updateProgress = function () {
			var scroll = $(window).scrollTop();
			var height = $(document).height() - $(window).height();
			var progress = pathLength - (scroll * pathLength / height);
			progressPath.style.strokeDashoffset = progress;
		}
		updateProgress();
		$(window).scroll(updateProgress);	
		var offset = 50;
		var duration = 550;
		jQuery(window).on('scroll', function() {
			if (jQuery(this).scrollTop() > offset) {
				jQuery('.progress-wrap').addClass('active-progress');
			} else {
				jQuery('.progress-wrap').removeClass('active-progress');
			}
		});				
		jQuery('.progress-wrap').on('click', function(event) {
			event.preventDefault();
			jQuery('html, body').animate({scrollTop: 0}, duration);
			return false;
		})
		
		
	});
	
})(jQuery); 

//   back_to_top///////////////////


// mixet up ////////////////////

var mixer = mixitup('.mixitup');