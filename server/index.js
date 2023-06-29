const express = require("express");
const bodyParser = require('body-parser');
const cors = require('cors');
const contactApi = require('./routes/contacts.route');
const app = express();
const path = __dirname + '/views/';

app.use(express.static(path));

var corsOptions = {
  origin: "http://localhost:8081"
};

app.use(cors(corsOptions));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Use Created HubSpot Contacts API
app.use('/api', contactApi);

app.get("/", (req, res) => {
  res.sendFile(path + "index.html");
});

var listener = app.listen(8080, function () {
  console.log("Listening on port " + listener.address().port);
});
