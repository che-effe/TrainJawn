// Import the messaging module
import * as messaging from "messaging";
import { settingsStorage } from "settings";
import { me } from "companion";
let KEY_DEPART = "departureStation";
let KEY_ARRIVE = "arrivalStation";

var departStation = settingsStorage.getItem(KEY_DEPART) || '{"name":"Downingtown","value":"Downingtown"}';
var ariveStation = settingsStorage.getItem(KEY_ARRIVE) || '{"name":"Paoli","value":"Paoli"}';
console.log("STATION!!:",departStation);
cleanSettingsValues(KEY_ARRIVE, ariveStation);
cleanSettingsValues(KEY_DEPART, departStation);

settingsStorage.onchange = function(evt) {
  cleanSettingsValues(evt.key, evt.newValue);
}

function cleanSettingsValues(key, val){
  var regexp = /"value":"(.*)"}/
  var cleanVal = val.match(regexp);
  console.log(encodeURI(cleanVal[1]));
  var stationName = encodeURI(cleanVal[1]);
  if(val){
     assignStations({
      key: key,
      value: stationName
    });
  }
 
}

function assignStations(data){
  console.log(data.key, data.value)
  if (data.key === KEY_DEPART){
      departStation = data.value || "Downingtown";
  } else {
    ariveStation = data.value || "Paoli";
  }
  console.log(departStation, ariveStation)

  querySeptaInbound();
}
// Listen for the onopen event
messaging.peerSocket.onopen = function() {
  // Ready to send or receive messages
  console.log("companion socket open")
}
messaging.peerSocket.onerror = function(err) {
  // Handle any errors
  console.log("Connection error: " + err.code + " - " + err.message);
}

// Listen for messages from the device
messaging.peerSocket.onmessage = function(evt) {
  if (evt.data && evt.data.command == "septa-inbound") {
    // The device requested weather data
    querySeptaInbound();
  } else if (evt.data && evt.data.command == "septa-outbound"){
    querySeptaOutbound();
  }
}

function querySeptaInbound(){
  fetch(
  ).then(function(response){
    return response.json();
  }).then(function(respData){
     sendSeptaData(respData, departStation, ariveStation);
  }).catch(function (err) {
   console.log("Error fetching Septa Data " + err);
  });
}

function querySeptaOutbound(){
  console.log(ariveStation, departStation);
  fetch("https://www3.septa.org/hackathon/NextToArrive/"+ariveStation+"/"+departStation+"/4").then(function(response){
    return response.json();
  }).then(function(respData){
    sendSeptaData(respData, ariveStation, departStation);
  }).catch(function (err) {
   console.log("Error fetching Septa Data " + err);
  });
}
// Send a message with septaData to the peer app
function sendSeptaData(data, from, to) {
  console.log(data[0].orig_departure_time);
  data[0].from = decodeURI(from);
  data[0].to = decodeURI(to);
  if (messaging.peerSocket.readyState === messaging.peerSocket.OPEN) {
    // Send a command to the device
    messaging.peerSocket.send(data);
  } else {
    console.log("Error: Connection is not open");
  }
}