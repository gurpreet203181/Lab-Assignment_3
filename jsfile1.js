const express = require('express');
const app = express();
const PORT = 3000;

// Route to display group names
app.get('/', (req, res) => {
    res.send('<h1>Group Members: Gurpreet Singh , Ekamjot Singh and Kirandeep Kaur</h1>');
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
});
