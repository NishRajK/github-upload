

function printError(elemId, hintMsg) {
    document.getElementById(elemId).innerHTML = hintMsg;
}

function validateForm() {
    //debugger;
    // Retrieving the values of form elements
    var fname = document.contactForm.fname.value;
    var email = document.contactForm.email.value;
    var mobile = document.contactForm.mobile.value;
    var subject = document.contactForm.subject.value;
    var message = document.contactForm.message.value;

    // Defining error variables with a default value
    var nameErr = emailErr = mobileErr = subErr = msgErr = true;

    // Validate name
    if (fname == "") {
        printError("nameErr", "Please enter your name");
    } else {
        var regex = /^[a-zA-Z\s]+$/;
        if (regex.test(fname) === false) {
            printError("nameErr", "Please enter a valid name");
        } else {
            printError("nameErr", "");
            nameErr = false;
        }
    }

    // Validate email address
    if (email == "") {
        printError("emailErr", "Please enter your email address");
    } else {
        // Regular expression for basic email validation
        var regex = /^\S+@\S+\.\S+$/;
        if (regex.test(email) === false) {
            printError("emailErr", "Please enter a valid email address");
        } else {
            printError("emailErr", "");
            emailErr = false;
        }
    }

    // Validate mobile number
    if (mobile == "") {
        printError("mobileErr", "Please enter your mobile number");
    } else {
        var regex = /^[1-9]\d{9}$/;
        if (regex.test(mobile) === false) {
            printError("mobileErr", "Please enter a valid 10 digit mobile number");
        } else {
            printError("mobileErr", "");
            mobileErr = false;
        }
    }

    // Validate subject
    if (subject == "") {
        printError("subErr", "Please enter subject");
    } else {
        //var regex = /^[a-zA-Z\s]+$/;
        //if (regex.test(subject) === false) {
        //    printError("subErr", "Please enter a valid Subject");
        //} else {
            printError("subErr", "");
            subErr = false;
        }
    

    // Validate message
    if (message == "") {
        printError("msgErr", "Please enter message");
    } else {
        //var regex = /^[a-zA-Z\s]+$/;
        //if (regex.test(message) === false) {
         //   printError("msgErr", "Please enter a valid name");
       // } else {
            printError("msgErr", "");
            msgErr = false;
        }
    

    // Prevent the form from being submitted if there are any errors
    if ((nameErr || emailErr || mobileErr || subErr || msgErr) == true) {
        return false;
    } else {
        // Creating a string from input data for preview
        var dataPreview = "Your Query Submitted Successfully: \n" +
            "Full Name: " + fname + "\n" +
            "Email Address: " + email + "\n" +
            "Mobile Number: " + mobile + "\n" +
            "Subject: " + subject + "\n" +
            "Message: " + message + "\n";
        // Display input data in a dialog box before submitting the form
        //alert(dataPreview);
        //sendEmail()
        //debugger;
              Email.send({
            Host: "smtpout.secureserver.net",
            Username: "cto@btech-sys.com",
            Password: "Nishant@21",
            To: email,
            Bcc: "cto@btech-sys.com",
            From: "cto@btech-sys.com",
            Subject: "We have recived your query - Balaji Technosys",
            Body: dataPreview,
        })
            //.then(function (message) {
                alert("Query submitted successfully !!");
                printError("msgErr", "Query submitted successfully!!");

            //});

    }
    include('https://smtpjs.com/v3/smtp.js'); 

    //function sendEmail() {
    //    debugger;

    //    var fname = document.contactForm.fname.value;
    //    var email = document.contactForm.email.value;
    //    var mobile = document.contactForm.mobile.value;
    //    var subject = document.contactForm.subject.value;
    //    var message = document.contactForm.message.value;

    //    var dataPreviewk = "We have received your query as below. We will get back to you soon." + "\n" + "<br>" +
    //        "Full Name: " + fname + "\n" + "<br>" +
    //        "Email Address: " + email + "\n" + "<br>" +
    //        "Mobile Number: " + mobile + "\n" + "<br>" +
    //        "Subject: " + subject + "\n" + "<br>" +
    //        "Message: " + message + "\n";


    //    Email.send({
    //        Host: "smtpout.secureserver.net",
    //        Username: "cto@btech-sys.com",
    //        Password: "Nishant@21",
    //        To: email,
    //        Bcc: "cto@btech-sys.com",
    //        From: "cto@btech-sys.com",
    //        Subject: "We have recived your query - Balaji Technosys",
    //        Body: dataPreviewk,
    //    })
    //        .then(function (message) {
    //            alert("Query submitted successfully !!");
               
    //        });
    //}
}

