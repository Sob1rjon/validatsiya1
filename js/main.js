let pro = document.querySelector('.pro_value')
let upper = document.querySelector('.pro_upper')
let number = document.querySelector('.pro_number')
let dollar = document.querySelector('.pro_dollar')

pro.addEventListener('keyup', (e)=>{
    var pass = pro.value
    if (pass.includes('$')) {
            dollar.classList.add('palansaeg')
    }else{
        dollar.classList.remove('palansaeg')
    }
    var val1 = pro.value
    var a = val1.toLowerCase()

    if(val1 == a){
        upper.classList.add('upp')
    }else{
        upper.classList.remove('upp')
    }       

    let arr = pro.value
    let split = arr.split('')
    split.forEach((e,i) => {
        if(isNaN(e) == false){
            number.classList.add('num')
        }else{
            number.classList.add('num')
        }
    });
})