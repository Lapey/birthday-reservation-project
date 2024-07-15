function emailSend(){

        var name = document.getElementById('name').value;
         var number = document.getElementById('number').value;
          var email = document.getElementById('email').value;

          var messageBody = " Name " +  name  +
          "<br/> Number " + number +
           "<br/> Email " + email; 

           
           Email.send({
            Host: "smtp.elasticemail.com",
            Username: "bisisolesi@gmail.com",
            Password: "E345F187A539FDEFF32F4E257D5479F89927",
            To: 'adebisisolesi@gmail.com',
            From: "bisisolesi@gmail.com",
            Subject: "This is the subject",
            Body: "messageBody"
        }).then(
            message => {
                if(message=='OK'){
                    swal("Reserved!", "You clicked the button!",   "success");
                }
                else{
                    swal("Try again!",  "error");
                }
            }
        );
    }