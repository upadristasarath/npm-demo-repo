const http = require('http');

const server = http.createServer((req, resp) => {
    console.log(req);
    resp.write('Welcome to our home page');
    resp.end();
});

swerver.listen(5000);