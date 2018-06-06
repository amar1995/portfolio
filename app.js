const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const app = express();

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({
  extended: true,
}));
app.use(express.static(__dirname + '/dist'));

app.get('/', function(req,res) {
    
res.sendFile(path.join(__dirname+'/dist/index.html'));
});

app.post('/contact', (req,res) => {
    // console.log(req.body);
    require('./contactMailer.js').mailToUser(req.body);
    require('./contactMailer.js').mailToMe(req.body);
    res.send({
        success: true,
        msg: 'Thanks For Feedback, Check your mail'
    });
})
// Start the app by listening on the default Heroku port
app.listen(process.env.PORT || 8080);
