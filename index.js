//jshint esversion:6
// Comment in the next line to disable the warning about the global variable being used
// create an express object from the express package
const express = require("express");
const bodyParser = require("body-parser");

// create an app object from the express object
const app = express();
// this allows the parsing of the html file using body parser
app.use(bodyParser.urlencoded({extended: true}));

//this sends the html file to the web page using the root directory
// Updated route to serve the HTML file
app.get("/VolCalc", function(req, res) {
  res.sendFile(__dirname + "/index.html");
});

//this sends the html file to the web page using the root directory
//
app.get("/", function(req, res) {
  res.sendFile(__dirname + "/VolCalculator.html")
});

// this gets the response from the values in the web page
app.post("/", function(req, res){

//use n1 for radium and n2 for height
  var num1 = Number(req.body.n1);
  var num2 = Number(req.body.n2);

  // Updated calculation and response for cone height
  var height = (3 * num2) / (Math.PI * Math.pow(num1, 2)); // calculate height of cone

// does the computation of the input variables, as numbers

  var volCylinder = Math.PI * Math.pow(num1, 2) * num2;

// sends the results back to the web page as string
 res.send("The height of the cone is " + height.toFixed(2)); // send result back to webpage
});
//this gets the response from the web page to this placeholder

app.listen(3000, function() {
  console.log ("Server is running on port 3000")
});
