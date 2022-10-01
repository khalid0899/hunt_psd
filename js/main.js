// counter

jQuery(document).ready(function($) {
      $('.counter').counterUp({
          delay: 10,
          time: 1000
      });
  });

   // service slick
   $('.service_part').slick({
    vertical:true,
    centerPadding: '0px',
    centerMode: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    prevArrow:".service_prev",
    nextArrow:".service_next",
 
  }); 
  // market slick ja
$('.market_logo').slick({
    centerMode: true,
    slidesToShow: 5,
    slidesToScroll: 1,
    Padding: 0,
    centerPadding:0,
    prevArrow:".banner_prev",
    nextArrow:".banner_next",
  });

    //testimonial  slick
    $('.testimonial_part').slick({
      slidesToShow: 1,
      slidesToScroll: 1,
      arrows: false,
      fade: true,
      asNavFor: '.testimonial_img',
    });

    $('.testimonial_img').slick({
      vertical:true,
      slidesToShow: 3,
      slidesToScroll: 1,
      asNavFor: '.testimonial_part',
      dots: false,
      centerMode: true,
      focusOnSelect: true,
      centerPadding:0,
      prevArrow:".testi_prev",
      nextArrow:".testi_next",
      centerPadding: '0px',
      centerMode: true,
      centerPadding:0,
     
    });
 
    // menu effect
    $(window).scroll(function(){

      var scrolling = $(window).scrollTop();
    
      if (scrolling > 20){
        $(".menu_bg").addClass("bg")
      }else{
        $(".menu_bg").removeClass("bg")
      }
    })

    // side menu
    $(".troggole").click(function(){
      $(".sidemenu").toggleClass("bg")

    })





    

    

    
