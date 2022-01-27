// Global Scoupe

var a = 20;

function test() {
   console.log('nilai a: '+a)
   a = 30
   console.log('nilai a skarang : '+a)
}
 
test()
console.log('nilai global a: '+a)

// local Scoupe

function baru() {
    let b = 50
    console.log('nilai local b: '+ b)
 }
  
 baru()
 console.log('nilai global b: '+b)

 // block scoupe
 
function blok() {
 
    let x = 100
    console.log('nilai local y: ',y)
  
    if(y > 120) {
        let y = 1200
        console.log('nilai block x: ', x)
    }
 }
  
 blok()
 console.log('nilai global x: ',x)