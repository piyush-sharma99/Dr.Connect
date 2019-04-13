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
   var example = user.uid;
    var docRef = db.doc("Doctor/"+ example);
    docRef.get().then(function (doc) {
        if (doc.exists) {
            const listitem = document.querySelector("#list-item");
            listitem.innerHTML = "<div id=list-item><p>" + doc.data().Fname + " " + doc.data().Sname + "<br>" + doc.data().DocID + "<br>" + doc.data().email + "<p></div>";
            // alert(JSON.stringify(doc.data(), null, 4));
            console.log("Document data:", doc.data());
    
    
        } 
        
    }).catch(function (error) {
        console.log("Error getting document:", error);
    });
        } else {
          // No user is signed in.
        }
      });
    
    
      

//const name = document.querySelector("#docname");






