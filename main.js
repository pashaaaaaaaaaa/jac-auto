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