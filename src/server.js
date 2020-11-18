const mqtt = require('mqtt');
const axios = require('axios');
const config = require('./config/config.js')

console.log("Starting IP report listener");

let client  = mqtt.connect(`mqtt://${config.mqtt.broker}`);

const backend = `${config.general.protocol}://${config.general.domain}:${config.general.port}`;
const api = axios.create({
  baseURL: backend,
});
 
client.on('connect', function () {
  client.subscribe(config.mqtt.topic, function (err) {
    if (err) console.log("Failed to subscribe");
  })
})
 
client.on('message', function (topic, message) {
  if (topic === config.mqtt.topic) {
    let data = JSON.parse(message.toString());
    // TODO - VALIDATE DATA
    console.log(`Posting to ${backend}`)
    console.log(data);

    // {
    //   "time": "Tue Nov 10 15:02:34 UTC 2020",
    //   "mac": "cc:9f:7a:ab:ab:f2",
    //   "ip": "10.0.0.2",
    //   "hostname": "unknown"
    // }

    api.post('/ipreports', data);
  }
});

// CLEAN SHUTDOWN?
// client.end()