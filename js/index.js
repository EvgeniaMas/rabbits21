$('.multi-item-carousel').carousel({
  interval: false
});
$('#carousel_slider').carousel({
         interval : false
});
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
  //  
  }

      $(this).children(':nth-child(1)').find('img').css('margin-right', '113px');
      $(this).children(':nth-child(3)').find('img').css('margin-left', '113px');
      $(this).children(':nth-child(2)').find('img').css('margin', 'auto');
});

    var first_cover = $('.multi-item-carousel .item').children(':nth-child(1)').find('img');
    var center_cover = $('.multi-item-carousel .item').children(':nth-child(2)').find('img');
    var third_cover = $('.multi-item-carousel .item').children(':nth-child(3)').find('img');

// $(window).resize(function() {
  if(document.documentElement.clientWidth > 768) {

    var margin_wrapper = $('#header').height();  
   
    $('.wrapper').css('margin-top', margin_wrapper);
    $('#main_page_content').css('margin-top', margin_wrapper);
    $('#slider_wrapper').css('margin-top', margin_wrapper);
    
   }
// });


  
  
  


     var margin_footer = $('.footer').height();
    $('.wrapper').css('margin-bottom', -margin_footer);






function relocate(){
   $('#send_order').css('border-color', '#26f1bc');
   window.location.href='contacts.html';
}

$('.projects_slides').click(function(e) {
  var clickId = $(e.target).attr('id');
 full_item_case(clickId);  
});

function full_item_case(clickId){
if(clickId=='pure'){
$('#pure_case').addClass('active');
}
if(clickId=='river'){
$('#river_case').addClass('active');  
}
if(clickId=='fluger'){
  $('#fluger_case').addClass('active');
}
if(clickId=='green'){
  $('#green_case').addClass('active');
}
// else {
// $('#green_case').addClass('active');
// }
$('#project_cover').addClass('disappear_covers');
$('#carousel_slider').css('opacity', '1');
}
function short_item_case(){

 $('#carousel_slider').css('display', 'block');
 $('#project_cover').removeClass('disappear_covers');
}