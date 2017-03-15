$document.ready(function(){

    function updateSlider(min, max) {
      $('#slider a').first().html('<label class="hour">' + minToTime(min) + '</label>');
      $('#slider a').last().html('<label class="hour">' + minToTime(max) + '</label>');
    }

    $(document).on('click','#minus', function(){
      event.preventDefault();
      $day = $("#day")["0"].childNodes["0"].data - 1
      $("#day")["0"].childNodes["0"].data = $day;
      filters.day = $day
      requestClubs();
    });

    $(document).on('click','#plus', function(){
      event.preventDefault();
      $day = $("#day")["0"].childNodes["0"].data - 2 + 3
      $("#day")["0"].childNodes["0"].data = $day;
      filters.day = $day
      requestClubs();
    });



    $("#slider").slider({
      range: true,
      animate: 0,
      min: 480,
      max: 1440,
      step: 30,
      values: [ 480, 1440 ],
      slide: function(e, ui) {
        console.log(ui.values[0])
        console.log(ui.values[1])

        filters.time_start = ui.values[0]
        filters.time_end = ui.values[1]

        updateSlider(ui.values[0], ui.values[1]);
        requestClubs();
      }
    });
    updateSlider(480, 1440);

});
