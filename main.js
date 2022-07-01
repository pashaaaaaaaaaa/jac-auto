var swiper = new Swiper(".mySwiper", {
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });

  // select 2

$(document).ready(function() {
    $('.select1').select2({
        placeholder: "Модель",
        // allowClear: true
    });
});
$(document).ready(function() {
    $('#sl2').select2({
        placeholder: "Двигатель",
        // allowClear: true
    });
});

// pop-up

$(".open").on('click', function() {
    $(".custom-model-main").addClass('model-open');
  }); 
$(".close-btn, .bg-overlay").click(function(){
    $(".custom-model-main").removeClass('model-open');
});

// sale 

$(".sale").on('click', function() {
    $(".custom-model-main2").addClass('model-open2');
  }); 
$(".close-btn, .bg-overlay2").click(function(){
    $(".custom-model-main2").removeClass('model-open2');
});


