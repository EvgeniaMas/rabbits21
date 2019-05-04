// Instantiate the Bootstrap carousel
$('.multi-item-carousel').carousel({
  interval: false
});

// for every slide in carousel, copy the next slide's item in the slide.
// Do the same for the next, next item.
$('.multi-item-carousel .item').each(function(){
  var next = $(this).next();
  if (!next.length) {
    next = $(this).siblings(':first');
  }
  next.children(':first-child').clone().appendTo($(this));
  
  if (next.next().length>0) {
    next.next().children(':first-child').clone().appendTo($(this));
  } else {
  	$(this).siblings(':first').children(':first-child').clone().appendTo($(this));
  }
});


$(window).resize(function() {
  if(document.documentElement.clientWidth > 768) {
    var margin_wrapper = $('#header').height(); 
    $('.wrapper').css('margin-top', margin_wrapper);
    $('#main_page_content').css('margin-top', margin_wrapper);
    
  }
});


  


     var margin_footer = $('.footer').height();
    $('.wrapper').css('margin-bottom', -margin_footer);




   $('#carousel_slider').carousel({
         interval : false
    });