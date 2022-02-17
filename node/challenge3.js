
const altaf = require("http");

const ilham = altaf.createServer((req,res) => {
    let url, // digunakan untuk path url di request
    method, // digunakan untuk menampung jenis method pada request atau nilai default
    dataResponse // hasil yang akan dikirim

    res.setHeader("Content-Type","Application/json");

    url = req.url;

    // jika method tidak ada isi, maka isi method dengan method get
    method = req.method ?? "get";

    // routing
    if(url === "/"){
        dataResponse = {
            data: "Ini adalah Halaman HomePage"
        };
    }else if (url === "/data"){
        // akses untuk method post
        if(method === "POST"){
            dataResponse = {
                data: "Anda berhasil menambahkan data"
            }
        }else{
            dataResponse = {
                data: "Maaf, ubah terlebih dahulu method menjadi POST"
            }
        }
    }else{
        dataResponse = {
            data: "404, Halaman tidak ditemukan"
        }
    }
    return res.end(JSON.stringify(dataResponse))
})

ilham.listen(4000)