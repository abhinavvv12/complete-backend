express = require('express');

const app = express();  //creating the server instance

app.get("/", (req,res) => {
    res.send("Hello World");
})

app.get("/about",(req,res) => {
    res.send("About Page");
})

app.listen(3000);  //starting the server using '.listen'
