var $document = $(document);

$document.ready(function(){

  jQuery('.statistic-counter').counterUp({
     delay: 10,
     time: 2000
   });


  //  $document.on("click", "#enter", function() {
  //    event.preventDefault();
  //    $("#intro").fadeOut(1500);
  //    $(".main-home").fadeOut(1500);
     $("#left-bar").removeClass("hidden");
     $("#menu").removeClass("hidden");
  //  });

  $document.on("mouseover", ".elemento1", function () {
    $('#left-bar .elemento2').removeClass("hidden");
  });

  $document.on("click", ".reservation", function () {
      event.preventDefault();
      var time = this.getAttribute('data-time')
      var courtId = this.getAttribute('court')

  });


  $document.on("click", ".menu-open-button", function () {
      if ($("#menu-open").prop('checked') == true) {
        $(".menu-item").addClass("hidden");
      } else {
        $(".menu-item").removeClass("hidden");
      }
      $("#destroy-session").addClass("hidden");
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


});
