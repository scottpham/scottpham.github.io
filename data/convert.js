const io = require("indian-ocean");

const port = io.readDataSync('portfolio.csv');

const result = {
  clips: port
}

io.writeDataSync("portfolio.json", result);
