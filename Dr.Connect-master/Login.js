

firebase.auth().onAuthStateChanged(function(user) {
  if (user) {
    document.getElementById("input1").style.display = "block";
    window.location.href = "Sign.html";
  } else {
    document.getElementById("input1").style.display = "none";

  }
});


function login(){
  var email = document.getElementById("email_field").value;
  var password = document.getElementById("pass_field").value;

  firebase.auth().createUserWithEmailAndPassword(email, password).catch(function(error) {
    // Handle Errors here.
    var errorCode = error.code;
    var errorMessage = error.message;

    Window.alert("Error : " + errorMessage);
  });

}



