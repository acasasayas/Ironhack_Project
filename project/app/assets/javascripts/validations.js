$(document).ready(function(){
  $document.on("click", ".club-submit1", function () {
      event.preventDefault();
      function rulesClub1() {
        $("form[name='club']").validate({
            rules: {
                "club[name]": {
                required: true
              },
                "club[full_street_address]": {
                required: true
              },
                "club[open]": {
                required: true
              },
              "club[close]": {
                  required: true
              },
              "club[club_images][]": {
                  required: true
              },
              "club[courts]": {
                  required: true
              }
            },
            messages: {
              "club[name]": "Es necesario el nombre del club",
              "club[full_street_address]": "Indicar dirección del club",
              "club[open]": "Incicar hora de apertura del club",
              "club[close]": "Indicar hora cierre del club",
              "club[club_images][]": "Como mínimo es necesario subir 1 imagen",
              "club[courts]": "Indicar el número de pistas"
            }
      });
      if ((!$("form[name='club']").valid())) {
       		return false;
    	}
      var courts = $('#num-courts').val();
      $("#new-club").hide();
      $("#new-club-btn").removeClass("hidden");
      for (i = 1; i-1 < courts; i++) {
        $("#court-name").append(
          '<div><label class="court-label-l float label-user">Nombre de la pista:</label><input type="text" name="court[court'+i+']" id="court-'+i+'" class="court-text-l form-control"></input></div><br>'
        );
        $("#court-sport").append(
          '<div><label class="court-label-r float label-user">Deporte:</label><input type="text" name="court[sport'+i+']" id="sport-'+i+'" class="court-text-r form-control"></input></div><br>'

        );
      }

    };
    rulesClub1();

  });

  $document.on("click", ".user-submit", function () {
      function rulesUser() {
        $("form[name='user']").validate({
        rules: {
            "user[email]": {
            required: true,
            email: true
          },
            "user[password]": {
            required: true,
            minlength: 6
          },
            "user[password_confirmation]": {
            required: true,
            minlength: 6
          }
        },
        messages: {
            "user[password]": {
            required: "Es necesario un password",
            minlength: "Su password ha de contener un mínimo de 6 caracteres"
          },
            "user[password_confirmation]": {
            required: "Es necesario un password",
            minlength: "Su password ha de contener un mínimo de 6 caracteres"
          },
          "user[email]": "Por favor introduzca una dirección de email correcta"
        },
        submitHandler: function(form) {
          form.submit();
        }
      });
    // });
    };
    rulesUser();
  });

});
