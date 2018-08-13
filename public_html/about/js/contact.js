$(document).ready(function () {
  const baseUrl = "http://localhost:8080"
  var user, to, subject, text;
  $("#send_email").click(function () {
    // enter your email account that you want to recieve emails at.
    to = "apidfc42@gmail.com";
    name = $("#name").val();
    user = $("#email").val();
    text = $("#message").val();
    // $("#message").text("Sending E-mail...Please wait");
    $.get(`${baseUrl}/send`, {
      to: to,
      name: name,
      user: user,
      text: text
    }, function (data) {
      if (data === 'sent') {
        alert('Thank you!')
        console.log('Message sent')
      }
    });
  });
});