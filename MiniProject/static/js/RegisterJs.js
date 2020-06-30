function validate() {
  console.log("hello");
  var u = document.getElementById("user").value;
  var e = document.getElementById("email").value;
  var p1 = document.getElementById("pass1").value;
  var p2 = document.getElementById("pass2").value;
  //var m = document.getElementById("mob").value;
  var ereg = /^([\.-\w]+)@([\.-\w]+).([a-z]{2,10})$/;
  //var mreg = /^[6-9]\d{9}$/;
  if (u.trim() == "" || p1.trim() == "") {
    alert("enter valid Username or Password");
    return false;
  } else if (!ereg.test(e)) {
    alert("Enter valid email id");
    return false;
  } else if (p1 != p2) {
    alert("Password not matching");
    return false;
  } else {
    return true;
  }
}
