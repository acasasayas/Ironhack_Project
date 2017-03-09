$(document).ready(function(){


    function initialize() {

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

  $(document).on('input', '#num-courts', function(){
    var courts = this.value;
    $("#court-name").empty();
    $("#court-sport").empty();

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
    $("#modal-club").empty();
     var data = $(this).data('id');
     var url = $(this).data('url');

     debugger;
     $( "#modal-title" ).append(
        "<h1>"+data.name+"</h1>"
      );
      $( "#modal-left" ).append(
         "<img src="+url+"></img>"
       );
     $( "#modal-right" ).append(
        "<h3>"+data.ubication+"</h3>"
      );
});
