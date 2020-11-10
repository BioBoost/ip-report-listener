const mqtt = require('mqtt')

console.log("Starting IP report listener");

let client  = mqtt.connect('mqtt://10.0.0.200');     // ENV VAR !!!!
 
client.on('connect', function () {
  client.subscribe('test/dhcp/detect', function (err) {   // ENV VAR !!!
    if (err) console.log("Failed to subscribe");
  })
})
 
client.on('message', function (topic, message) {
  if (topic === 'test/dhcp/detect') {
    let data = JSON.parse(message.toString());
    console.log(data);
    // POST HERE TO BACKEND
  }
});



// CLEAN SHUTDOWN?
// client.end()