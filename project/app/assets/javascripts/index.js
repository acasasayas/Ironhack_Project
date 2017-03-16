var $document = $(document);

$document.ready(function(){

  if ($('.current-user')["0"].textContent == "") {
    $('#intro').removeClass('hidden');
    $("#left-bar").toggleClass("hidden");
    $("#menu").toggleClass("hidden");
    $(".current-user").toggleClass("hidden");
  } else {
    $('#intro').addClass('hidden');
  }

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

  $document.on("mouseover", ".elemento1", function () {
    $('#left-bar .elemento2').removeClass("hidden");
  });

  $document.on("click", ".confirm-reservation", function() {
    event.preventDefault();
    var time = this.getAttribute('data-time');
    var courtId = this.getAttribute('court');
  });


  $document.on("click", ".reservation", function () {
      event.preventDefault();
      $('.confirmation').empty();
      var courtId = this.getAttribute('data-court')
      var time = this.getAttribute('data-time')

      let data = moment.utc(time);
      let timeReservation = data.format("DD");
      let timeReservationHour = data.format("HH:mm");

      $('#reservation').modal('toggle');
      $('.confirmation').append(
        '<div class="col-md-12"><span><strong>Club: </span> '+current_marker.club.club.name+'</strong></span></div>',
        '<div class="col-md-12"><span><strong>Dirección: </strong> '+current_marker.club.club.full_street_address+'</span></div>',
        '<div class="col-md-12"><h4><strong>Día: </strong> '+timeReservation+'</h4><h4><strong>Hora: </strong> '+timeReservationHour+'</h4></div>'
        );
        if ($('.current-user')["0"].textContent == "") {
          $('.confirmation').append('<div class="col-md-6"><button id="confirm-reservation" data-time="'+time+'" data-court="'+courtId+'"  type="button" class="reservation info-find btn btn btn-default btn-reserv">Registrarse</button></div>')
        } else {
          $('.confirmation').append('<div class="col-md-6"><button id="confirm-reservation" data-time="'+time+'" data-court="'+courtId+'"  type="button" class="reservation info-find btn btn btn-default btn-reserv">Confirmar</button></div>')
        }
        $('.confirmation').append('<div class="col-md-6"><button id="cancel-reservation" type="button" class="reservation info-find btn btn btn-default btn-reserv red">Cancelar</button></div>')

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
