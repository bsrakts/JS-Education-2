// ********ilk degisken atama*********
function helloWorld() {
    console.log("Hello World")
}

function hello() {
    console.log("merhaba")
    helloWorld()
}


//hata alabiliriz
/*function userCheck () {
    if (userName && age >=18) {
        info.innerHTML = "ehliyet alabilrisiniz"
    }
    else if (!userName) {
        info.innerHTML ="Kullanici adiniz yok"
    }
    else if ( !(age>=18) ) {
        info.innerHTML="Yas Bilginiz Yok veya 18 Yasindan Kucuksunuz"
    }
}*/

hello() //calistir