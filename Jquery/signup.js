$.validator.addMethod('phnno_matches', function (value, element) {
    return this.optional(element) || /^[7-9][0-9]{9}$/.test(value);
}, 'Please enter a valid phone number');

  $(document).ready(function() {
      $("#registrationForm").validate({
        rules: {
            email: {
              required: true,
              email: true,
            },
            password: {
              required: true,
              minlength: 8,
            },
            phnno: {
                required: true,
                phnno_matches:true,
                minlength:10,
                maxlength:10,
            }
          },
          messages: {
            email: {
                required:'Please enter an email address.',
                email : 'Enter a valid email.' 
            },
            password: {
              minlength: 'Password must be at least 8 characters long'
            },
            phnno: {
                required:'Please enter an Phone number.',
                phnno : 'Enter a valid Phone number.'    
            }
        }
      });

  });