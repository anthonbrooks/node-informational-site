const http = require('http');
const fs = require('fs');
const express = require('express');
const app = express();

const PORT = 3000;

app.get('/', (req, res) => res.sendFile('./index.html', { root: __dirname}));

app.get('/about', (req, res) => res.sendFile('./about.html', { root: __dirname}));

app.get('/contact-me', (req, res) => res.sendFile('./contact-me.html', { root: __dirname}));

app.get('/404', (req, res) => res.sendFile('./404.html', { root: __dirname}));


app.listen(PORT, (err) => {
    if (err) {
        throw err;
    }
    console.log(`My Express app is listening on ${PORT}`)
});

// const server = http.createServer((req, res) => {
//     let filename = '';

//     if (req.url === '/') {
//         filename = './index.html';
//     } else if (req.url === '/about') {
//         filename = './about.html';
//     } else if (req.url === '/contact-me') {
//         filename = './contact-me.html';
//     } else {
//         filename = './404.html';
//     }

//     fs.readFile(filename, (err, data) => {
//         if (err) {
//             res.writeHead(500, {'content-type': 'text/plain'});
//             res.end('server error');
//             return;
//         } else {
//             res.writeHead((filename === './404.html') ? 404 : 200, {'content-type': 'text/html'});
//             res.end(data);
//         }
//     })
// })

// server.listen(3000, () => console.log('server started at port 3000'));