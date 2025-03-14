const express = require('express');
const fs = require('fs');
const app = express();
const PORT = 3000;

// Route to read data from data.json
app.get('/data', (req, res) => {
    fs.readFile('./data/data.json', 'utf8', (err, data) => {
        if (err) {
            res.status(500).send('Error reading JSON file');
        } else {
            res.json(JSON.parse(data)); // Sends JSON data
        }
    });
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
});
