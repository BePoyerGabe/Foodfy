const btIng = document.querySelector('#btIng')
const btHow = document.querySelector('#btHow')
const btInfo = document.querySelector('#btInfo')
const ul = document.querySelector('ul')
const moreInfos = document.querySelectorAll('.detailText');


for (info of moreInfos) {
    console.log(info)
}


btIng.addEventListener('click', () => {
    
    if(btIng.innerHTML == "MOSTRAR") {
        ul.classList.remove('hidden')
        btIng.innerHTML = "ESCONDER"

    } 
    else {
        ul.classList.add('hidden')
        btIng.innerHTML = "MOSTRAR"
    }
})


btHow.addEventListener('click', () => {
    
    if(btHow.innerHTML == "MOSTRAR") {
        moreInfos[0].classList.remove('hidden')
        btHow.innerHTML = "ESCONDER"

    } 
    else {
        moreInfos[0].classList.add('hidden')
        btHow.innerHTML = "MOSTRAR"
    }
})


btInfo.addEventListener('click', () => {
    
    if(btInfo.innerHTML == "MOSTRAR") {
        moreInfos[1].classList.remove('hidden')
        btInfo.innerHTML = "ESCONDER"

    } 
    else {
        moreInfos[1].classList.add('hidden')
        btInfo.innerHTML = "MOSTRAR"
    }
})
