// panggil module http
const http = require('http')


// buat server node 
// const server  = http.createServer((req, res) => {

//     const request = req
//     res.end(request)
// })

const server  = http.createServer((req, res) => {   
    // localhost:3001
    // request : Headers
    //           Body

   console.log(req.url)
   if(req.url == '/users') {
        res.writeHead(200, {'Content-Type': 'text/html'})
        res.write('Selamat Datang di halaman users <b>Ricky</b>')
        res.end()
   } else {
        res.writeHead(200, {'Content-Type': 'text/html'})
        res.write('Selamat Datang <b>Ricky</b>')
        res.end()
   }

   
})


server.listen(3001)

console.log("server running on http://locahost:3001")
