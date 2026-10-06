const express = require('express');
const path = require('path');
const { add, subtract, multiply, divide } = require('./calculator');

const app = express();

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'));
});

app.get('/add/:a/:b', (req, res) => {
    const a = parseFloat(req.params.a);
    const b = parseFloat(req.params.b);
    try {
        res.json({ result: add(a, b) });
    } catch (e) {
        res.status(400).json({ error: e.message });
    }
});

app.get('/substract/:a/:b', (req, res) => {
    const a = parseFloat(req.params.a);
    const b = parseFloat(req.params.b);
    try {
        res.json({ result: subtract(a, b) });
    } catch (e) {
        res.status(400).json({ error: e.message });
    }
});

app.get('/multiply/:a/:b', (req, res) => {
    const a = parseFloat(req.params.a);
    const b = parseFloat(req.params.b);
    try {
        res.json({ result: multiply(a, b) });
    } catch (e) {
        res.status(400).json({ error: e.message });
    }
});

app.get('/devide/:a/:b', (req, res) => {
    const a = parseFloat(req.params.a);
    const b = parseFloat(req.params.b);
    try {
        res.json({ result: divide(a, b) });
    } catch (e) {
        res.status(400).json({ error: e.message });
    }
});

if (require.main === module) {
    app.listen(3000, () => {
        console.log('Server running on http://localhost:3000');
    });
}

module.exports = app;
