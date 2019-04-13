var db = firebase.firestore();

//storing doctor firebase data//
function storedata2(){

  var inputPass = document.getElementById("dpass_field").value;
	var inputEmail = document.getElementById("demail_field").value;
	
	
	firebase.auth().createUserWithEmailAndPassword(inputEmail,inputPass);{
	
			// insert any document you want here
			console.log("Document successfully written!");
		
			
		
	}


		
}