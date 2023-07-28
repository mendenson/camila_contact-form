function sendMail(){
    var params = {
        email: document.getElementById("email").value,
        message: document.getElementById("message").value,
    };


    const serviceID = "service_xk53fha";
    const templateID = "template_o9hutsf";

    emailjs.send(serviceID,templateID,params)
    .then((res) =>{
        document.getElementById("email").value = "",
        document.getElementById("message").value = "";
        console.log(res);
        alert("your message sent sucessfully");
    })
    .catch((err) => console.log(err));
}