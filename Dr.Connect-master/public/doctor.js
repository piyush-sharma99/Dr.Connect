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
   var example = user.email;
    var docRef = db.doc("Doctor/"+ example);
    docRef.get().then(function (doc) {
        if (doc.exists) {
            const listitem = document.querySelector("#list-item");
            listitem.innerHTML = "<div id=list-item><p>" + doc.data().Fname + " " + doc.data().Sname + "<br>" + doc.data().DocID + "<br>" + doc.data().email + "<p></div>";
            // alert(JSON.stringify(doc.data(), null, 4));
            console.log("Document data:", doc.data());
    
    
        } /*else {
            const all = document.querySelector("#all");
            all.innerHTML = "<div id=dowork><h2> Doctor Sign Up</h2> <p>Please input your details</p><input type='email' placeholder='Email....' id='demail_field'><input type='text' placeholder='Doctor ID....' id='docID_field'><br><input type='text' placeholder='First Name....' id='dfname_field'><input type='text' placeholder='Second Name....' id='dsname_field'><br><input type='text' placeholder='Phone Number....' id='dphone_field'> <input type='text' placeholder='Address....' id='daddress_field'><br> <input type='text' placeholder='Town....' id='dtown_field'> <input type='text' placeholder='Eircode....' id='deir_field'><br> <a href='doctor.html'><button id='submit_btn' onclick='storedata2()'>Submit</button></a><br></div>"

            console.log("No such document!");
    }*/
    }).catch(function (error) {
        console.log("Error getting document:", error);
    });
        } else {
          // No user is signed in.
        }
      });
    
    
      

//const name = document.querySelector("#docname");






