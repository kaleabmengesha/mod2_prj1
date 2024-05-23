
let counter = document.getElementById("count");
let saved = document.getElementById("saved");
let num = 0



function increment() {

    num += 1
    counter.innerText = num

}

function decrement() {
    if (num >= 1) {
        num -= 2
        increment()
    } else {
        alert("No Passangers")
    }
    
}

function save() {
    
    let counted = num + " - "
    saved.textContent += counted
    num = -1
    increment()
    
    
}

function reset() {
    num = -1
    increment()

}