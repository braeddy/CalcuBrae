const display = document.getElementById("display")

function scrivi(input){
    display.value += input
}

function calcola(){
    display.value = eval(display.value)
}

function cancella(){
    display.value = ''
}

function cambiosegno(){
    
}
