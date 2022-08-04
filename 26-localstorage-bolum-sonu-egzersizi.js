// functions bolum sonu egzersizi
let counter = localStorage.getItem('counter') ? Number(localStorage.getItem('counter')) : 0
let counterDOM = document.querySelector('#counter')
let increaseDOM = document.querySelector('#increase')
let decreaseDOM = document.querySelector('#decrease')

counterDOM.innerHTML = counter

increaseDOM.addEventListener("click", clickEvent)
decreaseDOM.addEventListener("click", clickEvent)

/* uzun yontem function clickEvent() {
    console.log(this.id)
    if (this.id == "increase") {
        counterDOM.innerHTML = counter += 1
    } else {
        counterDOM.innerHTML = counter -= 1
    }
} */

/* kisa yontem 1 
function clickEvent() {
    console.log(this.id)
    this.id == "increase" ? counterDOM.innerHTML = counter += 1 : counterDOM.innerHTML = counter -= 1
} */

//kisa yontem 2
function clickEvent() {
    this.id == "increase" ? counter += 1 : counter -= 1
    localStorage.setItem('counter', counter)
    counterDOM.innerHTML = counter
}