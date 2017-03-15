var markers = [];
var map;
var zoom_changed_timeout_id;
var timeout = 500;
var photo = 0;

$(document).ready(function(){

    function initialize() {

      map = new google.maps.Map(document.getElementById('map-canvas'), {
        center: {lat: 41.385064, lng: 2.173403},
        zoom: 12
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

      var where = document.getElementById('where');
      new google.maps.places.Autocomplete(where);


  }

  initialize();



  $(document).on('click','#pre', function(){
    event.preventDefault();
    var dataId = $('#image-club').data('img').split(",");
    photo = photo - 1;
    if (photo < 0) {
      photo = dataId.length - 1;
    };
    $('#image-club').empty();
    $('#image-club').html('<img class="image-gal" src="'+dataId[photo]+'">');
  });


  $(document).on('click','#next', function(){
    event.preventDefault();
    var dataId = $('#image-club').data('img').split(",");
    photo = photo + 1;
    debugger;
    if (photo > dataId.length - 1) {
      photo = 0;
    };
    $('#image-club').empty();
    $('#image-club').html('<img class="image-gal" src="'+dataId[photo]+'">');
  });

});
