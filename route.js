// panggil module http
const http = require('http')

const server  = http.createServer((req, res) => {

  
    console.log(req.url)
    
   

    if(req.url === '/') {
        res.write('coba test')
        res.end()
    } else if (req.url === '/product') {
        res.write('route daftar produk')
        res.end();
    }
})


server.listen(3001)

console.log("server running on http://locahost:3001")
