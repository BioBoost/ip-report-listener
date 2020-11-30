const dotenv = require("dotenv");
dotenv.config();

module.exports = {
  general: {
    environment: process.env.NODE_ENV || "development",
    port: process.env.BACKEND_PORT || 8081,
    domain: process.env.BACKEND_DOMAIN || "localhost",
    protocol: process.env.BACKEND_PROTOCOL || "http"
  },
  mqtt: {
    broker: process.env.MQTT_BROKER || "labict.be",
    topic: process.env.MQTT_TOPIC || "test/network/dhcp/reports"
  },
};
