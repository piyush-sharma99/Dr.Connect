var db = firebase.firestore();

//storing doctor firebase data//
function storedata2(){

  var inputPass = document.getElementById("dpass_field").value;
	var inputEmail = document.getElementById("demail_field").value;
 

	firebase.auth().createUserWithEmailAndPassword(inputEmail, inputPass).catch(function(error) {
		// Handle Errors here.
		
	  var errorCode = error.code;
	  var errorMessage = error.message;
		window.alert("Error : " + errorMessage);
	});

		
		
		

	

	

}


	






