function patient(){
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

var currentUser = firebase.auth().currentUser;

firebase.auth().onAuthStateChanged(function(user) {
  if (user) {
 var example = document.getElementById("patnum_field").value;;
  var docRef = db.doc("Patient/"+ example);
  docRef.get().then(function (doc) {
      if (doc.exists) {
          db.collection(docRef).get().then(function(querySnapshot) {
              querySnapshot.forEach(function(doc) {
                  // doc.data() is never undefined for query doc snapshots
                  console.log(doc.id, " => ", doc.data());
                  const listitem = document.querySelector("#list-item");
                  listitem.innerHTML += "<div><p>"+ doc.data().PatientNumber + " = " + doc.data().PatientNumber + doc.data().PatientNumber2 + " = " + doc.data().PatientAddress + doc.data().PatientSick + " = " + doc.data().doctorNumber + doc.data().description +"</p></div>";
    
              });
          });
  
  
      } else {
          // doc.data() will be undefined in this case
          console.log("No such document!");
      }
  }).catch(function (error) {
      console.log("Error getting document:", error);
  });
      } else {
        // No user is signed in.
      }
    });
  
};
    
