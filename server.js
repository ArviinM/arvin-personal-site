const express = require('express')
const https = require('https')
const path = require('path')
const fs = require('fs')
const app = express()
const port = 8443;

//Static Files
app.use(express.static(__dirname + '/public'));

//App direct
app.get("/", (req, res) => {
    res.sendFile(__dirname + "/index.html");
})

const sslServer = https.createServer({
    key: fs.readFileSync(__dirname + '/cert/key.key'),
    cert: fs.readFileSync(__dirname + '/cert/cert.crt')
}, app)

// listening port to 8443
sslServer.listen(port, function(){
    console.log(`Server started on port ${port}`);
});