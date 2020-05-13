const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser')
const app = express();
const port = 3001;

app.use(bodyParser());
app.use(cors());

var messages = ["Mamad", "nubari", "sup?"];

app.get('/messages', (req, res) => {

    res.send(messages);
});

app.get('/messages/:uid', (req, res) => {
    res.send(messages[req.params.uid]);
});

app.post('/messages', (req, res) => {
    let msg = req.body
    console.log(msg);
    
    messages.push(msg.message);
    res.json(msg);
    console.log(messages);
})

app.listen(port, () => console.log('app running'));