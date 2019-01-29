// content of index.js
const http = require('http')
const port = 3000

const requestHandler = (request, response) => {
  console.log(request.url)
  var url = require('url');
  var url_parts = url.parse(request.url, true);
  var query = url_parts.query;
  var id = query.id;
  response.end('Hello $(id) from Dublin!')
// comment for futur devs
}

const server = http.createServer(requestHandler)

server.listen(port, (err) => {
  if (err) {
    return console.log('something bad happened', err)
  }

  console.log(`server is listening on ${port}`)
})