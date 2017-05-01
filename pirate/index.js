"use strict";
let phatbeat = require('phatbeat');
let buttons = phatbeat.getButtonPins();
buttons.forEach(function(button) {
    const stream = phatbeat.buttonStream(button['pin']);
    stream.on("pinChange", function(pin, pinState) {
        if(pinState == 1) {
            console.log(button['name']);
        }
    });
});
