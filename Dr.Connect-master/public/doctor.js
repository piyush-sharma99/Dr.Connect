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
/*
const docRef = firestore.collection("Doctor").doc("example");
const doctordetails= document.querySelector("#doctordetails");
const name = document.querySelector("#docname");

//db.collection("docref").get().then(function(querySnapshot) {
 //   querySnapshot.forEach(function(doc) {
    //    docRef.get({

       //     doctordetails= doc.data().fname
      //  });
      //  doctordetails.innerHTML += "<div class='list-item'><h3>" + doc.data().fname +"</h3></div>";
//    });
//});

getRealtimeUpdates= function(){
docRef.onSnapshot(function (doc){
if (doc && doc.exists) {
    const myData = doc.data(fname);
    docname.innerText= "name : " + myData;
    console.log("saved")
    
    
    
}

})
}


getRealtimeUpdates();*/





var currentUser = firebase.auth().currentUser;


firebase.auth().onAuthStateChanged(function(user) {
    if (user) {
   var example = user.email;
    var docRef = db.doc("Doctor/"+ example);
    docRef.get().then(function (doc) {
        if (doc.exists) {
            const listitem = document.querySelector("#list-item");
            listitem.innerHTML = "<div id=list-item><p>" + doc.data().Fname + " " + doc.data().Sname + "<br>" + doc.data().DocID + "<br>" + doc.data().email + "<p></div>";
            // alert(JSON.stringify(doc.data(), null, 4));
            console.log("Document data:", doc.data());
    
    
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
    
    

//const name = document.querySelector("#docname");





/*
firebase.auth().onAuthStateChanged(function(user) {
    if (user) {
      // User is signed in.
      var displayName = user.displayName;
      var email = user.email;
      var emailVerified = user.emailVerified;
      var photoURL = user.photoURL;
      var isAnonymous = user.isAnonymous;
      var uid = user.uid;
      var providerData = user.providerData;
      // ...
    } else {
      // User is signed out.
      // ...
    }
  });
/*
db.doc("Doctor/example/usersname/name").get().then(function(querySnapshot) {
    querySnapshot.forEach(function(doc) {
        name.innerHTML= doc.data();
        console.log(doc.id, " => ", doc.data());
    });
});

*/

