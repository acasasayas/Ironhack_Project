$(document).on("click", ".name-club", function () {
    $("#modal-club").empty();
     var data = $(this).data('id');
     var url = $(this).data('url');
     debugger;
     $( "#modal-club" ).append(
        "<h1>"+data.name+"</h1>",
        "<img src="+url+"></img>",
        "<h3>"+data.ubication+"</h3>"
      );
});
