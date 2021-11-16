var firebaseConfig = {
      apiKey: "AIzaSyDkA_00imuj_hL7BFOyK13UaWxeZexUKfA",
      authDomain: "covid-19-qeqf.firebaseapp.com",
      databaseURL: "https://covid-19-qeqf-default-rtdb.firebaseio.com",
      projectId: "covid-19-qeqf",
      storageBucket: "covid-19-qeqf.appspot.com",
      messagingSenderId: "1027309445611",
      appId: "1:1027309445611:web:a6bd19922336e6bb6939ae"
    };
    
    // Initialize Firebase
firebase.initializeApp(firebaseConfig);

user_name= localStorage.getItem("user_name");
room_name= localStorage.getItem("room_name");
function send(){
msg= document.getElementById("msg").value;
firebase.database().ref(room_name).push({
name: user_name, 
message: msg, 
like: 0
});
document.getElementById("msg").value= "";
} 
function logout(){
localStorage.removeItem("user_name");
localStorage.removeItem("room_name");
window.location= "index.html";

}
function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
         firebase_message_id = childKey;
         message_data = childData;
//Start code

//End code
      } });  }); }
getData();
