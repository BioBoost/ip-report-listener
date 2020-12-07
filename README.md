# IP Report Listener

Listens to IP Reports and device statistics published via MQTT by for example [DHCP Request Detector](https://github.com/BioBoost/dhcp-request-detector). It then POST's these results to the [My-Devices backend API](https://github.com/BioBoost/my-devices-backend).

## Run Docker Container

### Build

Build the docker image using:

```bash
docker build -t ip-report-listener .
```

Running the image as a container:

```bash
docker run -it -e MQTT_BROKER=mybroker -e MQTT_TOPIC="my/cool/topic" --rm ip-report-listener
```

**Available environment variables:**

| Variable | Default | Description |
| --- | --- |
| BACKEND_PORT | `8081` | TODO |
| BACKEND_DOMAIN | `localhost` | TODO |
| BACKEND_PROTOCOL | `http` | TODO |
| MQTT_BROKER | `labict.be` | TODO |
| MQTT_TOPIC | `test/network/dhcp/reports` | TODO |
