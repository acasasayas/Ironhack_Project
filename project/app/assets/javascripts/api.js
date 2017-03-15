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
      console.log(response);
      var clubs = response;
      markers.forEach( function (marker){
        marker.setMap(null);
      });
      markers = [];
      Object.keys(clubs).forEach( function (key) {
        var theClub = clubs[key]
        var marker = new google.maps.Marker({
          position: {lat: theClub.club.latitude, lng: theClub.club.longitude},
          map: map,
          title: theClub.club.name,
          club: theClub
        });
        marker.addListener('click',function(){
          debugger;
          alert(this.club.club.name);
        });
        markers.push(marker);
      });
      console.log(markers);


    }

    function handleClubsError (error) {
      console.log(error)
      console.log("Error Eres un Loser")
    }



}
