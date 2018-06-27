const $form = $('#signup');

$form.validate({
  rules: {
    Signusername: {
		required: true,
		minlength:2
	},
	Signemail: {
	  required: true,
	  email: true
	},
	Signpassword: {
	  minlength: 6,
	  required: true
    },
    Signcfpassword:{
        required: true,
        minlength: 6,
        equalTo: "[name='Signpassword']"
    }
  },
	messages:{
		Signusername:{
            required:"*Enter your username"
        },	
        Signemail: {
            required:"*Enter your email address"
          },
          Signpassword: {
            required: "*Enter your password"
          },
          Signcfpassword:{

            required:"*Confirm your password"

          }


    },
    submitHandler: function(form) {
        $username=$('#Signusername').val();
        $email = $('#Signemail').val();
        $.ajax({
            url: '../tspace/datahandle/signup.handle.php',
            data: $(form).serialize(),
            type: 'POST',
            success: function(data) {
    
                if(data=='same username'){
                    $('.username-error p').html(`Username:${$username} already existed!`).css('color','red');
                 }else if(data=='same email'){

                    $('.username-error p').html(`Email:${$email} already existed!`).css('color','red');
                 }
                 else{
                    $('.username-error p').html(`Congratulation ${$username} ，Welcome to T-Space !`).css('color','black');
                    $('#signup').trigger('reset');
            }
        }
        });
　}

});