
  // Get a reference to the database service
  var db = firebase.firestore();
  
  var currentUser = firebase.auth().currentUser;


  firebase.auth().onAuthStateChanged(function(user) {
      if (user) {
     var example = user.email;
      var docRef = db.doc("Reservation/");
      docRef.get().then(function (doc) {
          if (doc.exists && doc.data().date == "1/11/11") {
              const listitem = document.querySelector("#list2-item");
              listitem.innerHTML = "<div id=list2-item><p>" + doc.data().date + " " + doc.data().name + "<p></div>";
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
      






