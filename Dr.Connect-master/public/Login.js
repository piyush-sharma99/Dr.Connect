

function login()
{

var userEmail = document.getElementById("demail_field").value;
var userPass = document.getElementById("dpass_field").value;

firebase.auth().signInWithEmailAndPassword(userEmail, userPass).catch(function(error) {
  // Handle Errors here.
  var errorCode = error.code;
  var errorMessage = error.message;
  firebase.auth().onAuthStateChanged(function(user) {
    if (user) {
      // User is signed in.
  window.location.href = "doctor.html";
    } else {
      // No user is signed in.
    }
  });

  window.alert("Error : "+ errorMessage);


});



}
