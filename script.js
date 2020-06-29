const camadaModal = document.querySelector('.modal-camada')
const cards = document.querySelectorAll('.card')

for (let card of cards) {
    card.addEventListener('click', function () {
        camadaModal.classList.add('active')

        let classes = card.getAttribute('class').split(' ')[1].trim()
        camadaModal.querySelector('img').src = `/assets/${classes}.png`         //não funcionou com getElementByTagName

        let titleRecipe = card.querySelector('p').innerHTML
        camadaModal.querySelector('p').innerText = titleRecipe

        let author = card.querySelector('span').innerHTML
        camadaModal.querySelector('span').innerHTML = author

    })
}

camadaModal.querySelector('.close-modal').addEventListener('click', function () {
    camadaModal.classList.remove('active')
    camadaModal.querySelector('img').src = ''
})