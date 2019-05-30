// static carousels
$('.multi-item-carousel').carousel({
  interval: false
});
$('#carousel_slider').carousel({
         interval : false
});
$('#carousel_cases_mobile').carousel({
  interval : false
});
$('#carousel_swipe').carousel({
  interval : false
});


var mql = window.matchMedia("(orientation: portrait)");
 if(mql.matches && document.documentElement.clientWidth <768) {  
    // Портретная ориентация
} else {  
    // Горизонтальная ориентация
}

// Прослушка события изменения ориентации
mql.addListener(function(m) {
    if(m.matches) {
        // Изменено на портретный режим
    }
    else {
        // Изменено на горизонтальный режим
    }
});





// close big case
$(".back_to_covers").click(function(){
   $("#carousel_slider").hide(2000);
   var items = $("#carousel_slider > div.carousel-inner").find(".item");
   
    $(items).each(function(){
           $(this).removeClass("active");           
    });

    $("html, body").animate({scrollTop:0}, 300);
    if(document.documentElement.clientWidth > 767) {
     $("#project_page").css("overflow", "hidden");
     $("#mobiles_footer").css("display", "none");     
     $(".desktop_cover_wrapper").fadeIn(2000);    
         
     }
     else{
       $("#mobile_cases").show(2000); 
       $("#project_page").css("overflow", "visible");
        
     }   
});
// cloning project covers 
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
  
   $(document).ready(function() {
     var mql = window.matchMedia("(orientation: portrait)");
   var margin_wrapper = $('header').height(); 

   // alert(margin_header);
   var margin_footer = $('.footer').height(); 
    // alert(margin_wrapper);
    // alert(margin_footer);
    $('.wrapper').css('padding-top', margin_wrapper);
    // $('.wrapper').css('margin-bottom', margin_footer);
    // $('.about_wrapper').css('margin-top', 96);
    
    
    // $('.mobile_wrapper').css('margin-top', margin_wrapper);
   // console.log(mql.matches);



    // if(mql.matches && document.documentElement.clientWidth >768) { 
     
    //  // $('.team_block').css('padding-top', margin_wrapper);
    // }

    // else if(!mql.matches && document.documentElement.clientWidth >768){
    //   alert("Маленький горизонталь");

    //   $('.wrapper').css('padding-top', margin_wrapper);
    // }

    // else{
    //   alert("Большой " + margin_wrapper)
    //   $('.wrapper').css('padding-top', margin_wrapper);
      
    // }
   });

function relocate(){
   $('#send_order').css('border-color', '#26f1bc');

    setTimeout(      
        function() {        
           window.location.href='contacts.html';  
        }, 500
     ); 


  
}
$(".cover_desktop").click(function(e){

   var clickId = $(e.target).attr('id');

   

   if(!clickId){

   	clickId = $(e.target).parent().parent().find('img').attr('id');
     if(!clickId) {
     	clickId = "green";
     }
   	
   }  

   var image= $(this).find('.item_block').find('img');
   $(image).hide( "explode", {pieces: 33}, 3500 );
    $(".desktop_cover_wrapper").hide(2000);
    full_item_case(clickId); 
    $(image).show( "explode", {pieces: 33}, 2000 );

});
$(".mobile_slider_closed").click(function(e){ 
   var clickId = $(e.target).attr('id');
   $("#mobile_cases").hide(2500);
    full_item_case(clickId); 
});
      
function full_item_case(clickId){
if(clickId== 'pure'|| clickId=='purem'){
$('#case_pure').addClass('active');
}
if(clickId== 'river' || clickId=='riverm'){
$('#case_river').addClass('active');  
}
if(clickId== 'fluger' || clickId=='flugerm'){
  $('#case_fluger').addClass('active');
}
if(clickId== 'green' || clickId=='greenm'){
  $('#case_green').addClass('active');
}

$('#project_page').css('overflow', 'visible');

$('#carousel_slider').fadeIn(4500); 

// $('#carousel_slider').css("display", "block");
$('#mobiles_footer').css('display', 'block');

   
     setTimeout(      
        function() {         
          wow = new WOW();
          wow.init();    

        }, 1000
     ); 

}
// change header color on scroll
var scrolled;
window.onscroll = function() {
    scrolled = window.pageYOffset || document.documentElement.scrollTop;
    if(scrolled > 30){
        $(".navbar-fixed-top").css({"background": "#fff "});
        $(".navbar").css({"max-height": "4.5rem"})
    }
    if(1 > scrolled){
        $(".navbar-fixed-top").css({"background": "transparent"})         
    }

}
// preview toggle class active on service slider
$('#carousel_swipe').on('slid.bs.carousel', function(){
   var next_index = index+1;
   var previous_index = index+1;
   var index = $('.carousel-inner .item.active').index();
   
   $('#thumbcarousel_previews .thumb').each(function(){
     $('#thumbcarousel_previews .thumb').removeClass('active');
   });  

   $('#thumbcarousel_previews .thumb[data-slide-to="'+index+'"]').addClass('active');
   
});
// swipe turn on for mobile cover and service mobile sliders
  $(document).ready(function() {  
       $("#carousel_cases_mobile").swiperight(function() {         
          $(this).carousel('prev');  
          });  
       $("#carousel_cases_mobile").swipeleft(function() {  
          $(this).carousel('next');  
     });  
  });  

