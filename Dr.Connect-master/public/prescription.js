
//storing doctor firebase data//

function prescription(){

var db = firebase.firestore();


	var inputPatID = document.getElementById("patID_field").value;
	var inputDocnum = document.getElementById("docnum_field").value;
	var inputMed1 = document.getElementById("med1_field").value;
	var inputMed2 = document.getElementById("med2_field").value;
	var inputMed3 = document.getElementById("med3_field").value;
	var inputSum3= document.getElementById("Sum3_field").value;

	db.collection("Prescription").doc(inputDocnum).set({
  patID: inputPatID,
	docnum: inputDocnum,
	med1: inputMed1,
	med2: inputMed2,
	med3: inputMed3,
	description: inputSum3



})
.then(function() {
    console.log("Document successfully written!");
})
.catch(function(error) {
    console.error("Error writing document: ", error);
});
}

// navigation button//
	function openNav() {
	document.getElementById("mySidenav").style.width = "250px";
	document.getElementById("main").style.marginLeft = "250px";
}

function closeNav() {
	document.getElementById("mySidenav").style.width = "0";
	document.getElementById("main").style.marginLeft= "0";
}
