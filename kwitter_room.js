var firebaseConfig = {
      apiKey: "AIzaSyC298xxi15Kn1BMJAu0yE_FogB8GuExGAA",
      authDomain: "kwitter-888ee.firebaseapp.com",
      databaseURL: "https://kwitter-888ee-default-rtdb.firebaseio.com",
      projectId: "kwitter-888ee",
      storageBucket: "kwitter-888ee.appspot.com",
      messagingSenderId: "407715206608",
      appId: "1:407715206608:web:8f4f9a43593750774f15d5"
    };
    firebase.initializeApp(firebaseConfig);
    
    user_name = document.getElementById("user_name").value;
    localStorage.setItem("user_name", user_name);
    
    function add_room() {
      room_name = document.getElementById("room_name").value;
      localStorage.setItem("room_name", room_name);
      firebase.database().ref("/").child(room_name).update({
            purpose : "Adding user..."
            });
    }

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code

      //End code
      });});}
getData();
