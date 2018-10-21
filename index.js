var express = require("express");
var bodyParser = require("body-parser");
var app = express();

const puppeteer = require('puppeteer');
import linkedin from './linkedin';
import musically from './musically';

app.use(bodyParser.urlencoded({
  extended: true
}));
app.use(bodyParser.json());

app.post('/handle', function (req, res) {
  var handle = req.body.handle;
  var link = String(req.body.link);


  switch (handle) {
    case 'linkedin':
      (async () => {

        
        await linkedin(link);
      })();
      break;
    case 'musically':
      (async () => {
          
       await musically(link,res);
        
      })();
      break;
    default:

      res.end("Wrong input.... Suggestion :- {linkedin ; musically}");
  }

});



app.listen(3000, function () {
  console.log("Started on PORT 3000");
})