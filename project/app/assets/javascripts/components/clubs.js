$(document).ready(function(){
  $(".name-club").click(function(e){
    e.preventDefault();
    debugger;
    id = $(this).attr('id');
    $.get('/clubs/show_modal.js', {item: id}, function(response){
      debugger;
    })
  });
});
