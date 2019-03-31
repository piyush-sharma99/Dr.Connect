var db = firebase.firestore();

//storing doctor firebase data//
function storedata2(){
	var inputFname = document.getElementById("dfname_field").value;
	var inputSname = document.getElementById("dsname_field").value;
	var inputAddress = document.getElementById("daddress_field").value;
	var inputPhone = document.getElementById("dphone_field").value;
	var inputTown = document.getElementById("dtown_field").value;
	var inputEir = document.getElementById("deir_field").value;
	var inputDocID = document.getElementById("docID_field").value;
  var inputPass = document.getElementById("dpass_field").value;
	var inputEmail = document.getElementById("demail_field").value;

	firebase.auth().createUserWithEmailAndPassword(inputEmail, inputPass).catch(function(error) {
	  // Handle Errors here.
	  var errorCode = error.code;
	  var errorMessage = error.message;
	  window.alert("Error : " + errorMessage);
	});


	db.collection("Doctor").doc(inputDocID).set({
	email: inputEmail,
  Fname: inputFname,
	Sname: inputSname,
	phone: inputPhone,
	Address: inputAddress,
	Town: inputTown,
	Eircode: inputEir,
	DocID: inputDocID

})
.then(function() {
    console.log("Document successfully written!");
})
.catch(function(error) {
    console.error("Error writing document: ", error);
});
}
