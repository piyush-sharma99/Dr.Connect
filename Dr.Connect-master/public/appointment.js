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
let user = firebase.auth().currentUser;
var currentUser = firebase.auth().currentUser;firebase.auth().onAuthStateChanged(function (user) {
 /* if (user) {
    
    db.collection("Doctor/" + user.uid + "/Appointment").get().then(function (querySnapshot) {
      querySnapshot.forEach(function (doc) {
        if (doc.exists) {
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
*/
firebase.auth().onAuthStateChanged(function (user) {
  if (user) {
    
    db.collection("Doctor/" + user.uid + "/Appointment").get().then(function (querySnapshot) {
      querySnapshot.forEach(function (doc) {
        if (doc.exists) {
          // doc.data() is never undefined for query doc snapshots
          var dateString = doc.data().Date.toDate();
          dateString = new Date(dateString).toUTCString();
          dateString = dateString.split(' ').slice(0, 4).join(' ');
          console.log(dateString);
          console.log(doc.id, " => ", doc.data());
          const listitem1 = document.querySelector("#list-itemAccepted");
          listitem1.innerHTML += "<div id='styling'><p>" + doc.data().Name + " " + dateString + "<br> " + doc.data().Address + "</p></div>";

        }
      });
    });
  } else {
    const listitem1 = document.querySelector("#list-itemAccepted");
          listitem1.innerHTML = "<div><p> There are no Current appointments</p></div>";
  }
});
})