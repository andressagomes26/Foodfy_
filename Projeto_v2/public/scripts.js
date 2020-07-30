/***** SELECIONAR RECEITA *****/
const index_id = document.querySelectorAll('.img')

for(let img of index_id){
    img.addEventListener('click', function(){
        const index = img.getAttribute('id')
        window.location.href = `/recipes/${index}`
        
    })
}

/***** MODO DE PREPARO *****/
const mudar =  document.querySelector('.mudar-a')
const info_mostrar = document.querySelector('.mudar-ul')

mudar.addEventListener('click', function(){
    if (mudar.innerHTML == 'MOSTRAR'){
        mudar.innerHTML = 'ESCONDER'
        info_mostrar.classList.add('active')
    }
    else if(mudar.innerHTML == 'ESCONDER'){
        mudar.innerHTML = 'MOSTRAR'
        info_mostrar.classList.remove('active')

    }
})

/***** INGREDIENTES *****/ 
const mudar2 =  document.querySelector('.mudar-ingredientes')
const info_mostrar2 = document.querySelector('.mudar-ul-ingredientes')

mudar2.addEventListener('click', function(){
    if (mudar2.innerHTML == 'ESCONDER'){
        info_mostrar2.classList.add('active')
        mudar2.innerHTML = 'MOSTRAR'
    }
    else if(mudar2.innerHTML == 'MOSTRAR'){
        info_mostrar2.classList.remove('active')
        mudar2.innerHTML = 'ESCONDER'

    }
})

/***** INFORMAÇÕES ADICIONAIS *****/ 
const mudar3 =  document.querySelector('.mudar-b')
const info_mostrar3 = document.querySelector('.mudar-p-b')

mudar3.addEventListener('click', function(){
    if (mudar3.innerHTML == 'ESCONDER'){
        info_mostrar3.classList.add('active')
        mudar3.innerHTML = 'MOSTRAR'
    }
    else if(mudar3.innerHTML == 'MOSTRAR'){
        info_mostrar3.classList.remove('active')
        mudar3.innerHTML = 'ESCONDER'

    }
})