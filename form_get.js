// panggil module http
const http = require('http')
const fs = require('fs')
const url = require('url')


const server = http.createServer((req, res) => {

    const q = url.parse(req.url, true)

    if(q.pathname = '/search/' && req.method === "GET") {

        const nama = q.query.nama
        console.log(nama)

        if(nama) {
            // kalo ada keyword 
            res.writeHead(200, {'Content-Type': 'text/html'})
            res.write('<h3>Search Results</h3>')
            res.write('<p>anda mencari: <b>' + nama + '</b> </p>' )
            res.write('<pre>Tidak ada hasil! maaf website masih dalam pengembangan </pre>')
            res.end('<a href="/search/">kembali</a>')
        } else {
            // tampilkan form search
            fs.readFile('search.html', (err, data) => {
                if(err) {
                    // kirim balasan error
                    res.writeHead(404, {'Content-Type': 'text/html'})
                    return res.end("404 Not Found")
                }

                // kirm form search
                res.writeHead(200, {'Content-Type': 'text/html'})
                res.write(data)
                return res.end()
            })
        }
    }
    // console.log(q.query)

    // res.end();
})


server.listen(3000)

console.log('server jalan')

