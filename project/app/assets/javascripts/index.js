var $document = $(document);

$document.ready(function(){

  jQuery('.statistic-counter').counterUp({
     delay: 10,
     time: 2000
   });


   $document.on("click", "#enter", function() {
     event.preventDefault();
     $("#intro").fadeOut(1500);
     $(".main-home").fadeOut(1500);
     $("#left-bar").removeClass("hidden");
     $("#menu").removeClass("hidden");
   });



  $document.on("click", ".menu-open-button", function () {
      $(".menu-item").removeClass("hidden");
  });

  $document.on("click", ".hide-element", function (e) {
    $("#menu-open").prop('checked', false);
    $(".menu-item").addClass("hidden");
  });

  $document.on("click", "#map-canvas", function (e) {
    $("#menu-open").prop('checked', false);
    $(".menu-item").addClass("hidden");
  });

  $('#radioInput input').on('change', function() {
   console.log($('input[name="myRadio"]:checked', '#radioInput').val())
  });

  // $("#sport").hover(function() {
  //   $(".sport-radio").toggleClass("hidden");
  //   $(".sport-label").toggleClass("hidden");
  // });
  //
  // $("#date").hover(function() {
  //   $(".label-radio").toggleClass("hidden");
  //   $(".label-label").toggleClass("hidden");
  // });
  //
  // $("#hour").hover(function() {
  //   $(".hour-radio").toggleClass("hidden");
  //   $(".hour-label").toggleClass("hidden");
  // });

});
