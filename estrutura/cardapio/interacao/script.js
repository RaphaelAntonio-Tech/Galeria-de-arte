
let zoom = window.document.querySelectorAll('a.links-pages')
let zom = window.document.querySelector('i.fa-house')
let hover = window.document.querySelectorAll('button.valor-produto')





zom.addEventListener('click', clicar)
zom.addEventListener('mouseenter', entrar)
zom.addEventListener('mouseout', sair)

const hamburguer = document.querySelector('.hamburger')
const nav = document.querySelector('.nav')

hamburguer.addEventListener('click', ()=> nav.classList.toggle('active'))

for (let i = 0; i < zoom.length; i++) {

    zoom[i].addEventListener('clicar', clicar);
    zoom[i].addEventListener('mouseenter', entrar);
    zoom[i].addEventListener('mouseout', sair);

}


for (let v = 0; v < hover.length; v++) {

    hover[v].addEventListener('click', click);
    hover[v].addEventListener('mouseenter', enter);
    hover[v].addEventListener('mouseout', out);
}

function entr(){
    this.style.background = '#3a8acb'
    this.style.padding = '10px'
    this.style.transition = '1s'
    this.style.color = '#001858'
}
function saind(){
    this.style.background = '#001858'
    this.style.padding = '5px'
    this.style.transition = '1s'
    this.style.color = '#a6a6a6'
}

function click(){
    this.style.background='#a6a6a6'
    this.style.transition = '1s'
}
function enter(){
    this.style.background = '#3a8acb'
    this.style.transition = '1s'
}
function out(){
    this.style.background = '#001858'
    this.style.color = 'white'
}


function entrar(){
    this.style.color = '#3a8acb'
    this.style.transition = '1s'
}
function clicar(){
    this.style.color = '#a6a6a6'
}
function sair(){
    this.style.color = '#fff'
}