const express = require('express')
const app = express()
const port = 8443;

//Static Files
app.use(express.static(__dirname + '/public'));

//App direct
app.get("/", (req, res) => {
    res.sendFile(__dirname + "/index.html");
})

// listening port to 8443
app.listen(port, function(){
    console.log(`Server started on port ${port}`);
});