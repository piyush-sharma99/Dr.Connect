<<<<<<< HEAD
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

  // Get a reference to the database service
  var db = firebase.firestore();
  
  var currentUser = firebase.auth().currentUser;


  firebase.auth().onAuthStateChanged(function(user) {
      if (user) {
     var example = user.email;
      var docRef = db.doc("Doctor/"+example+"Reservation/");
      docRef.get().then(function (doc) {
          if (doc.exists) {
              const listitem = document.querySelector("#list2-item");
              listitem.innerHTML = "<div id=list2-item><p>" + doc.data().date + " " + doc.data().name + "<p></div>";
              // alert(JSON.stringify(doc.data(), null, 4));
              console.log("Document data:", doc.data());
      
      
          } else {
              // doc.data() will be undefined in this case
              console.log("No such document!");
          }
>>>>>>> 674464f12a7743c61975b61bf951ca6cc1180bc0
      }).catch(function (error) {
          console.log("Error getting document:", error);
      });
          } else {
            // No user is signed in.
          }
<<<<<<< HEAD
        });*/
      
      //  var x = document.querySelectorAll;
  
  //const name = document.querySelector("#docname");
 // var docRef = db.collection("Doctor").document("dylan22@gmail.com").collection("Appointment").document(documentReference.getId());
    //  docRef.get().then(function (doc) {
      //    if (doc.exists) {
             // const listitem = document.querySelector("#list-item");
             // listitem.innerHTML = "<div id=list-item><p>" + doc.data().Fname + " "+ doc.data().Gay + " " + "</p></div>";
              // alert(JSON.stringify(doc.data(), null, 4));
             
       //       console.log("Document data:", doc.data());
      
      
      //    } else {
              // doc.data() will be undefined in this case
      //        console.log("No such document!");
      //    }
     //   })

=======
        });
      
>>>>>>> 674464f12a7743c61975b61bf951ca6cc1180bc0

        db.collection("Doctor/dylan22@gmail.com/Appointment").get().then(function(querySnapshot) {
          querySnapshot.forEach(function(doc) {
              // doc.data() is never undefined for query doc snapshots
              console.log(doc.id, " => ", doc.data());
              const listitem = document.querySelector("#list-item");
              listitem.innerHTML += "<div><p>"+ doc.data().Name + " " + doc.data().Gay + "</p></div>";

          });
      });
        
  
  
  
  
  
  




