$(document).ready(function(){
  $document.on("click", ".form-submit", function () {
      $(function() {
        $("form[name='carlos']").validate({
        rules: {
            email: {
            required: true,
            email: true
          },
          user[password: {
            required: true,
            minlength: 6
          },
          user[password_confirmation]: {
            required: true,
            minlength: 6
          }
        },
        messages: {
          user[password]: {
            required: "Please provide a password",
            minlength: "Your password must be at least 5 characters long"
          },
          user[password_confirmation]: {
            required: "Please provide a password",
            minlength: "Your password must be at least 5 characters long"
          },
          user[email]: "Please enter a valid email address"
        },
        submitHandler: function(form) {
          form.submit();
        }
      });
    });
  });
//
// });
