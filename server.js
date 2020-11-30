const express = require('express')
const app = express()
const {port} = require('./config.json');

//Static Files
app.use(express.static('public'))

//App direct
app.get("/", (req, res) => {
    res.sendFile(__dirname + "/index.html");
})

// listening port to 39501
app.listen(port, function(){
    console.log(`Server started 🚀 on port ${port}`);
});