#!/usr/bin/env node
const path = require("path");
const io = require("indian-ocean");

// get abs path
const portfolio = path.join(__dirname, 'portfolio.csv');

//read the csv as json 
const port_data = io.readDataSync(portfolio);

// save that json as the value of a single key, "clips"
const result = {
  clips: port_data
}

const destination = path.join(__dirname, "portfolio.json");
// write out (dest, data)
io.writeDataSync(destination, result);
