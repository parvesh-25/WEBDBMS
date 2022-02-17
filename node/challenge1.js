// server dengan nama variable dan import http dengan nama antum

const altaf = require("http")
const ilham = altaf.createServer((req,res) => {
   
    let data;

    console.log(req);

    data = {
        url : req.url,
        method: req.method,
        header: req.headers   
    }

    res.setHeader("Content-Type","application/json")

    res.end(JSON.stringify(data))
});

ilham.listen(8000)