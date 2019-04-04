// Animate Smooth Scroll //
$('#features_id').on('click', function() {
  const images = $('#features').position().top;
  $('html, body').animate({scrollTop: images},900);
});

$('#staff_id').on('click', function() {
  const images = $('#staff').position().top;
  $('html, body').animate({scrollTop: images},900);
});


/*Scroll to top when arrow up clicked*/
$(window).scroll(function() {
    var height = $(window).scrollTop();
    var scrollPercent = Math.round(100 * $(window).scrollTop() / ($(document).height() - $(window).height()));
    if (scrollPercent > 10) {
        if (scrollPercent < 90) {
          $('#back_to_top').fadeIn();
        } else {
          $('#back_to_top').fadeOut();
        }
    } else {
      $('#back_to_top').fadeOut();
    }
});
$(document).ready(function() {
    $("#back_to_top").click(function(event) {
        event.preventDefault();
        $("html, body").animate({scrollTop: 0}, 900);
        return false;
    });

});


/*Scroll to bottom when arrow down clicked*/
$(window).scroll(function() {
    var height = $(window).scrollTop();
    var scrollPercent = Math.round(100 * $(window).scrollTop() / ($(document).height() - $(window).height()));
    if (scrollPercent > 10) {
        if (scrollPercent < 90) {
          $('#down_to_bottom').fadeIn();
        } else {
          $('#down_to_bottom').fadeOut();
        }
    } else {
        $('#down_to_bottom').fadeOut();
    }
});
$(document).ready(function() {
    $("#down_to_bottom").click(function(event) {
        event.preventDefault();
        $("html, body").animate({scrollTop:$(document).height()}, 900);
        return false;
    });

});


$(function(){
    $('#Menu').find('> li').hover(function(){
        $(this).find('ul')
        .removeClass('noJS')
        .stop(true, true).slideToggle('fast');
    });
});
