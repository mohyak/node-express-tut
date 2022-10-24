const http = require('http');

const server = http.createServer((req, res) => {
    if(req.url === '/') {
        res.end('Welkom to our home page');
        return;
    }
    if(req.url === '/about') {
        res.end('Here is our short history');
        return;
    }
    res.end(`
    <h1>We can't seem to find the page you are looking for</p>
    <a href="/">back home</a>
    `)
})

server.listen(5000);