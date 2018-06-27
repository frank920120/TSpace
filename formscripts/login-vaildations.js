const $formlogin = $('#login');

$formlogin.validate({
  rules: {
    username: {
		required: true,
		minlength:2
	},
	password: {
	  minlength: 6,
	  required: true
    }
},
	messages:{
		username:{
            required:"*Enter your username"
        },	
        password: {
            required: "*Enter your password"
          }


    },
    submitHandler: function(form) {
        $.ajax({
            url: '../tspace/datahandle/login.handle.php',
            data: $(form).serialize(),
            type: 'POST',
            success: function(data) {
                if(data==='incorrect username and password'){
                    $('.login-error').html(`Incorrect Username or Password!`).css('color','red');
                 }else{
                    window.location.assign('index.php');
                 }
        }
        });
　}

});