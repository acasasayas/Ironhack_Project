//


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

    $(document).on('click','#padel-button', function(){
      event.preventDefault();
      var sport = $('#padel-button').data('sport');
      var time = $('#padel-button').data('time');
      var courtId = $('#padel-button').data('court');
      debugger;

    });

    var hours = 0;
    var court_id = 1;

    $(document).on('click','#next-hour', function(){

      event.preventDefault();
      var sport = this.getAttribute('data-sport');

      function getFreeHours(sportSelect) {
        var freeHours = sportSelect.data('free_hours').split(",");
        calcIndex(freeHours);
      }

      function calcIndex(freeHours) {
        hours = hours + 2;
        court_id = court_id + 2;
        if (hours > freeHours.length) {
          hours = 0;
          court_id = 1;
        };
        changeHour(freeHours);
      }

      function changeHour(freeHours) {
        debugger;
        sportSelect.data('time', freeHours[hours]);
        sportSelect.data('court', freeHours[court_id]);
        sportSelect["0"].textContent = freeHours[hours].substring(16, 11);
      }

      switch (sport) {
          case "Padel":
            var sportSelect = $('#padel-button');
            getFreeHours(sportSelect);
            break;
          case "Futbol":
            var sportSelect = $('#futbol-button');
            getFreeHours(sportSelect);
            break;
          case "Basket":
            var sportSelect = $('#basket-button');
            getFreeHours(sportSelect);
            break;
          case "Golf":
            var sportSelect = $('#golf-button');
            getFreeHours(sportSelect);
            break;
      }



    });

    $(document).on('click','#prev-hour', function(){
      event.preventDefault();
      var sport = this.getAttribute('data-sport');

      var freeHours = $('#padel-button').data('free_hours').split(",");

      indexHours = indexHours - 2;
      indexCourtId = indexCourtId - 2;
      debugger;

      if (indexHours < 0) {
        indexHours = freeHours.length - 2;
        indexCourtId = freeHours.length - 1;
      };
      debugger;

      $('#padel-button').data('time', freeHours[indexHours]);
      $('#padel-button').data('court', freeHours[indexCourtId]);
      $('#padel-button')["0"].textContent = freeHours[indexHours].substring(16, 11);

    });

    function hola() {
      debugger;
    }

    $(document).on('click','#prev-hour', function(){
      event.preventDefault();

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
