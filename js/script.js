'use strict'
function calc(){
console.log()
    const buttonvalue=this.innerText
    const  resplace= document.querySelector("#res")
    if(buttonvalue === "C"){
        resplace.value = ''
    }else if(buttonvalue === '='){
        resplace.value=eval(resplace.value)
    }else{
        resplace.value+= buttonvalue
    }
}
const buttons = document.querySelectorAll('button')

buttons.forEach(Element => {
    Element.addEventListener('click',calc)
})