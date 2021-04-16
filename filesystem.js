// panggil module http
const http = require('http')
const fs = require('fs')
const qs = require('querystring');

const server  = http.createServer((req, res) => {
    const url = req.url;
    const method = req.method;
    if(url === '/') {
        res.write('<html>')
        res.write('<head><title>Enter Message</title></head>')
        res.write('<body><form action="/message" method="POST"><input type="text" name="message"><button type="submit">Send</button></form></body>')
            res.write('</html>');
            return res.end();
    } 

    if(url === '/message' && method === 'POST'){
        fs.writeFile('message.txt', 'DUMMY', function (err) {
            if (err) throw err; // lewat
            console.log('Saved!');
          });
        res.statusCode = 302;
        res.setHeader('Location', '/');
        return res.end();
        }
        res.end("Hi, selamat datang di sekolah Fullstack")
})


server.listen(3001)

console.log("server running on http://locahost:3001")
