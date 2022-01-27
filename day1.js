// identifier


// identifier adalah penamaan variable, fungsi ataupun parameter.adalah
// karakter pertamanya hanya bisa huruf a - z, dan simbol underscore/ dolar
// tidak bisa menggunakan angka didepan
// tidak boleh menggunakan bahasa yang sudah ada di default js


//statementg
/**
 *  statement = suatu pernyataan js yang paling dasar dan meiliki tugas tertentu
 */

// console.log = buat ngprint di js
let name = "Hello world"
console.log(name)

// expressiom
/**
 *  expression = merupakan ekspresin js yang berfungsi untuk menghasilkan nilai tertentu.
 */

// let fungsi nya utk buat variabel

// let first =  1
// let second = 2
// let result = first + second

// if(result>1 ){
//     console.log('maka hasilnya adalah ' +result)
// }

// scope
/**
 *  cakupan kode agar bisa mengakses atau membatasi 
 */


// var 
/**
 * global scope merupakan cakupan di seluruh file
 * var adalah global,  scope sehingga di akses seluruh file.  bahkan dalam function
 * var juga local scope
 */



// var a = "Hallo rekan rekan"
// function first() {
//     console.log(a)
// }

// function second() {
//     a = "nilainya sudah diubah"
//     console.log(a)
// }

// first()
// second()


// Let
/**
 * cakupan nya hanya global block dan local scope
 * variabel bisa diubah isinya
 */


// const
/** 
 *  const tidak bisa diganti isinya seperti val di kotlin 
 * cakupannya block, global, local scope
 */

// const a = "Mobil"
// function kendaraan(){
//     console.log(a)
// }
// kendaraan()

// var a = 'pajero'
// function kendaraan(){
//     // var b menjadi local scoupe krn dia masuk dalam function
//     var b = "datsun" // local scoupe tidak bisa diakses di function lain
//     console.log(b)
// }
// function mobil(){
//     a= "Pugeot"
//     console.log(a)
// }
// kendaraan()
// mobil()

// closure
//closure adalah cara mengakses variable dari parent scope di dalam child scope parent

// function hello(sapa){ // sapa adalah parameter
//     var text = "Assalamualaikum" + sapa
//     return function (){
//         console.log(text)
//     }
// }

// var nama = hello(" fulan")
// nama()

//chalenge
// nama: nama kalian
// kelas: x RPL A

// function baru(nama,kelas){
//     var name = "Nama: " + nama
//     var klas = "Kelas: " + kelas
//     return function (){
//         console.log(name)
//         console.log(klas)
//     }
// }

// var hasil=baru('Altaf', 'X RPL A')
// hasil()

// Tipe data pada js
/**
 * di js ada 7 tipe data
 * null, undefined,boolean, number, bigInt, string, symbel.
 * dan tipe data kompleks object
 * 
 * loosely typed = yaitu variable tidak menentukan ebuah tipe data, melainkan nilai yang menetukaan tipe data tsb.
 * 
 */

/**
 * tipe data undifinied
 * Undefined secara umum berarti variabel tersebut sudah dideklarasi, tapi belum didefinisikan (belum diberi nilai).
 * undifined bisa dijadikan objek cadangan 
 */
// let a //
// function first(params) {
//     a = "Ini functiom pertama"
//     console.log(a)
    
// }

// function second() {
//     a = "ini function kedua"
//     console.log(a)
// }
// first()
// second()

/**
 * tipe data null
 * tipe data primitif yang nilainya kosong atau null
 */


/**
 * number
 * rentang nilai yang bisa nampung 1  - 2^53. jika sbeuah number memiliki nilai lebih dari rentang itu maka sebaiknya menggunakan tipe data big int
 */

/** 
 * NaN atau Mot a Number
 * nan merupakan nilai numeric yang memberitahu bahwa nilainya it invalid number atau bukan number
 */

// let a = "hello"
// if(a >= 17){
//     a = "anda belum cukup umur"
//     console.log(a/2)
// }else{
//     a = "sudah cukup"
//     console.log(a)
// }

/** 
 * string
 */
let a = "fahmi baik"
console.log(a.length)

let kata = "helloworld"
for(let i = 0; i< kata.length; i++){
    console.log(kata[i])
}

/**
 * boolean
 * tipe data yang menemukan kebenaran
 * dan hanya memiliki 2 nilai (true dan false)
 */

let belajar = true
if(belajar){
    console.log("Kelas ini sedang belajar")
}

/**
 * Object
 * tipe data komplek yang berisi props (properti)
 */

let identitas = { // yg didalam kurung kurawal adalah properti
    lastName : "Utsman",
    email : "dias@gmail.com",
    instagram : "utssr",
    linkedin : "diasutsman",
    phone : "088818181818",
    addres : {
        city : "bekasi",
        number : "17",
        street : "jalan bahagia"
    }
}

let gtw = {
    kendaraan: {
        mobil: "peugeot",
        motor: "vixion",
        sepeda: "polygon",
    },
    jalan: "Jalan barkah",
    kota: "bekasi",
    platNomor: "jabodetabek",
    kereta: {
        namaKa: "Argo Bromo anggrek",
        tujuan: "senen-pasar turi"
    }
}

// cara memanggil object
console.log("nama saya: " + identitas.firstName)
// cara memanggil yang nested object
console.log("saya tinggal di : " + identitas.addres.city)

// menggunakan array
console.log(identitas["firstName"])
console.log(identitas["addres"] ["street"])

// membuat tabel
console.table(identitas)
console.table(gtw)
