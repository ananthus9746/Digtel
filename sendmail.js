// // function SendMail(){
// //  console.log("sendmail..")

// //     var params ={
// //         from_name:document.getElementById("fullName").value,
// //         email_id:document.getElementById("email_id").value,
// //         message:document.getElementById("message").value
// //     }
// //     // emailjs.send("service_s274eya", "template_mqv1gi7", params).then(function (res){
// //     //     alert("success"+res.status)
// //     // })
// //     const serviceID = 'default_service';
// //     const templateID = 'template_mqv1gi7';

// //     emailjs.send(serviceID, templateID, params)
// //         .then(() => {
// //             // btn.value = 'Send Email';
// //             alert('Sent!');
// //         }, (err) => {
// //             // btn.value = 'Send Email';
// //             alert(JSON.stringify(err));
// //         });
// // }

function SendMail(event) {
    event.preventDefault();
    console.log("sendmail..");

    // Show loading indicator
    document.querySelector('.submit-loader').style.display = 'block';
    document.querySelector('.text-loader').style.display = 'block';
    document.querySelector('.s-loader').style.display = 'block';

    var params = {
        from_name: document.getElementById("fullName").value,
        email_id: document.getElementById("email_id").value,
        message: document.getElementById("message").value
    };

    const serviceID = 'default_service';
    const templateID = 'template_mqv1gi7';

    emailjs.send(serviceID, templateID, params)
        .then(() => {
            alert('Message sent successfully!');
            // Reset form inputs
            document.getElementById("fullName").value = "";
            document.getElementById("email_id").value = "";
            document.getElementById("message").value = "";

            // Hide loading indicator
            document.querySelector('.submit-loader').style.display = 'none';
        })
        .catch((err) => {
            alert('Failed to send message. Please try again later.');
            // Hide loading indicator
            document.querySelector('.submit-loader').style.display = 'none';
            console.error('Error:', err);
        });
}


function Subscribe(event) {
    event.preventDefault(); // Prevents the default form submission behavior

    console.log("Subscribing...");

    var email = document.getElementById("email").value;

    // Show loading indicator
    var loader = document.createElement("div");
    loader.className = "loading";
    loader.innerHTML = "Subscribing...";
    document.querySelector('.subscribe-form').appendChild(loader);

    var params = {
        email: email
    };

    const serviceID = 'default_service';
    const templateID = 'template_t8n8x4f';

    emailjs.send(serviceID, templateID, params)
        .then(() => {
            // Remove loading indicator
            document.querySelector('.subscribe-form').removeChild(loader);

            // Display subscription success message
            var successMessage = document.createElement("div");
            successMessage.className = "success";
            successMessage.innerHTML = "Subscribed successfully!";
            document.querySelector('.subscribe-form').appendChild(successMessage);

            // Clear email input
            document.getElementById("mc-email").value = "";
        })
        .catch((err) => {
            // Remove loading indicator
            document.querySelector('.subscribe-form').removeChild(loader);

            alert('Failed to subscribe. Please try again later.');
            console.error('Error:', err);
        });
}
