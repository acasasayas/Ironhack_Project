function getAllClubs (center,distance) {

    $.ajax({
      type: "GET",
      url: "/clubs",
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
