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
    let user = firebase.auth().currentUser;
    
	db.collection("Doctor").doc(user.uid).set({
        email: user.email,
      Fname: inputFname,
        Sname: inputSname,
        phone: inputPhone,
        Address: inputAddress,
        Town: inputTown,
        Eircode: inputEir,
        DocID: inputDocID
    
    })
    
    

    
    
    
    }
    