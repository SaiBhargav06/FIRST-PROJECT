function test() {
  //This technique is for getting data from the input spaces.
  var uid = document.getElementById("name").value;
  var pass = document.getElementById("mail").value;
  var msg = document.getElementById("message").value;

  //This technique of for setting the data to the input pages.
  var user = localStorage.setItem("uid", uid);
  var pas = localStorage.setItem("pass", pass);
  var mss = localStorage.setItem("msg", msg);

  //This technique is for retrieving data from the input spaces.
  var user = localStorage.getItem("uid", uid);
  var pas = localStorage.getItem("pass", pass);
  var mss = localStorage.getItem("msg", msg);

  var a, b, c;
  a = "Sai Bhargav";
  b = "saibhargavkommu06@gmail.com";

  if (a == user && b == pass) {
    alert("Message taken thank you for your response! ");
  } else {
    alert("Identify yourself first to take the message");
  }
}
