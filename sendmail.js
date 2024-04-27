// function SendMail(){
//  console.log("sendmail..")

//     var params ={
//         from_name:document.getElementById("fullName").value,
//         email_id:document.getElementById("email_id").value,
//         message:document.getElementById("message").value
//     }
//     // emailjs.send("service_s274eya", "template_mqv1gi7", params).then(function (res){
//     //     alert("success"+res.status)
//     // })
//     const serviceID = 'default_service';
//     const templateID = 'template_mqv1gi7';

//     emailjs.send(serviceID, templateID, params)
//         .then(() => {
//             // btn.value = 'Send Email';
//             alert('Sent!');
//         }, (err) => {
//             // btn.value = 'Send Email';
//             alert(JSON.stringify(err));
//         });
// }
function SendMail(event) {
    event.preventDefault(); // Prevents the default form submission behavior

    console.log("sendmail..");

    var params = {
        from_name: document.getElementById("fullName").value,
        email_id: document.getElementById("email_id").value,
        message: document.getElementById("message").value
    };

    const serviceID = 'default_service';
    const templateID = 'template_mqv1gi7';

    emailjs.send(serviceID, templateID, params)
        .then(() => {
            alert('Sent!');
        })
        .catch((err) => {
            alert(JSON.stringify(err));
        });
}
