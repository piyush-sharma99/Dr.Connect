var db = firebase.firestore();
//storing doctor firebase data//

function prescription(){
	var inputPatname = document.getElementById("patname").value;
	var inputDocnum = document.getElementById("docnum").value;
	var inputMed1 = document.getElementById("med1").value;
	var inputMed2 = document.getElementById("med2").value;
	var inputMed3 = document.getElementById("med3").value;
	var inputSum3= document.getElementById("sum3").value;


	db.collection("Prescription").doc(inputDocnum).set({
  patname: inputPatname,
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
