const modalOverlay = document.querySelector(".modal-overlay")
const imgs = document.querySelectorAll('.img')
const close = document.querySelector('.p2')

for(let img of imgs){
    img.addEventListener('click', function(){
        modalOverlay.classList.add('active')

        const foto = img.getAttribute('id')
        const titulo = img.getAttribute('name')
        const parag = img.getAttribute('value')

        modalOverlay.querySelector('img').src=`${foto}`
        modalOverlay.querySelector('.h3').innerHTML= `${titulo}`
        modalOverlay.querySelector('p').innerHTML= `${parag}`
    })
}

close.addEventListener('click', function(){
    modalOverlay.classList.remove('active')
    
})
