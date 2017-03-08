$(document).ready(function(){

  // function NewCourt() {
  //   var courts = $('#num-courts').val();
  //   array_names = new Array();
  //   array_sports = new Array();
  //   for (i = 1; i-1 < courts; i++) {
  //     var name = $('#court-'+ i).val();
  //     array_names.push(name);
  //     var sport = $('#sport-'+ i).val();
  //     array_sports.push(sport)
  //   }
  //   $.ajax({
  //     type: "POST",
  //     url: '/courts',
  //     data: {name: array_names, sport: array_sports}
  //   });
  // };
  //
  // $(document).on("click", '#new-club', function() {
  //     debugger;
  //     $('#new_club').submit();
  //     debugger;
  //     setTimeout(NewCourt(), 1000);
  //     debugger;
  // });

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
