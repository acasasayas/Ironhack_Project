var markers = [];
var map;
var zoom_changed_timeout_id;

var timeout = 500
var filters = {}

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

        var date_start = new Date();
        date_start.setDate(filters.day);
        date_start.setHours(filters.time_start / 60);
        date_start.setMinutes(filters.time_start % 60);

        var date_end = new Date();
        date_end.setDate(filters.day);
        date_end.setHours(filters.time_end / 60);
        date_end.setMinutes(filters.time_end % 60);
        debugger
        getAllClubs(center.lat(),center.lng(),ne.lat(),ne.lng(),date_start.toISOString(),date_end.toISOString());

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
  filters.time_start = 480
  filters.time_end = 1440
  filters.day = $("#day").val()

  initialize();

});
