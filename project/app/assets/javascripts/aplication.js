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
    $("#modal-title").empty();
    $("#modal-left").empty();
    $("#modal-right").empty();

     var data = $(this).data('id');
     var url = $(this).data('url');

     $( "#modal-title" ).append(
        "<h1 class='color-red'>"+data.name+"</h1>"
      );
      var i = 0;
        while (i <= url.length - 1) {
          $( "#modal-left" ).append(
            "<img src="+url[i]+"></img>"
          );
        i++;
        }
     $( "#modal-right" ).append(
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
