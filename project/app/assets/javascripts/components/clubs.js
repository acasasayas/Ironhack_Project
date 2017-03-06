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
