const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser')
const jwt = require('jsonwebtoken')

const app = express();
const port = 3001;

app.use(bodyParser());
app.use(cors());

var messages = [{text:"Mamad", user:"Jim"}, {user:"Jim", text:"nubari"}];
var users = [{username: "Jim", password: "1"}];

app.get('/messages', (req, res) => {

    res.send(messages);
});

app.get('/messages/:uid', (req, res) => {
    res.send(messages[req.params.uid]);
});

app.post('/messages', (req, res) => {
    const token = (req.header('Authorization'));
    const userId = jwt.decode(token, '123');
    const user = users[userId]
    let msg = {
        text: req.body.message,
        user: user.userName
    };
    
    messages.push(msg);
    res.json(msg);
})

app.post('/Register', (req, res) => {
    let registerData = req.body
    let newIndex = users.push(registerData);
    let userId = newIndex - 1;

    let token = jwt.sign(userId, '123');

    res.json(token);
})

app.listen(port, () => console.log('app running on ' + port));