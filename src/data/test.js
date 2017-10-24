#!/usr/bin/env node
const path = require("path");
const io = require("indian-ocean");
const Mustache = require("mustache");

// get abs path
const portfolio = path.join(__dirname, 'portfolio.csv');

//read the csv as json 
const port_data = io.readDataSync(portfolio);

// save that json as the value of a single key, "clips"
const result = {
  clips: port_data
}


// for every object in the 
port_data.forEach( (clip)=>{
  // load the template file
  const index = io.readDataSync("../index.html");
  // render
  const output = Mustache.render(index, { clips: clip });
  // write out to disk
  io.writeDataSync(`${clip.slug}.html`, output); 

})

//const destination = path.join(__dirname, "portfolio.json");
// write out (dest, data)
//io.writeDataSync(destination, result);
