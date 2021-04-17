// ini manggil module htpp, di tampung di variabel konstanta http
const http = require('http');

// panggil method createServer, ada req dan res
const server = http.createServer((req, res) => {

    // kita ambil request, url
    const url = req.url; // /message
        if(url === '/'){
            res.write('<html>');
            res.write('<head><title>Enter Message</title></head>');
            res.write('<body><form action="/message" method="POST"><input type="text" name="message"><button type="submit">Send</button></form></body>')
            res.write('</html>');
            return res.end();
        }

        // yang jalan selain url '/'
        res.end("Hi, selamat datang di sekolah Fullstack")
});

// server listen, artinya adalah si server jalanin di port 3000
server.listen(3000);

console.log("server running on http://localhost:3000")