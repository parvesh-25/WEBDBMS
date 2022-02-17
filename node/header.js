/**
 * Header http
 * 
 * berfungsi untuk menampung data
 *  http header memberikan informasi tentang permintaan, respon / badan transmisi lainnya
 * 
 pada bagian ini akan memperkenalkan header respon http tertentu.
 */
const http = require("http");

// res = respon
const server = http.createServer((req,res) => {
    let dataHeader, // akan menampung object header request
    dataAutorization, // berisi properti dari object header
    userPass, // hasil decode base64e to string daari data user
    splitData, // pemisah / pembatas antar value autorization
    dataUser, // kode dengan base64 to str
    dataResponse;

    res.setHeader("Content-Type","application/json");

    // ini untuk mendapatkan hasil respon berupa json
    dataHeader = req.headers

    console.log(dataHeader);

    // get data otorisasi
    dataAutorization = dataHeader.authorization;
    
    // jika autorizationnya tidak terkirim maka akan menghasilkan :
    if(!dataAutorization){
        dataResponse = {
            data: "Undifined Autorization"
        };

        // send ke client dan return agar berhenti 
        return res.end(JSON.stringify(dataResponse));
    }

    splitData = dataAutorization.split(" ");

    dataUser = splitData[1] // untuk menampilkan data , 1 adalah indeks

    userPass = Buffer.from(dataUser, "base64").toString();

    // create respon berisi nilai dan user pass
    dataResponse = {
        token: dataHeader.authorization,
        userPass
    };

    return res.end(JSON.stringify(dataResponse));
});

server.listen(5000)