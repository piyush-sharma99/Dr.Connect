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
/*firebase.auth().onAuthStateChanged(function(user) {
    if (user) {
   var example = user.email;
   var useremail = usersemail

=======
  firebase.auth().onAuthStateChanged(function(user) {
    if (user) {
   var example = user.email;
    var docRef = db.doc("Doctor/"+ example);
    docRef.get().then(function (doc) {
        if (doc.exists) {
            db.collection("Doctor/"+ example +"/Appointment").get().then(function(querySnapshot) {
                querySnapshot.forEach(function(doc) {
                    // doc.data() is never undefined for query doc snapshots
                    console.log(doc.id, " => ", doc.data());
                    const listitem = document.querySelector("#list-item");
                    listitem.innerHTML += "<div><p>"+ doc.data().name + " = " + doc.data().date + "</p></div>";
      
                });
            });
    
    
        } else {
            // doc.data() will be undefined in this case
            console.log("No such document!");
        }
>>>>>>> parent of 9ef8341... Revert "major changes includes all main features"
    }).catch(function (error) {
        console.log("Error getting document:", error);
    });
        } else {
          // No user is signed in.
        }
<<<<<<< HEAD
      });
    */

firebase.auth().onAuthStateChanged(function (user) {
  if (user) {
    useremail = user.email;
    db.collection("Doctor/" + useremail + "/Appointment").get().then(function (querySnapshot) {
      querySnapshot.forEach(function (doc) {
        if (doc.data().Status == "Wait") {
          // doc.data() is never undefined for query doc snapshots
          var dateString = doc.data().Date.toDate();
          dateString = new Date(dateString).toUTCString();
          dateString = dateString.split(' ').slice(0, 4).join(' ');
          console.log(dateString);
          console.log(doc.id, " => ", doc.data());
          const listitem = document.querySelector("#list-item");
          listitem.innerHTML += "<div><p>" + doc.data().Name + " " + dateString + "</p></div>";

        }
      });
    });
  } else {
    const listitem = document.querySelector("#list-item");
          listitem.innerHTML = "<div><p> There is no Current appointments to be accepted </p></div>";
  }
});

firebase.auth().onAuthStateChanged(function (user) {
  if (user) {
    useremail = user.email;
    db.collection("Doctor/" + useremail + "/Appointment").get().then(function (querySnapshot) {
      querySnapshot.forEach(function (doc) {
        if (doc.data().Status == "Accepted") {
          // doc.data() is never undefined for query doc snapshots
          var dateString = doc.data().Date.toDate();
          dateString = new Date(dateString).toUTCString();
          dateString = dateString.split(' ').slice(0, 4).join(' ');
          console.log(dateString);
          console.log(doc.id, " => ", doc.data());
          const listitem1 = document.querySelector("#list-itemAccepted");
          listitem1.innerHTML += "<div><p>" + doc.data().Name + " " + dateString + "</p></div>";

        }
      });
    });
  } else {
    const listitem1 = document.querySelector("#list-itemAccepted");
          listitem1.innerHTML = "<div><p> There is no Current appointments to be accepted </p></div>";
  }
});

