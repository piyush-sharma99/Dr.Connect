var db = firebase.firestore();

//storing doctor firebase data//
function storedata2(){

  var inputPass = document.getElementById("dpass_field").value;
	var inputEmail = document.getElementById("demail_field").value;
	var random = Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15);
	var inputFname = document.getElementById("dfname_field").value;
	var inputSname = document.getElementById("dsname_field").value;
	var inputAddress = document.getElementById("daddress_field").value;
	var inputPhone = document.getElementById("dphone_field").value;
	var inputTown = document.getElementById("dtown_field").value;
	var inputEir = document.getElementById("deir_field").value;
	var inputDocID = document.getElementById("docID_field").value;
	
	firebase.auth().createUserWithEmailAndPassword(inputEmail,inputPass)
	.then(function (user) {
			// insert any document you want here
			console.log("Document successfully written!");
		
	
		db.collection("Doctor").doc(user.uid).set({
			email: inputEmail,
			Fname: inputFname,
			Sname: inputSname,
			phone: inputPhone,
			Address: inputAddress,
			Town: inputTown,
			Eircode: inputEir,
			DocID: inputDocID
		
		})
		
	})
	.catch(function(error) {
			// handle error here
			console.error("Error writing document: ", error);
	});
	
}