// ******** Fonksiyonlara parametre atamak ve geridönüm alma****

//Temel kuralları:
// 1: Bir fonksiyon Bir veya Birden Fazla Parametre Alabilir veya Hic almayabilir
// 2: Bir fonksiyon Disari Bilgi Gonderebilir(RETURN) veya Gondermeyebilir
// 3: Mumkunse Fonksiyonun Bagimliliklarini Azaltmak Gerekir


// Temel Kuralları
let firstName = "Lorem"

function greetings(firstName = "") {
    //console.log(`Merhaba ${firstName ? firstName : "" }`)
    console.log(`Merhaba ${firstName}`)
} // default parametre alıyor

console.log(firstName) // degisken bilgisi
greetings() // fonksiyona parametre gondermedik ??
greetings("Busra")

// 1: 
function greetings(firstName = "", lastname = "") {
    //console.log(`Merhaba ${firstName ? firstName : "" }`)
    console.log(`Merhaba ${firstName}`)
    console.log(`Merhaba ${firstName} ${lastname}`)
}

console.log(firstName) // degisken bilgisi
greetings() // fonksiyona parametre gondermedik ??
greetings("Busra")

function greetings2(firstName, lastname) {
    let info = `Merhaba ${firstName} ${lastname}`
    return info
}

let greetingsInfo = greetings2("Ad", "Soyad")
    // let info = "deneme"
console.log(greetingsInfo)


function domIdWriteInfo(id, info) {
    let domObject = document.querySelector(`#${id}`)
    domObject.innerHTML = info
}

let htmlInfo = `<span style="color:red">COLOR REDDDDDDD</span>`

domIdWriteInfo('greeting', htmlInfo)
domIdWriteInfo('info', greetings2("Lorem", "Ipsum"))