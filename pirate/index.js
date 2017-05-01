"use strict";
let phatbeat = require('phatbeat');
let WebSocket = require('ws');
let buttons = phatbeat.getButtonPins();
const ws = new WebSocket('ws://localhost:8000');
ws.on('open', function() {
    console.log('connected');
    buttons.forEach(function(button) {
        const stream = phatbeat.buttonStream(button['pin']);
        stream.on("pinChange", function(pin, pinState) {
            if(pinState == 1) {
                ws.send(button["name"]);
                console.log(button['name']);
            }
        });
    });
});
