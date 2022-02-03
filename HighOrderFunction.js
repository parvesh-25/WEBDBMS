function tahun(nilai) {
    return nilai <= 2001 // jika mobil lebih dari 100 maka punya saya
}

function cc(nilai) {
     return nilai >= 150 // jika mobil warna merah maka mobil punya saya 
}

function kendaraan(nilai,callback) {
    let a = callback(nilai) 
    if(a){
        console.log(`${nilai}tdk bayar pajak`)
    }else{
        console.log(`${nilai} harus bayar pajak`)
    }
}
kendaraan(2002, tahun) 