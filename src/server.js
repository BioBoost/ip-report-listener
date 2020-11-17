const mqtt = require('mqtt');
const axios = require('axios');

console.log("Starting IP report listener");

let client  = mqtt.connect('mqtt://10.0.0.200');     // ENV VAR !!!!

const api = axios.create({
  baseURL: 'http://localhost:8081',         // ENV !!!!
});
 
client.on('connect', function () {
  client.subscribe('test/dhcp/detect', function (err) {   // ENV VAR !!!
    if (err) console.log("Failed to subscribe");
  })
})
 
client.on('message', function (topic, message) {
  if (topic === 'test/dhcp/detect') {
    let data = JSON.parse(message.toString());
    console.log(data);

    // {
    //   "time": "Tue Nov 10 15:02:34 UTC 2020",
    //   "mac": "cc:9f:7a:ab:ab:f2",
    //   "ip": "10.0.0.2",
    //   "hostname": "unknown"
    // }
    


    // POST HERE TO BACKEND
    // axios.post('/devices', {
      
    // })
  }
});



// CLEAN SHUTDOWN?
// client.end()