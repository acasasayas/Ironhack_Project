$(document).ready(function(){

  $(document).on("click", ".menu-open-button", function () {
    $(".menu-item").removeClass("hidden");
  });

  $(document).on("click", ".menu-item", function () {
    $("#menu-open").toggle();
  });

});
