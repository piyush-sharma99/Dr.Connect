var db = firebase.firestore();

function storedata(){
	var inputFname = document.getElementById("fname_field").value;
	var inputSname = document.getElementById("sname_field").value;
	var inputAddress = document.getElementById("address_field").value;
	var inputPhone = document.getElementById("phone_field").value;
	var inputTown = document.getElementById("town_field").value;
	var inputEir = document.getElementById("eir_field").value;
	var inputUname = document.getElementById("uname_field").value;

	db.collection("patients").doc(inputUname).set({
    fName: inputFname,
	sName: inputSname,
	phone: inputPhone,
	address: inputAddress,
	town: inputTown,
	Eircode: inputEir
})
.then(function() {
    console.log("Document successfully written!");
})
.catch(function(error) {
    console.error("Error writing document: ", error);
});
}