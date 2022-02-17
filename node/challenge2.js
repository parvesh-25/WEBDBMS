
const altaf = require("http")
const ilham = altaf.createServer((req,res) => {
    let url, 
    dataResponse

    res.setHeader("Content-Type", "application/json")
    url = req.url

    //Routing
    if(url === "/"){
        dataResponse = {
            data: "ini adalah halaman Home page"
        }
    }else if(url === "/login"){
        dataResponse = {
            data: "ini adalah halaman Home Login"
        }
    }else if (url == "/register"){
        dataResponse = {
            data: "ini adalah halaman register page"
        }
    }else if (url == "/about"){
        dataResponse = {
            data: "ini adalah halaman about"
        }
    }else{
        dataResponse = {
            data: "404 not found"
        }
    }
    

    return res.end(JSON.stringify(dataResponse))
})
ilham.listen(6000)