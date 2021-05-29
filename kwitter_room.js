
var firebaseConfig = {
      apiKey: "AIzaSyARULyIKEsnKiwAx2wyh1ywF9DiAzMyk7k",
      authDomain: "kwitter-dda2a.firebaseapp.com",
      databaseURL: "https://kwitter-dda2a-default-rtdb.firebaseio.com",
      projectId: "kwitter-dda2a",
      storageBucket: "kwitter-dda2a.appspot.com",
      messagingSenderId: "1080512007667",
      appId: "1:1080512007667:web:641536d57b1a10093e9686"
    };
    firebase.initializeApp(firebaseConfig);

username = localStorage.getItem("username");
room_name = localStorage.getItem("room-name");
console.log(username);
document.getElementById("username").innerHTML = username;

function addroomname()
{
      room_name = document.getElementById("roomname").value;
      firebase.database().ref("/").child(room_name).update({purpose : "adding room name..."});

      localStorage.setItem("room-name",room_name);
      window.location ="kwitter_page.html";
}

function getData()
 {
      firebase.database().ref("/").on('value', function(snapshot) 
      {document.getElementById("output").innerHTML = "";
      snapshot.forEach(function(childSnapshot)
      {childKey  = childSnapshot.key;
       Room_names = childKey;
       console.log("room Name",Room_names);
       
       row = "<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)' >#"+Room_names+"</div><hr>";
       document.getElementById("output").innerHTML += row;
      });});}
getData();

function redirectToRoomName(names)
{
      console.log(names);
      localStorage.setItem("room-name",names);
      window.location = "kwitter_page.html";

}

function logout()
{
      localStorage.removeItem("room-name");
      localStorage.removeItem("Username");
      window.location = "index.html";
}