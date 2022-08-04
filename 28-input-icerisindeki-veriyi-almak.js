//INPUT icindeki degeri(value) almak

let formDOM = document.querySelector("#userForm")
formDOM.addEventListener('submit', formSubmit)

function formSubmit(event) {
    event.preventDefault() // default islemi engelledik...
    console.log("islem gerceklestirildi")

    let scoreInputDom = document.querySelector('#score')
    console.log(scoreInputDom.value)
    localStorage.setItem('score', scoreInputDom.value)
}