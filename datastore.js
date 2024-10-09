function test1() {
  //Retrieving the data from the html forms
  var uid = document.getElementsByClassName("uname").value;
  var pass = document.getElementsByClassName("pass").value;

  //Setting the data from the html forms
  var user = localStorage.setItem("uid", uid);
  var password = localStorage.setItem("pass", pass);

  //Getting the data from the html forms
  var user = localStorage.getItem("uid", uid);
  var password = localStorage.getItem("pass", pass);

  var a, b;
  a = "SaiBhargav0306";
  b = "Sai@123";
  if (a == user && b == pass) {
    alert(
      "Sorry for the inconvienience but the username and password has already been taken"
    );
  } else {
    alert("Registartion successfull with the given username and password");
  }
}
