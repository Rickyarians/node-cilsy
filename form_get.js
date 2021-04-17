// panggil module http
const http = require('http')
// panggil module filesystem
const fs = require('fs')
// panggil module url
const url = require('url')


// kita buat server, ada request dan response
const server = http.createServer((req, res) => {


    // cetak url parse 
    // parameter 1 itu ada url
    // paramater 2
    const q = url.parse(req.url, true)
    // cetak q
    console.log(q)


    if(q.pathname = '/search/' && req.method === "GET") {

        // tangkap query nama
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

// jalanin atau liste server di port 3000
server.listen(3000)

console.log('server jalan')

