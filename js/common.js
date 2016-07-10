$(document).ready(function() {

	
  //скрипт для видео
  $( document ).ready(function() {

    scaleVideoContainer();

    initBannerVideoSize('.video-container .poster img');
    initBannerVideoSize('.video-container .filter');
    initBannerVideoSize('.video-container video');

    $(window).on('resize', function() {
      scaleVideoContainer();
      scaleBannerVideoSize('.video-container .poster img');
      scaleBannerVideoSize('.video-container .filter');
      scaleBannerVideoSize('.video-container video');
    });

  });

  function scaleVideoContainer() {

    var height = $(window).height() + 5;
    var unitHeight = parseInt(height) + 'px';
    $('.homepage-hero-module').css('height',unitHeight);

  }

  function initBannerVideoSize(element){

    $(element).each(function(){
      $(this).data('height', $(this).height());
      $(this).data('width', $(this).width());
    });

    scaleBannerVideoSize(element);

  }

  function scaleBannerVideoSize(element){

    var windowWidth = $(window).width(),
    windowHeight = $(window).height() + 5,
    videoWidth,
    videoHeight;

    console.log(windowHeight);

    $(element).each(function(){
      var videoAspectRatio = $(this).data('height')/$(this).data('width');

      $(this).width(windowWidth);

      if(windowWidth < 1000){
        videoHeight = windowHeight;
        videoWidth = videoHeight / videoAspectRatio;
        $(this).css({'margin-top' : 0, 'margin-left' : -(videoWidth - windowWidth) / 2 + 'px'});

        $(this).width(videoWidth).height(videoHeight);
      }

      $('.homepage-hero-module .video-container video').addClass('fadeIn animated');

    });
  }

  


var nowD = new Date().getTime()/1000;
var evro2020 = new Date(2020,5,15,0,0,0,0).getTime()/1000;
var start2016 = new Date(2016,6,10,0,0,0,0).getTime()/1000;


// timer 
 $('.countdown').final_countdown({
                'start': Math.round(start2016),
                'end': Math.round(evro2020),
                'now': Math.round(nowD),
                selectors: {
                value_seconds: '.clock-seconds .val',
                canvas_seconds: 'canvas-seconds',
                value_minutes: '.clock-minutes .val',
                canvas_minutes: 'canvas-minutes',
                value_hours: '.clock-hours .val',
                canvas_hours: 'canvas-hours',
                value_days: '.clock-days .val',
                canvas_days: 'canvas-days'
                },
                seconds: {
                  borderColor: '#fff',
                  borderWidth: '3'
                },
                minutes: {
                  borderColor: '#fff',
                  borderWidth: '3'
                },
                hours: {
                  borderColor: '#fff',
                  borderWidth: '3'
                },
                days: {
                  borderColor: '#fff',
                  borderWidth: '3'
                }
        }, function() {
                // Finish Callback
        });

	
});// ready end