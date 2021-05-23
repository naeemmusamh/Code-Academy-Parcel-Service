'use strict';

//middleware for the create new event
const event = require('../../events.js');

let orderID = 'e3669048-7313-427b-b6cc-74010ca1f8f0';

function vendorHandler(payload) {
    console.log("EVENT: ", payload);
    console.log(`DRIVER : picked up ${orderID}`);
};

function driverWayHandler(payload) {
    console.log("EVENT: ", payload);
    console.log(`DRIVER : delivered up ${orderID}`);
};

event.on('pickup', vendorHandler);
event.on('in-transit', driverWayHandler);