'use strict';

//middleware for the create new event
const events = require('../../events.js');

let orderID = 'e3669048-7313-427b-b6cc-74010ca1f8f0';

function driverHandler(payload) {
    console.log(`VENDOR : Thank you for delivering ${orderID}`);
    console.log("EVENT: ", payload);
};

//
events.on('delivered', driverHandler);