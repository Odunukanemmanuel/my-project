function validate(){
  // alert("working")

  const name = document.myForm.name.value;
  const phone = document.myForm.phone.value;
  const email = document.myForm.email.value;
  const message = document.myForm.message.value;

  //error
  const name_err = document.querySelector(".name-err")
  const phone_err = document.querySelector(".phone-err")
  const email_err = document.querySelector(".email-err")
  const text_err = document.querySelector(".text-err")

  if (name == '') {
    name_err.textContent = "Name field is required";
    return false;
  } else {
    name_err.textContent = '';
  }
  if (phone == '') {
    phone_err.textContent = "phone requires a number";
    return false;
  }
  if (email == '') {
    email_err.textContent = "Email field is required";
    return false;
  }

  if (message == '') {
    text_err.textContent = "Text field is required";
    return false;
  }
}

function sendMail(){
  var params = {
    name: document.getElementById("name").value ,
    Number: document.getElementById("phonenumber").value ,
    email: document.getElementById("email").value ,
    message: document.getElementById("message").value ,
  };
  const serviceID = "service_10p5bwo";
  const templateID = "template_rfimrgl";

  emailjs
  .send(serviceID, templateID, params)
    .then((res) => {
        document.getElementById("name").value = "";
        document.getElementById("phonenumber").value = "";
        document.getElementById("email").value = "";
        document.getElementById("message").value = "";
        console.log(res);
        alert("your message sent successfully");
      })
    .catch(err => console.log(err))
}