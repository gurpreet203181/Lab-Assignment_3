const express = require('express');
const app = express();
const PORT = 3000;

app.use(express.json());

let items = [{ id: 1, name: 'Item1' }];

// CREATE
app.post('/items', (req, res) => {
    const newItem = { id: items.length + 1, name: req.body.name };
    items.push(newItem);
    res.status(201).json({
        message: 'Data added successfully',
        data: newItem
    });
});

// READ
app.get('/items', (req, res) => {
    res.json(items);
});

// UPDATE
app.put('/items/:id', (req, res) => {
    const item = items.find(i => i.id == req.params.id);
    if (!item) return res.status(404).send('Item not found');
    item.name = req.body.name;
    res.json(item);
});

// DELETE
app.delete('/items/:id', (req, res) => {
    items = items.filter(i => i.id != req.params.id);
    res.send('Item deleted');
});

app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
});
