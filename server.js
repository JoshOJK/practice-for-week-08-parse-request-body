const { sendFormPage } = require("./routes");
const { parseBody } = require("./parse-body");

/******************************************************************************/
/******************* DO NOT CHANGE THE CODE ABOVE THIS LINE *******************/

const http = require('http')

let server = http.createServer((req, res) => {
    let reqBody = "";
    req.on('data', (data) => {
        reqBody += data
    })
 if (req.method === 'GET' && req.url === '/') {
    let method = req.method;
    let url = req.url;
    console.log( method, url);
  }
    req.on('end', () => {
        if(reqBody) req.body = parseBody(reqBody)
        sendFormPage(req, res)
    })
})

const port = 5000;

server.listen(port, () => console.log(`Successfully started the server on port ${port}`))

/******************************************************************************/
/******************* DO NOT CHANGE THE CODE BELOW THIS LINE *******************/

module.exports = { server };
