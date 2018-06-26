const $form = $('#signup');

$form.validate({
  rules: {
	username: {
		required: true,
		minlength:2
	},
	email: {
	  required: true,
	  email: true
	},
	password: {
	  minlength: 6,
	  required: true
    },
    cfpassword:{
        required: true,
        minlength: 6,
        equalTo: "[name='password']"
    }
  },
	messages:{
		username:{
            required:"Enter your username"
        },	
        email: {
            required:"Enter your email address"
          },
          password: {
            required: "Enter your password"
          },
          cfpassword:{

            required:"Confirm your password"

          }


	}
});