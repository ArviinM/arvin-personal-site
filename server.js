const express = require('express')
const app = express()
const port = 39501;

//Static Files
app.use(express.static(__dirname + '/public'));

//App direct
app.get("/", (req, res) => {
    res.sendFile(__dirname + "/index.html");
})

// listening port to 39501
sslServer.listen(port, function(){
    console.log(`Server started on port ${port}`);
});