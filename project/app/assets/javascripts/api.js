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
      clubs.forEach( function (theClub) {
        var marker = new google.maps.Marker({
          position: {lat: theClub.latitude, lng: theClub.longitude},
          map: map,
          title: theClub.name,
          club: theClub
        });
        markers.push(marker);
      });
    }

    function handleClubsError (error) {
      console.log("Error Eres un Loser")
    }

}
