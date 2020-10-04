const http = require("http");
const port = 4200;

const student = [{id: 1, Name: "samuel"},
                 {id: 1, Name: "james"},
                 {id: 1, Name: "chinasa"}
                 
]

const connect = http.createServer((req, res)=>{
    res.setHeader("content-Type", "application/json");
    console.log("New Server ready to run");

    
    // res.setHeader("Content-Type", "application/json");
    // console.log(req.headers.authorizationn);

    let body = [];
    req
    .on("data", (chunk) => {
    body = Buffer.concat(body).toString();
    const { method, url } = req;
    let status = 404;
    response = {
    success: false,
    data: null,

    }

    });





res.end();
});



connect.listen(port, () => {
    console.log(`Server up and Running`);
});