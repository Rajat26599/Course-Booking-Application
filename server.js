const express = require('express');
const sendMail = require('./send-mail');
const app = express();
const path = require('path');
const fetch = require("node-fetch");

const PORT = process.env.PORT || 3000;

// Data Parsing
app.use(express.urlencoded({
  extended: false
}));
app.use(express.json());

app.post('/email', (req, res) => {
  // TODO
  // send email here
  const { childName, childAge, parentName, contactPrefix,
    contactNumber, email, courseName, dateForTrial, timeForTrial } = req.body;
  console.log('Data: ', req.body);

  sendMail(childName, childAge, parentName, contactPrefix,
    contactNumber, email, courseName, dateForTrial, timeForTrial,
    function(err, data) {

    if (err) {
      res.status(500).json({ message: 'Internal Error' });
    } else {
      res.json({ message: 'Email sent!!!' });
    }
  });
  res.json({ message: 'Message received!!!' })
});

// function getApiData() {
//   fetch('https://script.google.com/macros/s/AKfycbzJ8Nn2ytbGO8QOkGU1kfU9q50RjDHje4Ysphyesyh-osS76wep/exec')
//   .then(response => response.json())
//   .then(data => {this.setApiData(data);})
// }
//
// function setApiData(data) {
//   this.ApiData = data;
//   console.log(this.ApiData[0])
// }
//
// getApiData();

const url = 'https://script.google.com/macros/s/AKfycbzJ8Nn2ytbGO8QOkGU1kfU9q50RjDHje4Ysphyesyh-osS76wep/exec';
fetch(url)
.then((resp) => resp.json())
.then(function(data) {
  courses = data;
})
.catch(function(error) {
  console.log(error);
});

app.engine('html', require('ejs').renderFile);

app.get('/', (req, res) => {
  res.render('index.html');
});

app.listen(PORT, () => console.log('Server is starting on PORT, ', 3000));
