// panggil module http
const http = require('http')
// panggil module fs itu filesystem
// create file
// read file
// edit file
// delete file
const fs = require('fs')


// kita buat server http, ada request ada resopnse
const server  = http.createServer((req, res) => {


    // kita baca url
    const url = req.url;
    // kita baca method
    const method = req.method;

   

    // cek apakah url nya '/'
    if(url === '/') {
        res.write('<html>')
        res.write('<head><title>Enter Message</title></head>')
        res.write('<body><form action="/message" method="POST"><input type="text" name="message"><button type="submit">Send</button></form></body>')
            res.write('</html>');
            return res.end();
    } 

    if(url === '/message' && method === 'POST'){
        console.log(`urlnya adalah : ${url}` )
        console.log(`methodnya adalah : ${method}`)
        
        // write file -> buat file
        // parameter 1 -> message.txt artinya ini membuat file name message, extension txt, artinya note
        // parameter 2 -> ini isinya -> teks 'DUMMY'
        // parameter 3 -> callback function
        fs.writeFile('message.txt', 'DUMMY', function (err) {
            if (err) throw err; // kasihtau kalo error
            console.log('Saved!'); // yang jalan ini
          });
        
        // pengalihan route, 
        res.statusCode = 302;
        res.setHeader('Location', '/');
        return res.end();
        }

        // selain route diatas
        res.end("Hi, selamat datang di sekolah Fullstack")
})


// server kita listen atau kita jalanin di port 3001
server.listen(3001)

console.log("server running on http://locahost:3001")
