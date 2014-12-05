$(document).ready(function(){

    // youtube responsive
    $(".post.text iframe[src*='youtube.com']").wrap("<div class='video-iframe'></div>");

    // fitvid
    $(".video-iframe").fitVids();

    $(".mobile-nav-panel").click(function(){
      $(".nav").toggleClass("active");
    });

    // add syntax highlighting
    $(".entry-content pre:not(.line-pre)").addClass("prettyprint"); // ignore gist

    // search form
    $(".nav-search a").click(function(){
      $(".search-form").toggleClass("active");
      return false;
    });

    $(window).load(function(){

      // photoset width100% when browser size is under 760px
      if ($(window).width() < 760) {

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