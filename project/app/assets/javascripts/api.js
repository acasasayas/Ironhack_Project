var hora = 0;
var court_id = 1;
var current_marker;

function getAllClubs (center_lat,center_lng,corner_lat,corner_lng,time_start,time_end) {

    var url = '/clubs'
    url += `?time_start=${time_start}&time_end=${time_end}`

    if (center_lat && center_lng && corner_lat && corner_lng) {
      url += `&center_lat=${center_lat}&center_lng=${center_lng}&corner_lat=${corner_lat}&corner_lng=${corner_lng}`
    }

    console.log(url);
    $.ajax({
      type: "GET",
      url: url,
      success: allClubs,
      error: handleClubsError
    });

    function allClubs (response) {


      var clubs = response.clubs;

      markers.forEach( function (marker){
        marker.setMap(null);
      });
      markers = [];

      Object.keys(clubs).forEach( function (key) {
        var theClub = clubs[key]
        theClub.images = response.images[theClub.club.id]
        var marker = new google.maps.Marker({
          position: {lat: theClub.club.latitude, lng: theClub.club.longitude},
          map: map,
          title: theClub.club.name,
          club: theClub
        });

        markers.push(marker);

        var contentString = '<div id="popUp">'+
            '<div id="siteNotice">'+
            '</div>'+
            '<h1 id="firstHeading" class="firstHeading"><strong>'+marker.club.club.name+'</strong></h1>'+
            '<div id="bodyContent">'+
            '<div class="col-md-6 img-col flex">' +
            '<div class="elemento23">' +
              '<a id="pre" href="#" class="arrow-l "><i class="fa fa-2x fa-angle-left" aria-hidden="true"></i></a>' +
              '<span id="image-club" data-img="'+marker.club.images+'">'+
                '<img class="image-gal" src="'+marker.club.images[photo]+'">' +
              '</span>'+
              '<a id="next" href="#" class="arrow-r "><i class="fa fa-2x fa-angle-right" aria-hidden="true"></i></a>' +
            '</div>' +
            '</div>' +
            '<div class="col-md-6 left-text">' +
            '<h4><strong>Dirección: </strong>' + marker.club.club.full_street_address + '</h4>' +
            '<h4><strong>Abierto: </strong>' + minToTime(marker.club.club.open) +' - '+ minToTime(marker.club.club.close) +'</h4>' +

            '<h4> <strong>Instalaciones: </strong> </h4>' +

            '<h4>' + Gym(marker.club.club.gym) +' '+ Pool(marker.club.club.pool) +' '+ Restaurant(marker.club.club.restaurant) + '</h4>' +
            '</div>' +
            '</br>' +
            '<div class="col-md-12 sport-hours">' +
            // Horarios
            '</div>'+
            '<div class="col-md-12">' +
            '<h5>Los horarios están sujetos a disponibilidad del club</h5>' +
            '</div>'+
            '</div>';

        var infowindow = new google.maps.InfoWindow({
          content: contentString
        });

        marker.setIcon('/assets/location-marker.png');

        marker.addListener('click', function() {
          infowindow.open(map, marker);
          $('.sport-hours').empty();

          $('.padel-courts').empty();
          $('.futbol-courts').empty();
          $('.basket-courts').empty();
          $('.golf-courts').empty();

          current_marker = marker;
          map.setCenter(marker.getPosition());

          $('.elemento2').addClass("hidden");
          var sports = ["Golf", "Futbol", "Padel", "Basket"];

          var club = this.club;

          switch(sport_radio) {
               case "Todos":
                var sports = ["Golf", "Futbol", "Padel", "Basket"];
                break;
               case "Futbol":
                var sports = ["Futbol"];
                break;
                case "Basket":
                 var sports = ["Basket"];
                 break;
                case "Padel":
                 var sports = ["Padel"];
                 break;
              };

          if (sports.length == 1) {
            $('.sport-hours').append(
              '<h4><strong>Pistas Disponibles:</strong></h4>'+
              '</br>'
            );
          } else {
            $('.sport-hours').append(
              '<div class="col-md-12 hours-disp no-padding-left">' +
                  '<h4><strong>Pistas Disponibles:</strong></h4>'+
                  '</br>' +
                  '<div id="golf-courts" class="col-md-6 no-padding-left">' +
                    '<h5 class="title-sport"><strong>Golf</strong></h5>' +
                  '</div>' +
                  '<div id="padel-courts" class="col-md-6 no-padding-left">' +
                    '<h5 class="title-sport"><strong>Padel</strong></h5>' +
                  '</div>' +
                  '</div>' +
                  '<div class="col-md-12 hours-disp no-padding-left">' +
                    '<div id="basket-courts" class="col-md-6 no-padding-left">' +
                      '<h5 class="title-sport"><strong>Basket</strong></h5>' +
                    '</div>' +
                    '<div id="futbol-courts" class="col-md-6 no-padding-left">' +
                      '<h5 class="title-sport"><strong>Futbol</strong></h5>' +
                    '</div>' +
                  '</div>'+
                '</div>'
            );
          }

          sports.forEach(sport => {
            if (sport in club) {
              if (sports.length == 1) {

                Object.entries(club[sport]).forEach((entry, index) => {
                  if (index < 6) {
                    let lowerSport = sport.toLowerCase();
                    let data = moment.utc(entry[0]);
                    let time = data.format("HH:mm");
                    $('.sport-hours').append(
                      '<div class="col-md-2 '+lowerSport+'-courts"><button id="' + lowerSport + '-button" data-time="'+entry[0]+'" data-court="'+entry[1]+'" type="button" class="reservation info-find btn btn btn-default button-standard-hour-1sport">'+ time +'</button></div></div>'
                    );
                  }
                })
              } else {
                Object.entries(club[sport]).forEach((entry, index) => {
                  if (index < 4) {
                    let lowerSport = sport.toLowerCase();
                    let data = moment.utc(entry[0]);
                    let time = data.format("HH:mm");
                    $('#' + lowerSport + '-courts').append(
                      '<div class="col-md-3 '+lowerSport+'-courts"><button id="' + lowerSport + '-button" data-time="'+entry[0]+'" data-court="'+entry[1]+'" type="button" class="reservation info-find btn btn btn-default button-standard-hour">'+ time +'</button></div></div>'
                    );
                  }
                })
              }
            } else {
              let lowerSport = sport.toLowerCase();
              $('#' + lowerSport + '-courts').append(
                '<div class="col-md-12 '+lowerSport+'-courts"><span>No hay pistas disponibles de este deporte</span></div>'
              );
            }
          });
        });

        google.maps.event.addListener(infowindow, 'domready', function() {

         var iwOuter = $('.gm-style-iw');

         var iwBackground = iwOuter.prev();

         iwBackground.children(':nth-child(2)').css({'display' : 'none'});
         iwBackground.children(':nth-child(4)').css({'display' : 'none'});
         iwOuter.parent().parent().css({left: '0px'});
         iwBackground.children(':nth-child(1)').attr('style', function(i,s){ return s + 'left: 22px !important;'});
         iwBackground.children(':nth-child(3)').attr('style', function(i,s){ return s + 'left: 228px !important;'});
         iwBackground.children(':nth-child(3)').find('div').children().css({'background-color': '#78bc61', 'z-index' : '100'});
         iwBackground.children(':nth-child(3)').find('div').children().css({'border-left': '1px solid white', 'z-index' : '100'});
         iwBackground.children(':nth-child(3)').find('div').children().css({'border-right': '1px solid white', 'z-index' : '100'});

         var iwCloseBtn = iwOuter.next();

         iwCloseBtn.css({
           opacity: '1',
           right: '40px', top: '25px'
           });

         iwCloseBtn.mouseout(function(){
           $(this).css({opacity: '1'});
         });


      });

      });



    }

    function handleClubsError (error) {
      console.log(error)
      console.log("Error Eres un Loser")
    }



}

function getAllReservations() {


  $.ajax({
    type: "GET",
    url: "/reservationsUser",
    success: allReservations,
    error: handleReservationsError
  });

  function allReservations (response) {
    var reservations = response
    var reservations_alert = []
    console.log(response)
  }

  function handleReservationsError (error) {
    console.log(error)
  }
}

function newReservation (court_id,time_start) {
  var reservation = {
    court_id: court_id,
    time_start: time_start
  }
  $.ajax({
    type: "POST",
    url: '/createReservation',
    data: reservation,
    success: createReservation,
    error: handleCreateError
  });

  function createReservation (response) {
    console.log(response)
    // alert("Reserva en:" + response.name + " de:" + reservation.time_start + "-" + reservation.time_end);
  }

  function handleCreateError (error) {
    console.log(error)
  }
}
