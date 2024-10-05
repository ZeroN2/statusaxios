const http = require('http');

const server = http.createServer((req, res) => {
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.end('<h2>Server is ready!</h2>');
});

module.exports = () => {
    server.listen(4000, () => {
        console.log('Server Ready.');
    });
    return true;
};
