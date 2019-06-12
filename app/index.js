import document from "document";

// Import the messaging module
import * as messaging from "messaging";

// Listen for the onopen event
var Train0 = document.getElementById("status0");
let mybutton = document.getElementById("mybutton");
let dirText = document.getElementById("dirText");

var direction = "inbound";
messaging.peerSocket.onopen = function() {
  // Ready to send or receive messages
  console.log("socket Open");
  fetchData();
}
messaging.peerSocket.onerror = function(err) {
  // Handle any errors
  console.log("Connection error: " + err.code + " - " + err.message);
}
dirText.text = "loading...";
let Train0 = document.getElementById("status0");
let Train1 = document.getElementById("status1");
let Train2 = document.getElementById("status2");
let Train3 = document.getElementById("status3");

function fetchData() {
  if (messaging.peerSocket.readyState === messaging.peerSocket.OPEN) {
    // Send a command to the companion
    if(direction == "inbound"){
      messaging.peerSocket.send({
      command: 'septa-inbound'
    });
    } else {
      messaging.peerSocket.send({
      command: 'septa-outbound'
    });
    }
    
  }
}

// switch direction and call for data again.
mybutton.onactivate = function(evt) {
  console.log("CLICKED!");
  if (direction == "inbound"){
    direction = "outbound";
  } else {
    direction = "inbound";
  }
  fetchData();
}

// Listen for the onmessage event
messaging.peerSocket.onmessage = function(evt) {
  console.log("got data from companion");
  if (evt.data) {
    console.log(evt.data[0].from)
    processSeptaData(evt.data);
  }
}

function processSeptaData(data) {
  console.log("rendering ");
  console.log("The next train is at: " + data[0].orig_departure_time);
  var station1 = data[0].from;
  var station2 = data[0].to;
  if(station1.length > 11) {
    station1 = station1.substring(0,10)+"...";
  } 
  if(station2.length > 11) {
    station2 = station2.substring(0,10)+"...";
  } 
  dirText.text = station1 + "-" + station2;
 
  Train0.text = data[0].orig_delay+" | " + data[0].orig_departure_time + "-" + data[0].orig_arrival_time;
  Train1.text = data[1].orig_delay+" | " + data[1].orig_departure_time + "-" + data[1].orig_arrival_time;
  Train2.text = data[2].orig_delay+" | " + data[2].orig_departure_time + "-" + data[2].orig_arrival_time;
  Train3.text = data[3].orig_delay+" | " + data[3].orig_departure_time + "-" + data[3].orig_arrival_time;
}