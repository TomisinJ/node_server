 const http = require('http')
 const fs = require('fs') // has all the file handling 
 const port = 3000

 const server = http.createServer(function(req, res) {
    res.writeHead(200, {'Content-Type': 'text/html'})
    fs.readFile('index.html', function(error, data) {
        if (error) {
            res.writeHead(404)
            res.write('Error: File not found!') // write out text to the screen
        } else {
            res.write(data) // data parameter is all the info inside index.html
        }
        res.end()
    })
 })

 server.listen(port, function(error) {
    if (error) {
        console.log('something went wrong', error)
    } else {
        console.log('Server is listening on port ' + port)
    }
 })