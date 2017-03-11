var $document = $(document);
$document.ready(function(){

  $document.on("click", ".menu-open-button", function () {
    $(".menu-item").removeClass("hidden");
  });

  $document.on("click", ".menu-item", function (e) {
    $("#menu-open").prop('checked', false);
    $(".menu-item").addClass("hidden");
  });



});
