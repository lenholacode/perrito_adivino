const express = require('express');
const bodyParser = require('body-parser');

const db = require('../database-mysql/index.js');

const app = express();

 app.use(express.static(__dirname + '/../react-client/dist'));


app.get('/items', function (req, res) {
  console.log('iside of end poit');
  // res.send('hello world from back-end')
  db.selectAll(function(err, data) {
    if(err) {
      res.sendStatus(500);
    } else {
      console.log("hi i love u", data)
      res.json(data);
    }
  });
});

/*handle post requests to groceries
app.post("/items", function(req, res) {
  //update data object with new object from my req.body
  var description = req.body.description;
  //send the updated data object back
  if (!description) {
    res.sendStatus(400);
  } else {
    database.insertOne(description, quantity, (err, results) => {
      if (err) {
        res.sendStatus(500);
      } else {
        res.status(200).json(results);
      }
    });
  }
});

*/


app.listen(3000, function() {
  console.log('listening on port 3000!');
});
