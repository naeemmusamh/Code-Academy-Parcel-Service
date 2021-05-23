'use strict';

//this page for route the package from the node.js and create new events 

//require the event package
const Events = require('events');
//to create new event
const myEvents = new Events();
//middleware for create new events
module.exports = myEvents;