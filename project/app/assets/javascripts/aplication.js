var markers = [];
var map;
var zoom_changed_timeout_id;
var timeout = 500

$(document).ready(function(){

    function initialize() {

      map = new google.maps.Map(document.getElementById('map-canvas'), {
        center: {lat: 41.385064, lng: 2.173403},
        zoom: 10
      });

      if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(function(position) {
        var pos = {
          lat: position.coords.latitude,
          lng: position.coords.longitude
        };


        map.setCenter(pos);
      })
      }

      google.maps.event.addListener(map, 'dragend', function(){
        requestClubs()
      })


      google.maps.event.addListener(map, 'zoom_changed', function(){
        if (zoom_changed_timeout_id) {
          clearTimeout(zoom_changed_timeout_id)

        }
        zoom_changed_timeout_id = setTimeout(function(){
          requestClubs()
          zoom_changed_timeout_id = null
        },timeout)

      })

      google.maps.event.addListenerOnce(map, 'bounds_changed', function(){
        requestClubs()
      })

      function requestClubs() {

        var center = map.getCenter();
        var ne = map.getBounds().getNorthEast();

        getAllClubs(center.lat(),center.lng(),ne.lat(),ne.lng());

      }


      var autocomplete = new google.maps.places.Autocomplete(
      (document.getElementById('autocomplete')), {
          types: ['geocode']
      });

      google.maps.event.addListener(autocomplete, 'place_changed', function () {
        var place = autocomplete.getPlace();
        console.log(place.place_id);
        $('#google-place').val(place.place_id);
      });


  }

  initialize();


    // google.maps.event.addListener(markers,'click', function() {
    //   debugger;
    //   $('#LogInModal').modal('show');
    // });

    




  $(document).on('click', '#next-button', function(){
    event.preventDefault();
    var courts = $('#num-courts').val();
    $("#new-club").hide();
    $("#new-club-btn").removeClass("hidden");

    for (i = 1; i-1 < courts; i++) {
      $("#court-name").append(
        '<div><label class="court-label-l float label-user">Nombre de la pista:</label><input type="text" name="court[court'+i+']" id="court-'+i+'" class="court-text-l form-control"></input></div><br>'
      );
      $("#court-sport").append(
        '<div><label class="court-label-r float label-user">Deporte:</label><input type="text" name="court[sport'+i+']" id="sport-'+i+'" class="court-text-r form-control"></input></div><br>'

      );
    }
  });

});


$(document).on("click", ".name-club", function () {
    $("#modal-title").empty();
    $("#modal-center").empty();
    $("#modal-footer").empty();

     var data = $(this).data('id');
     var url = $(this).data('url');

     $( "#modal-title" ).append(
        "<h1 class='color-red'>"+data.name+"</h1>"
      );
      var i = 0;
        while (i <= url.length - 1) {
          $( "#modal-center" ).append(
            "<img src="+url[i]+"></img>"
          );
        i++;
        }

     $( "#modal-footer" ).append(
        "<h5><strong>Dirección:</strong></h5>",
        "<h5>"+data.full_street_address+"</h5>",
        "<h5><strong>Teléfono:</strong> - </h5>",
        "<h5><strong>Web:</strong> www.club.com </h5>",
        "<h5><strong>Otros servicios:</strong></h5>",
        "<h5><strong>Piscina: </strong>"+data.pool+"</h5>",
        "<h5><strong>Gimnasio: </strong>"+data.gym+"</h5>",
        "<h5><strong>Restaurante: </strong>"+data.restaurant+"</h5>",
        "<h5><strong>Hora apertura: </strong>"+data.open+"</h5>",
        "<h5><strong>Hora cierre: </strong>"+data.close+"</h5>"
      );

});
