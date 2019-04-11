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
    var inputEmail = document.getElementById("demail_field").value;
   
    var currentUser = firebase.auth().currentUser;


firebase.auth().onAuthStateChanged(function(user) {
    if(user){
        var uid = user.uid
    db.collection("Doctor").doc(uid).set({

        email: inputEmail,
      Fname: inputFname,
        Sname: inputSname,
        phone: inputPhone,
        Address: inputAddress,
        Town: inputTown,
        Eircode: inputEir,
        DocID: inputDocID
    
    })
}
})
    
    db.collection("Doctor").doc(inputEmail).collection("Appointment").doc(null).set({
     
    })
    
    
    .then(function() {
        console.log("Document successfully written!");
    })
    .catch(function(error) {
        console.error("Error writing document: ", error);
    });
    }
    