$(document).ready(function() {  
       $("#carousel_swipe").swiperight(function() {

          $(this).carousel('prev');  
          
          });  
       $("#carousel_swipe").swipeleft(function() {  
          $(this).carousel('next');  
     });  
}); 
$('.backtotop').click(function(){
       $('html, body').animate({scrollTop:0}, 0);

     setTimeout(      
        function() {  


          var wow = new WOW();
          wow.init();      
        }, 1000
     ); 
 
});
$(".desktop_control").click(function(e){ 
   var a = $(".item.cover_desktop.active");
    $(a).css("opacity", 0.12);
    var frase = $(a).find(".desktop_cover_title");
     $(frase).each(function(){
           $(this).css("display", "none");          
    }); 
   setTimeout(      
        function() {        
          $(a).css("opacity", 1);           
           $(frase).each(function(){
           $(this).css("display", "block");          
         });         
        }, 1500
  ); 
});



$(document).ready(function() {
 $(".vertical-tab-menu>.list-group>a").click(function(e) {
 e.preventDefault();
 $(this).siblings('a.active').removeClass("active");
 $(this).addClass("active");
 var index = $(this).index();
 $(".vertical-tab>.vertical-tab-content").removeClass("active");
 $(".vertical-tab>.vertical-tab-content").eq(index).addClass("active");
 });
});

$("#send_order").on("mouseover", function(){
       
  $(".order_button_lines").css("background-color", '#26f1bc');
});

$("#send_order").on("mouseout", function(){
        
  $(".order_button_lines").css("background-color", '#000');
});


$(".desktop_cover_title").on("mouseover", function(){
	$(this).parent().find('img').css("transform", "scale(0.9)");       
  
});

$(".desktop_cover_title").on("mouseout", function(){
     $(this).parent().find('img').css("transform", "scale(1)");   
  
});





$(".carousel-control").on("click", function(e){
  $(e.target).css("border-color", "#02eeda");
  $(e.target).css("background-color", "#02eeda");     
  $(e.target).css("color", "#fff");


  setTimeout(      
        function() { 
          $(e.target).css("border-color", "#d5d5d5");       
          $(e.target).css("background-color", "transparent");     
          $(e.target).css("color", "#000");
         
        }, 800
  ); 

});


$(".carousel-control").on("mouseover", function(){
  $(this).css("border-color", "#02eeda");
});

$(".carousel-control").on("mouseout", function(){
        
  $(this).css("border-color", "#d5d5d5");
});


$(".button_full_slider").on("click", function(){
  $(".button_full_slider").css("color", "#02eeda");
});


$(".contacts_form_submit").on("click", function(){
  $(this).css("border-color", "#26f1bc");
});


  var text = 'Привет! Я вижу, что ты ищешь';
  var text2 = 'кого-то, чтобы ';
  var text3= 'создать свой сайт';
  var text4= '.';
  var delay = 200; 
  var elem = $('#message'); 
  var elem2 = $('#message2');
  var elem3 = $('#message3');
  var elem4 = $('#message4');
  var print_text = function(text, elem, delay){  
    if(text.length > 0) {    
      elem.append(text[0]);      
      setTimeout(      
        function() {        
          print_text(text.slice(1), elem, delay); 
        }, delay        
      );      
    }    
  }
  print_text(text, elem, delay);
   setTimeout(      
        function() {        
          print_text(text2, elem2, delay);          
        }, 6500
  );
  setTimeout(      
        function() {        
          print_text(text3, elem3, delay);          
        }, 9500
  ); 
    setTimeout(      
        function() {        
          print_text(text4, elem4, delay);          
        }, 13000
  ); 


// window.onresize = message;
//     function message() {
//        if(document.documentElement.clientWidth > 768) {          

//            $("#carousel_slider").css("display", "none");
//            $(".desktop_cover_wrapper").css("display", "block");
//         }
//         else{
//             $("#carousel_slider").css("display", "none");
//            $("#mobile_cases").css("display", "block");
//            }
           
//         }
     