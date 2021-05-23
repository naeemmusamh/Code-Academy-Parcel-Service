'use strict';

//this page to hub the application

//route for the create new events
const events = require('./events.js');
require('dotenv').config();

//require the body parts
//driver
require('./src/Driver/driver.js');
//vendor
require('./src/Vendor/vendor.js');

let storeName = process.env.STORE_NAME;

let faker = require('faker');
let customer = faker.name.findName();

let orderID = 'e3669048-7313-427b-b6cc-74010ca1f8f0';
let time = new Date(2018, 11, 24, 10, 33, 30, 0);

let address = 'Los Angeles';

let object1 = {
    event: 'pickup',
    time,
    payload: {}
};

let object2 = {
    storeName,
    orderID,
    customer,
    address
}

let object3 = {
    event: 'in-transit',
    time,
    payload: {}
};

let object4 = {
    event: 'delivered',
    time,
    payload: {}
};

object1.payload = object2;
object3.payload = object2;
object4.payload = object2;


//route for the emit event
//timestamp and the event payload
setInterval(() => {
    events.emit('pickup', { object1: object1 });
}, 1000)

setInterval(() => {
    events.emit('in-transit', { object3: object3 });
}, 3000)

setInterval(() => {
    events.emit('delivered', { object4: object4 });
}, 5000)

setTimeout(() => {
    clearInterval(setInterval);
}, 5000);