let textBox = document.querySelector('.textBox')
let type = document.querySelector('.type')
let resTxt = document.querySelector('.resTxt')

document.querySelector('.btn').addEventListener('click', ()=>{
    if(type.value == 0){
        resTxt.innerHTML = binaryToDecimal(textBox.value)
    }else if(type.value == 1){
        resTxt.innerHTML = (Number(textBox.value)).toString(2)
    }
})

function binaryToDecimal(num){
    let dec_value = 0
    let base = 1
 
    let temp = num
    while(temp){
        let last_digit = temp % 10
        temp = Math.floor(temp / 10)
 
        dec_value += last_digit * base
 
        base = base * 2
    }
 
    return dec_value;
}