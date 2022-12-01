const express = require('express')
const cors = require('cors')

const app = express()

app.use(express.json())
app.use(cors())

app.get('', (req, res) => {
    res.status(200).json({
        "dados": [
            {
                "id": 1,
                "collectTimestamp": "2021-04-05T01:10:48.038Z",
                "bluetoothIsEnable": true,
                "carDescription": "FUSCA.02019\r",
                "elmVersion": "ELM327 v2.1\r",
                "isoProtocol": "ISO 15765-4 (CAN 11/500)\r",
                "connectObd": true,
                "distance": "173 Km",
                "fuelLevel": null,
                "currentLatitude": " -29.71",
                "currentLongitude": " -53.80",
                "rpm": {
                    "value": 1344.5,
                    "lastRead": "2021-02-05T01:10:38.088Z"
                },
                "speed": {
                    "value": 15,
                    "lastRead": "2021-02-05T01:10:38.797Z"
                },
                "odometer": {
                    "value": 8627,
                    "lastRead": "2021-02-05T01:10:39.560Z"
                },
                "TravelTime": {
                    "value": "18.82",
                    "lastRead": "2021-02-05T01:10:40.260Z"
                },
                "ethanolPercent": {
                    "value": "21.18",
                    "lastRead": "2021-02-05T01:10:40.948Z"
                },
                "egnitionStatus": 173
            },
            {
                "id": 2,
                "collectTimestamp": "2021-04-05T01:10:48.038Z",
                "bluetoothIsEnable": true,
                "carDescription": "GOL.02019\r",
                "elmVersion": "ELM327 v2.1\r",
                "isoProtocol": "ISO 15765-4 (CAN 11/500)\r",
                "connectObd": true,
                "distance": "173 Km",
                "fuelLevel": null,
                "currentLatitude": " -32.71",
                "currentLongitude": " -44.80",
                "rpm": {
                    "value": 1344.5,
                    "lastRead": "2021-02-05T01:10:38.088Z"
                },
                "speed": {
                    "value": 24,
                    "lastRead": "2021-02-05T01:10:38.797Z"
                },
                "odometer": {
                    "value": 9333,
                    "lastRead": "2021-02-05T01:10:39.560Z"
                },
                "TravelTime": {
                    "value": "22.44",
                    "lastRead": "2021-02-05T01:10:40.260Z"
                },
                "ethanolPercent": {
                    "value": "11.33",
                    "lastRead": "2021-02-05T01:10:40.948Z"
                }
            },
            {
                "id": 3,
                "collectTimestamp": "2021-02-05T01:10:48.038Z",
                "bluetoothIsEnable": true,
                "carDescription": "MARCH1.02016\r",
                "elmVersion": "ELM327 v2.1\r",
                "isoProtocol": "ISO 15765-4 (CAN 11/500)\r",
                "connectObd": false,
                "distance": "173 Km",
                "fuelLevel": null,
                "currentLatitude": " -29.71",
                "currentLongitude": " -53.80",
                "rpm": {
                    "value": 1344.5,
                    "lastRead": "2021-02-05T01:10:38.088Z"
                },
                "speed": {
                    "value": 15,
                    "lastRead": "2021-02-05T01:10:38.797Z"
                },
                "odometer": {
                    "value": 8627,
                    "lastRead": "2021-02-05T01:10:39.560Z"
                },
                "TravelTime": {
                    "value": "18.82",
                    "lastRead": "2021-02-05T01:10:40.260Z"
                },
                "ethanolPercent": {
                    "value": "21.18",
                    "lastRead": "2021-02-05T01:10:40.948Z"
                }
            },
            {
                "id": 4,
                "collectTimestamp": "2021-04-05T01:10:48.038Z",
                "bluetoothIsEnable": true,
                "carDescription": "LOGAN.02019\r",
                "elmVersion": "ELM327 v2.1\r",
                "isoProtocol": "ISO 15765-4 (CAN 11/500)\r",
                "connectObd": true,
                "distance": "200 Km",
                "fuelLevel": null,
                "currentLatitude": " -11.71",
                "currentLongitude": " -30.80",
                "rpm": {
                    "value": 1344.5,
                    "lastRead": "2021-02-05T01:10:38.088Z"
                },
                "speed": {
                    "value": 36,
                    "lastRead": "2021-02-05T01:10:38.797Z"
                },
                "odometer": {
                    "value": 9333,
                    "lastRead": "2021-02-05T01:10:39.560Z"
                },
                "TravelTime": {
                    "value": "22.44",
                    "lastRead": "2021-02-05T01:10:40.260Z"
                },
                "ethanolPercent": {
                    "value": "09.22",
                    "lastRead": "2021-02-05T01:10:40.948Z"
                }
            },
            {
                "id": 5,
                "collectTimestamp": "2021-04-05T01:10:48.038Z",
                "bluetoothIsEnable": true,
                "carDescription": "Astra\r",
                "elmVersion": "ELM327 v2.1\r",
                "isoProtocol": "ISO 15765-4 (CAN 11/500)\r",
                "connectObd": true,
                "distance": "173 Km",
                "fuelLevel": null,
                "currentLatitude": " -29.71",
                "currentLongitude": " -53.80",
                "rpm": {
                    "value": 1344.5,
                    "lastRead": "2021-02-05T01:10:38.088Z"
                },
                "speed": {
                    "value": 15,
                    "lastRead": "2021-02-05T01:10:38.797Z"
                },
                "odometer": {
                    "value": 8627,
                    "lastRead": "2021-02-05T01:10:39.560Z"
                },
                "TravelTime": {
                    "value": "18.82",
                    "lastRead": "2021-02-05T01:10:40.260Z"
                },
                "ethanolPercent": {
                    "value": "21.18",
                    "lastRead": "2021-02-05T01:10:40.948Z"
                },
                "egnitionStatus": 173
            }
        ]
    })
})

app.listen(3001, () => {
    console.log('Server Running on 3001')
})