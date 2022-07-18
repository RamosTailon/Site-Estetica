let video = document.querySelector('.video')
let header = document.querySelector('.header-container')
let rolamento = document.querySelector('.rolamento')
window.addEventListener('scroll', () => {
    let value = 1 + window.scrollY / -600
    video.style.opacity = value
    rolamento.style.opacity = value
    header.classList.toggle("showHeader", window.scrollY > 0)
})

//======================//

let data = document.querySelector('#data-consulta')
let dataTex = document.querySelector('#data')



