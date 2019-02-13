var db = firebase.firestore();
// storing patient firebase data//
function storedata1(){
	var inputFname = document.getElementById("fname_field").value;
	var inputSname = document.getElementById("sname_field").value;
	var inputAddress = document.getElementById("address_field").value;
	var inputPhone = document.getElementById("phone_field").value;
	var inputTown = document.getElementById("town_field").value;
	var inputEir = document.getElementById("eir_field").value;
	var inputPatID = document.getElementById("patID_field").value;
  var inputPass = document.getElementById("pass_field").value;


	db.collection("Patient").doc(inputPatID).set({
  Fname: inputFname,
	Sname: inputSname,
	phone: inputPhone,
	Address: inputAddress,
	Town: inputTown,
	Eircode: inputEir,
	PatID: inputPatID,
	Password: inputPass


})
.then(function() {
    console.log("Document successfully written!");
})
.catch(function(error) {
    console.error("Error writing document: ", error);
});
}

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


	db.collection("Doctor").doc(inputDocID).set({
  Fname: inputFname,
	Sname: inputSname,
	phone: inputPhone,
	Address: inputAddress,
	Town: inputTown,
	Eircode: inputEir,
	DocID: inputDocID,
	Password: inputPass


})
.then(function() {
    console.log("Document successfully written!");
})
.catch(function(error) {
    console.error("Error writing document: ", error);
});
}
