var firebaseConfig = {
      apiKey: "AIzaSyB9GRb2O4QbY_1V30zaJvq0OILnEtQiFdk",
      authDomain: "letschat-474f1.firebaseapp.com",
      databaseURL: "https://letschat-474f1-default-rtdb.firebaseio.com",
      projectId: "letschat-474f1",
      storageBucket: "letschat-474f1.appspot.com",
      messagingSenderId: "874639522121",
      appId: "1:874639522121:web:0718fa36649a5020994298"
    };
    
firebase.initializeApp(firebaseConfig);

getData();

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      console.log("room name-"+Room_names);
      row = "<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)' >#" +Room_names +"</div><hr>";

      document.getElementById("output").innerHTML+=row;
      });});}

username=localStorage.getItem("User_name");
document.getElementById("user_name").innerHTML="Welcome "+username+" !";

function redirectToRoomName(name){
      console.log(name);
      localStorage.setItem("room_name",name);
      window.location="kwitter_page.html"
    }

function addRoom()
{
      room_name=document.getElementById("room_name").value;
      firebase.database().ref("/").child(room_name).update({
            purpose:"adding room name"
      });

localStorage.setItem("room_name",room_name);

window.location="kwitter_page.html";
}

function logout(){
      localStorage.removeItem("room_name");
      localStorage.removeItem("User_name");
      window.location="index.html";
}