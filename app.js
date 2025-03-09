//Call back functions:
//function triggered when relevant event occurs
//(req, res) is passed as an argument to http.createServer(), meaning it will be executed whenever a request is received.
//req variable-data about request
//res- data about response to be sent back

const http=require('http')//import the builtin module

const server=http.createServer((req, res)=>{//handles incoming requests and send results
    if(req.url=== '/')
    {
        res.end('Welcome to our homepage.')

    }
    if(req.url ==='/about')
    {
        res.end('Here is out short history')
    }
    res.end(`<h1>Oops!</h1><p>We cant seem to find what youre looking for!</p>
        <a href='/'>back home</a>`)
    //res.write('Welcome to our home page.')//this is the reponse sent
    //res.end()//end of response, no furhter data will be sent
})

server.listen(5000)//starts the server