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

const mobil = "peugeot"
const motor = "Ducati"

console.log(`saya punya mobil ${mobil} dan motor ${motor}`)
//loosely typed languange
const a = 1, b = 2, c = 3

// shorthand named property
let [a,b,c]=[true,4,5]

// ternarary operator (cara singkat nulis kondisi)
// biasanya:
// let a = 9
// if(a<10){
//     console.log("nilai a kurang dari 10")
// }else{
//     console.log("Nilai a lebih dari 10")
// }

let a = 9
a <=10
? console.log("nilai kurang dari 10")
: console.log("nilai lebih dari 10")

/**
 * function 
 * merupakan sebuah block code untuk membungkus sebuah proses penulisan kode agar tidak diulang kembali
 */
//terdapat tiga cara penulisan function, fungsi nya sama aja

//function biasa

function name(params){
    console.log('saya belajar javaScript')
}
name()
// param di function bisa di isi brp pun
function test(param1, param2) {
    console.log("saya makan","saya ngaji")
}
test()

// anonymous function
const anon = function(param){
    console.log(param)
}
anon("saya belajar java script")

//arrow function
let third = () =>{
    console.log("ini adalah arrow function")
}
third("")
//bisa juga seperti ini:
// let third = (param1) =>{
//     console.log(param1)
// }
// third(param1)

const satu = (parameter) =>{
    let a = parameter
    console.log(a)
}
satu()

const dua = function(num1, num2){
    let a = num1, b = num2
    console.log(a+b)
}
dua(2,4)

/**
 * High Order Function
 * Fungsi yang menerima argumen berupa fungsi lain serta return bisa berupa fungsi juga.
 */

// normal function
// function genap(number){
//     return number % 2 == 0
// }
// function print(number) {
//     let isTrue = genap(num) // jadi function genap dipanggil di variabel isTrue
//     if(isTrue){
//         console.log(`${number} adalah bilangan genap`)
//     }else{
//         console.log(`${number} adalah bilangan ganjil`)
//     }
// }
// print(10)

// High Order Function
// function kecepatan(mobil) {
//     return mobil >= 100 // jika mobil lebih dari 100 maka punya saya
// }

// function warna(mobil) {
//     return mobil == "merah" // jika mobil warna merah maka mobil punya saya 
// }

// function kendaraan(mobil, callback) {
//     let a = callback(mobil) // bisa digunakan untuk memanggil dua function
//     if(a){
//         console.log(`mobil dengan ${mobil} adalah mobil saya`)
//     }else{
//         console.log(`mobil dengan ${mobil} bukan mobil saya`)
//     }
// }
// kendaraan(120, kecepatan) // callback diisi oleh 120 , dan mobil diisi dengan function kecepatan

//
/**
 * terdapat 2 function
 * tahun <= 2001 gaperlu bayar pajak
 * else = bayar pajak
 * 
 * cc >= 150 harus bayar pajak
 */

function tahun(nilai) {
    return nilai >= 2001 // jika mobil lebih dari 100 maka punya saya
}

function cc(nilai) {
     return nilai >= 150 // jika mobil warna merah maka mobil punya saya 
}

function kendaraan(nilai, callback) {
    let a = callback(nilai) // bisa digunakan untuk memanggil dua function
    if(a){
        console.log(`harus bayar pajak`)
    }else{
        console.log(`Tidak harus bayarb pajak`)
    }
}
kendaraan(2002,tahun) 