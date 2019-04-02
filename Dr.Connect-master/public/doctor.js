var app_firebase = {};
(function(){
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










var docRef = db.doc("Doctor/example");
//const name = document.querySelector("#docname");
const listitem = document.querySelector("#list-item");


docRef.get().then(function(doc) {
    if (doc.exists) {
       
        listitem.innerHTML = "<div id=list-item><p>" + doc.data().Fname +" "+ doc.data().Sname + "<br>" + doc.data().DocID + "<br>"+ doc.data().email + "<p></div>";
       // alert(JSON.stringify(doc.data(), null, 4));
        console.log("Document data:", doc.data());
        
    
    } else {
        // doc.data() will be undefined in this case
        console.log("No such document!");
    }
}).catch(function(error) {
    console.log("Error getting document:", error);
});


/*
db.doc("Doctor/example/usersname/name").get().then(function(querySnapshot) {
    querySnapshot.forEach(function(doc) {
        name.innerHTML= doc.data();
        console.log(doc.id, " => ", doc.data());
    });
});

*/


btnName.addEventListener('click', e => {
    let user = firebase.auth().currentUser;    
    console.log(user);
    if(user)
        console.log(db.collection("users").doc(uuser.uid))
    else
        alert('user not logged in')
});