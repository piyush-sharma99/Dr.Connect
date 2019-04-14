var app_firebase = {};
(function () {
  // Initialize Firebase
  var config = {
    apiKey: "AIzaSyD-eemQvHniRe-5D6p2aY0A32PYajdm8yg",
    authDomain: "doctor-connect-5.firebaseapp.com",
    databaseURL: "https://doctor-connect-5.firebaseio.com",
    projectId: "doctor-connect-5",
    storageBucket: "doctor-connect-5.appspot.com",
    messagingSenderId: "358747977546"
  };
  firebase.initializeApp(config);

  app_firebase = firebase;
})()

var db = firebase.firestore();
var listitem = document.querySelector("#list-item");
var closed = document.querySelector("#closed");


function search(){
  var patientEmail = document.getElementById("patientEmail").value;
  console.log(patientEmail);
  
  db.collection("Patient").get().then(function(querySnapshot) {
    querySnapshot.forEach(function(doc) {
        if(doc.data().PatientEmail == patientEmail){
          listitem.innerHTML = "<div><p>Patient Name: "+ doc.data().fName + " " + doc.data().lName + "<br><br> Patient Number:"+ doc.data().PatientNumber + "<br><br> Patient Email:  " + doc.data().PatientEmail + "<br><br> Patient Address: " + doc.data().PatientAddress + "<br><br> PatientID: " + doc.data().PatID +  "</p></div>";
        console.log(doc.id, " => ", doc.data());
      
      
        }
    });
    
      
    
});



  


}

































