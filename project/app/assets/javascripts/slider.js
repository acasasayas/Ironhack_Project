$document.ready(function(){

    $(document).on('click','#minus', function(){
      event.preventDefault();
      $day = $("#day")["0"].childNodes["0"].data - 1
      $("#day")["0"].childNodes["0"].data = $day;
    });

    $(document).on('click','#plus', function(){
      event.preventDefault();
      debugger;
      $day = $("#day")["0"].childNodes["0"].data - 2 + 3
      $("#day")["0"].childNodes["0"].data = $day;
    });

    $("#slider").slider({
      range: true,
      min: 480,
      max: 1440,
      step: 30,
      values: [ 480, 1440 ],
      slide: function(e, ui) {
        console.log(ui.values[0])
        console.log(ui.values[1])

        // $('#slider a').html('<label>' + ui.values[0] + '</label>');

      }
    });

      function toClock(aa){
          var hours = Math.floor(aa / 60);
          var minutes = aa - (hours * 60);
          var ampm = "";

          if(hours.length == 1) {hours = '12' + hours;}
          if(hours > 12) {ampm = "PM"; hours = hours-12;}
          else if(hours == 12){ampm = "PM";}
          else if(hours < 12){
              ampm = "AM";
              if(hours == 0)  hours =  12;

          }
          if(minutes == 0){minutes = '0' + minutes;}
          var combo = hours+':'+minutes + ampm;
          return combo
      }

      function toUnits(bb){
         var hours = Math.floor(bb / 60);
         var minutes = bb - (hours * 60);
      }

      function toInitialize(a,b){
      console.log(a);
          if(a == ''){}
          else{
              var new_start = a.split(':');
              console.log(new_start);
           $("#slider").slider( "values", [ 480, 1440 ] );
          }
        }

});
