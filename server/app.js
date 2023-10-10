const express = require("express");
const bodyParser = require('body-parser'); // Import body-parser

const app = express();

const PORT = 8000;
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }));

app.listen(PORT, () => console.log("Server started"));

app.use(express.static("build"));

app.post('/api', (req, res) => {
  
    const jsonData = req.body;
    // Log the JSON data sent in the request body
    console.log('Received JSON data:', req.body);
  
    // Respond with a success message (optional)
    res.status(200).json({ message: 'Data received successfully' });
  });