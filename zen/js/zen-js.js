$(document).ready(function(){
    $(".video-iframe").fitVids();

    $(".mobile-nav-panel").click(function(){
      $(".nav").toggleClass("active");
    });

    $(".panel-social-button .btn").click(function(){
      $(".social-buttons").slideToggle();
    });

    // シンタックスハイライト用のclassつける
    $(".entry-content pre:not(.line-pre)").addClass("prettyprint"); // gistは除外

    $(window).load(function(){

      // スマホでphotosetの中をwidth100%にする
      if ($(window).width() < 767) {

        $('iframe.photoset').contents().find('.photoset_row').css({
          width : 'auto',
          height : 'auto',
          margin : '0'
        });

        $('iframe.photoset').contents().find('.photoset_photo').css({
          display : 'block',
          margin : '0 0 0 0'
        });

        $('iframe.photoset').contents().find('.photoset_row img').css({
          width : '100%',
          margin : '0 0 0 0'
        });

        $('iframe.photoset').css('height', $('iframe.photoset').contents().find('body').height() + 'px');

      }

    });


});