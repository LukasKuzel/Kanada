const path = require('path');
const http = require('http');
const express = require('express');
const fs = require('fs').promises;

async function readJSON(path) {
    const data = await fs.readFile(path)
    .catch(err => console.error('Chyba načtení souboru: ', err));
    return JSON.parse(data.toString());
}

const app = express();
const server = http.createServer(app);

app.use(express.static(path.join(__dirname, 'public')));

app.get('/api/events', (req, res) => {
    readJSON('historie/data/events.json')
    .then(data => res.send(data))
    .catch(err => res.send('Chyba lávky', err));
});

app.get('/api/events/:index', (req, res) => {
    readJSON('historie/data/events.json')
    .then(data => res.send(data[req.params.index]))
    .catch(err => res.send('Chyba lávky', err));
});

app.get("/api/heroes", (req, res) => {
    readJSON('historie/data/heroes.json')
    .then(data => res.send(data))
    .catch(err => res.send('Soubor nebylo možné načíst', err));       
});

app.get("/api/towns", (req, res) => {
    readJSON('data-mapa/towns.json')
    .then(data => res.send(data))
    .catch(err => res.send('Soubor nebylo možné načíst', err));       
});

const PORT = process.env.PORT || 3000;
server.listen(PORT, () => console.log(`Server running on port ${PORT}`));