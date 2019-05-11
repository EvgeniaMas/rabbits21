// $('.multi-item-carousel').carousel({
//   interval: false
// });
$('#carousel_slider').carousel({
         interval : false
});
$('#carousel_cases_mobile').carousel({
         interval : false
});


$('.multi-item-carousel .item').each(function(){
  var next = $(this).next();


  if (!next.length) {
    next = $(this).siblings(':first');   

  }
  next.children(':first-child').clone().appendTo($(this));
  // next.children(':first-child').css('border', '20px solid red');
  
  if (next.next().length>0) {
    next.next().children(':first-child').clone().appendTo($(this));
    
  } else {
  	$(this).siblings(':first').children(':first-child').clone().appendTo($(this));
  //  
  }
      $(this).children(':nth-child(1)').find('img').css('margin-right', '50%');
      $(this).children(':nth-child(3)').find('img').css('margin-left', '80%');
      $(this).children(':nth-child(2)').find('img').css('margin', 'auto');
      
      $(this).children(':nth-child(1)').find('.desktop_cover_title').css('left', '-50%');
      $(this).children(':nth-child(3)').find('.desktop_cover_title').css('left', '60%');
      $(this).children(':nth-child(2)').find('.desktop_cover_title').css('left', '0%');


});

    var first_cover = $('.multi-item-carousel .item').children(':nth-child(1)').find('img');
    var center_cover = $('.multi-item-carousel .item').children(':nth-child(2)').find('img');
    var third_cover = $('.multi-item-carousel .item').children(':nth-child(3)').find('img');
  
  
// $(window).resize(function() {
  if(document.documentElement.clientWidth > 768) {
   var margin_wrapper = $('.navbar-fixed-top').height(); 
   var margin_footer = $('.footer').height(); 
   
    $('.wrapper').css('margin-top', margin_wrapper);
    $('#main_page_content').css('margin-top', margin_wrapper);
    $('#slider_wrapper').css('margin-top', margin_wrapper);
    
   }
   else{ 
   var margin_wrapper = $('#navbar_main').height();
   var margin_footer = $('.footer').height();       
     $('.mobile_wrapper').css('padding-top', margin_wrapper);
     $('.mobile_wrapper').css('padding-bottom', -margin_footer);
   }
// });


  
  
  


    
    // $('.wrapper').css('margin-bottom', -margin_footer);






function relocate(){
   $('#send_order').css('border-color', '#26f1bc');
   window.location.href='contacts.html';
}

// $('.projects_slides').click(function(e) {
//   var clickId = $(e.target).attr('id');
//   $("#project_cover").hide( "explode", {pieces: 150}, 3000 );
//  full_item_case(clickId); 

// });


   
         $(document).ready(function() {


           $('.projects_slides').click(function(e) {
             
  var clickId = $(e.target).attr('id');
  // $("#project_cover").hide( "explode", {pieces: 150}, 1500 );

   $("#project_cover").hide(3000);
    full_item_case(clickId); 

});

            // $(".target").click(function(){
            //    $(".target").hide( "explode", {pieces: 150}, 3000 );
            //    full_item_case(clickId);

            // });

            // $(".target").click(function(){
            //    $(".target").show(2500);
            // });
        
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
// $('#project_cover').addClass('disappear_covers');


 

$('#carousel_slider').css('display', 'block');

}
function short_item_case(){

 $('#carousel_slider').css('display', 'block');
 $('#project_cover').removeClass('disappear_covers');
}

// change header color on scroll

var scrolled;
window.onscroll = function() {
    scrolled = window.pageYOffset || document.documentElement.scrollTop;
    if(scrolled > 30){
        $(".navbar-fixed-top").css({"background": "#fff "})
    }
    if(1 > scrolled){
        $(".navbar-fixed-top").css({"background": "transparent"})         
    }

}