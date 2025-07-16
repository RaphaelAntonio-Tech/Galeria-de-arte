let zoom = window.document.querySelectorAll('a.links-pages')
let zom = window.document.querySelector('i.fa-house')
let movimento = window.document.querySelectorAll('button.Detalhes-exibicao')
let credito = window.document.querySelector('a.criador')
const hamburger = document.querySelector('.hamburger')
const nav = document.querySelector('.nav')

hamburger.addEventListener('click', ()=> nav.classList.toggle('active'))



zom.addEventListener('click', clicar)
zom.addEventListener('mouseenter', entrar)
zom.addEventListener('mouseout', sair)

for (let v = 0; v < movimento.length; v++) {

    movimento[v].addEventListener('click', clicando);
    movimento[v].addEventListener('mouseenter', entrando)
    movimento[v].addEventListener('mouseout', saindo)
}


for (let i = 0; i < zoom.length; i++) {
    zoom[i].addEventListener('click', clicar);
    zoom[i].addEventListener('mouseenter', entrar);
    zoom[i].addEventListener('mouseout', sair);
}



function entrando(){
    this.style.background = '#693e1d'
    this.style.transition = '1s'
    this.style.cursor = 'pointer'
}
function clicando(){
    this.style.background = '#bd987c'
    this.style.transition = '1s'
}
function saindo(){
    this.style.background= '#a47754'
   
}

function entrar(){
    this.style.color = '#a6a6a6'
    this.style.transition = '1s'
}
function clicar(){
    this.style.color = '#001858'
}
function sair(){
    this.style.transition = '1s'
    this.style.color= '#ffff'
}

