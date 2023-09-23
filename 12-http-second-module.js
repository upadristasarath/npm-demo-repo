const http = require('http');

const server = http.createServer((req, resp) => {
    if (req.url == '/') {
        resp.end('Welcome to our home page')
    } else if (req.url == '/about') {
        resp.end('This is about page')
    } else {
        resp.end(`
        <h1>OOPS! </h1>
        <p> We can't seem to find the page you are looking for </p>
        <a href="/"> back </a>
    `)
    }
});

server.listen(5000);