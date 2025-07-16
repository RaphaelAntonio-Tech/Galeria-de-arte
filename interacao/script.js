
let zoom = window.document.querySelectorAll('a.links-pages')
let zom = window.document.querySelector('i.fa-house')
let movimento = window.document.querySelector('i.fa-arrow-right')

const hamburguer = document.querySelector(".hamburger");
const nav = document.querySelector('nav.nav');

hamburguer.addEventListener('click', () =>nav.classList.toggle('active')); 

zom.addEventListener('click', clicar)
zom.addEventListener('mouseenter', entrar)
zom.addEventListener('mouseout', sair)


movimento.addEventListener('mouseenter', enter)
movimento.addEventListener('click', click)
movimento.addEventListener('mouseout', out)

for (let i = 0; i < zoom.length; i++) {
    zoom[i].addEventListener('click', clicar);
    zoom[i].addEventListener('mouseenter', entrar);
    zoom[i].addEventListener('mouseout', sair);
}

function enter(){
    this.style.padding = '20px'
    this.style.transition = '1s'
}
function click(){
    this.style.background = '#693e1d'
    this.style.borderRadius = '50%'
}
function out(){
    this.style.padding = '5px'
    this.style.background = '#a47754'
    this.style.borderRadius= '50%'
}

function entrar(){
    this.style.color = '#fff'
    this.style.transition = '1s'
}
function clicar(){
    this.style.color = '#a6a6a6'
}
function sair(){
    this.style.transition = '1s'
    this.style.color= '#001858'
}

