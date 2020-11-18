const dotenv = require("dotenv");
dotenv.config();

module.exports = {
  general: {
    environment: process.env.NODE_ENV || "development",
    port: process.env.PORT || 8081,
    domain: process.env.DOMAIN || "localhost",
    protocol: process.env.PROTOCOL || "http"
  },
  mqtt: {
    broker: process.env.MQTT_BROKER || "labict.be",
    topic: process.env.MQTT_TOPIC || "test/network/dhcp/reports"
  },
};