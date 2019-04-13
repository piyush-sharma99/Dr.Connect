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
  closed.innerHTML += "<div><p></div></p>"
  db.collection("Patient").get().then(function(querySnapshot) {
    querySnapshot.forEach(function(doc) {
        if(patientEmail == doc.data().PatientEmail){
          listitem.innerHTML = "<div><p> <br> Patient Number: " + doc.data().PatientNumber + "<br> Patient Email:  " + doc.data().PatientEmail + "<br> Patient Address: " + doc.data().PatientAddress + "<br> PatientID:" + doc.data().PatID +  "</p></div>";
        console.log(doc.id, " => ", doc.data());
      
      
        }
        else{
          listitem.innerHTML = "<div><p>There is no Information on this patient available. Please type in a new user email!</p></div>";
      }
    });
    
      
    
});
  
  


}

































