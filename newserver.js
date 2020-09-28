// creating constant http variable
const http = require('http')
// creating a constant name for port
const PORT = 9000
// creating a variable name for my server connection
const my_connect = http.createServer((req, res)=>{
    res.writehead(200,{"content-Type": "application/json"});
    console.log("Ready to run server!");
    console.log(req.headers.authorization)

    let body = []
    req
    .on("data", (chunk)=>{
       body.push(chunk); 
    })
    .on("end",()=>{
    body = Buffer.concat(body);
    console.log(body)
    const { method, url } = req;
    let status = 404;
    response = {
        success: false,
        data: null,};
    })

    res.write("Hello Samuel's World");
    res.end();
});



my_connect.listen(PORT, () => {
    console.log(`Server up and Running in PORT: ${PORT}`);
  });