$(document).ready(function(){
  $('.lvs-banner-slide').slick({
  	dots: true,
  	arrows: false,
  	autoplay: true,
  autoplaySpeed: 3000,
  });
  $('.lvs-slider').slick({
    dots: false,
  infinite: false,
  speed: 300,
  slidesToShow: 3,
  slidesToScroll: 3,
  arrows: true,
  responsive: [
    {
      breakpoint: 922,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
        infinite: true,
        }
    },
    {
      breakpoint: 648,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        infinite: true,
      }
    },
 
    // You can unslick at a given breakpoint now by adding:
    // settings: "unslick"
    // instead of a settings object
  ]

  // THIS выбирает только нажатый элемент
});
   // $('#lvs-btn-1').on('click', function(e){
   // event.preventDefault();
   // $('#lvs-shopping-summ').text( parseFloat($('#lvs-price-1').text())+parseFloat($('#lvs-shopping-summ').text()) );
   // });
   // $('#lvs-btn-2').on('click', function(e){
   // event.preventDefault();
   // $('#lvs-shopping-summ').text( parseFloat($('#lvs-price-2').text())+parseFloat($('#lvs-shopping-summ').text()) );
   // });
   // $('#lvs-btn-3').on('click', function(e){
   // event.preventDefault();
   // $('#lvs-shopping-summ').text( parseFloat($('#lvs-price-3').text())+parseFloat($('#lvs-shopping-summ').text()) );
   // });
   // $('#lvs-btn-4').on('click', function(e){
   // event.preventDefault();
   // $('#lvs-shopping-summ').text( parseFloat($('#lvs-price-4').text())+parseFloat($('#lvs-shopping-summ').text()) );
   // });
   // $('#lvs-btn-5').on('click', function(e){
   // event.preventDefault();
   // $('#lvs-shopping-summ').text( parseFloat($('#lvs-price-5').text())+parseFloat($('#lvs-shopping-summ').text()) );
   // });
   // $('#lvs-btn-6').on('click', function(e){
   // event.preventDefault();
   // $('#lvs-shopping-summ').text( parseFloat($('#lvs-price-6').text())+parseFloat($('#lvs-shopping-summ').text()) );
   // });

$('.lvs-btn').on('click', function(e){
   event.preventDefault();
   $('#lvs-shopping-summ').text( parseFloat($(this).siblings('.lvs-price').text())+parseFloat($('#lvs-shopping-summ').text()) );
   });


});

// parseFloat($('.button.lvs-btn~.lvs-price').val())