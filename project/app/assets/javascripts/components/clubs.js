$(document).ready(function(){
  $('#num-courts').on('input', function(){
    var courts = this.value;
    $("#court-name").empty();
    $("#court-sport").empty();

    for (i = 1; i-1 < courts; i++) {
      $("#court-name").append(
        '<div><label class="court-label-l float label-user">Nombre de la pista:</label><input type="text" class="court-text-l form-control"></input  ></div><br>'
      );
      $("#court-sport").append(
        '<div><label class="court-label-r float label-user">Deporte:</label><input type="text" class="court-text-r form-control"></input  ></div><br>'

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
