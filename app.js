function sendMail(){
    var params = {
        name: document.getElementById("name").value,
        email: document.getElementById("email").value,
        message: document.getElementById("message").value,
    }
    const serviceID = "service_bik7a2q";
const templateID = "template_ussi8nk";
emailjs.send(serviceID,templateID,params)
.then(
    res =>{
        name: document.getElementById("name").value = "";
        email: document.getElementById("email").value = "";
        message: document.getElementById("message").value = "";
        console.log(res);
        alert("your message sent successfully");
    })
    .catch(err=>console.log(err))
}