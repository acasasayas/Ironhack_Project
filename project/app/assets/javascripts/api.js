function getAllClubs (center_lat,center_lng,corner_lat,corner_lng) {

    var url = '/clubs'

    if (center_lat && center_lng && corner_lat && corner_lng) {
      url += `?center_lat=${center_lat}&center_lng=${center_lng}&corner_lat=${corner_lat}&corner_lng=${corner_lng}`
    }
    console.log(url);
    $.ajax({
      type: "GET",
      url: url,
      success: allClubs,
      error: handleClubsError
    });

    function allClubs (response) {
      console.log(response);
      var clubs = response;
      markers.forEach( function (marker){
        marker.setMap(null);
      });
      markers = [];

      $.ajax({
        type: "GET",
        url: '/imagesClubs',
        success: clubImages,
        error: handleClubsError
      });

      function clubImages(response) {
        var images = response
      }

      clubs.forEach( function (theClub) {
        var marker = new google.maps.Marker({
          position: {lat: theClub.latitude, lng: theClub.longitude},
          map: map,
          title: theClub.name,
          club: theClub
        });

        markers.push(marker);

        var contentString = '<div id="popUp">'+
            '<div id="siteNotice">'+
            '</div>'+
            '<h1 id="firstHeading" class="firstHeading"><strong>'+marker.club.name+'</strong></h1>'+
            '<div id="bodyContent">'+
            '<div class="col-sm-12">' +
            '<h4><strong>Dirección: </strong>' + marker.club.full_street_address + '</h4>' +
            '<h4><strong>Hora apertura: </strong>' + marker.club.open + '</h4>' +
            '<h4><strong>Hora cierre: </strong>' + marker.club.close + '</h4>' +
            '<h4><strong>Gimnasio: </strong>' + marker.club.gym + '</h4>' +
            '<h4><strong>Piscina: </strong>' + marker.club.pool + '</h4>' +
            '<h4><strong>Restaurante: </strong>' + marker.club.restaurant + '</h4>' +
            '</div>' +
            '<p><b>Uluru</b>, also referred to as <b>Ayers Rock</b>, is a large ' +
            'sandstone rock formation in the southern part of the '+
            'Northern Territory, central Australia. It lies 335&#160;km (208&#160;mi) '+
            'south west of the nearest large town, Alice Springs; 450&#160;km '+
            '(280&#160;mi) by road. Kata Tjuta and Uluru are the two major '+
            'features of the Uluru - Kata Tjuta National Park. Uluru is '+
            'sacred to the Pitjantjatjara and Yankunytjatjara, the '+
            'Aboriginal people of the area. It has many springs, waterholes, '+
            'rock caves and ancient paintings. Uluru is listed as a World '+
            'Heritage Site.</p>'+
            '<p>Attribution: Uluru, <a href="https://en.wikipedia.org/w/index.php?title=Uluru&oldid=297882194">'+
            'https://en.wikipedia.org/w/index.php?title=Uluru</a> '+
            '(last visited June 22, 2009).</p>'+
            '</div>'+
            '</div>';

        var infowindow = new google.maps.InfoWindow({
          content: contentString
        });

        // marker.setIcon('/assets/tennis-ball-1.png');

        marker.addListener('click', function() {
          infowindow.open(map, marker);
        });

        google.maps.event.addListener(infowindow, 'domready', function() {

         var iwOuter = $('.gm-style-iw');

         var iwBackground = iwOuter.prev();

         iwBackground.children(':nth-child(2)').css({'display' : 'none'});
         iwBackground.children(':nth-child(4)').css({'display' : 'none'});
         iwOuter.parent().parent().css({left: '115px'});
         iwBackground.children(':nth-child(1)').attr('style', function(i,s){ return s + 'left: 228px !important;'});
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
      console.log(markers);


    }

    function handleClubsError (error) {
      console.log("Error Eres un Loser")
    }



}
