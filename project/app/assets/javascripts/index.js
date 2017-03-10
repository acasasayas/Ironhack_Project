$(document).ready(function(){

  $(document).on("click", "#acceder", function () {
    event.preventDefault();
    $("#modal-login").removeClass("hidden");
  });

  $(document).on("click", "#register", function () {
    event.preventDefault();
    $("#modal-register").removeClass("hidden");
  });

  $(document).on("click", "#map-canvas", function () {
    event.preventDefault();
    $("#modal-prueba").addClass("hidden");
  });

});
