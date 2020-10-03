const cards = document.querySelectorAll('.card')


for (let i = 0; i < cards.length; i++) {
    cards[i].addEventListener('click', function(){
        window.location = `http://localhost:3000/receitas/${i}`
    })
}


//                      MODAL
// const camadaModal = document.querySelector('.modal-camada')
// for (let card of cards) {
//     // card.addEventListener('click', function () {
//     //     camadaModal.classList.add('active')

//     //     let classes = card.getAttribute('class').split(' ')[1].trim()
//     //     camadaModal.querySelector('img').src = `/assets/${classes}.png`         //não funcionou com getElementByTagName

//     //     let titleRecipe = card.querySelector('p').innerHTML
//     //     camadaModal.querySelector('p').innerText = titleRecipe

//     //     let author = card.querySelector('span').innerHTML
//     //     camadaModal.querySelector('span').innerHTML = author

//     // })
// }

// camadaModal.querySelector('.close-modal').addEventListener('click', function () {
//     camadaModal.classList.remove('active')
//     camadaModal.querySelector('img').src = ''
// })
