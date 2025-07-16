let zoom = window.document.querySelectorAll('a.links-pages')
let zom = window.document.querySelector('i.fa-house')
let movimentacao = window.document.querySelector('button.Confirmar')
const hamburger = document.querySelector('.hamburger')
const nav = document.querySelector('.nav')

hamburger.addEventListener('click', ()=> nav.classList.toggle('active'))
zom.addEventListener('click', clica)
zom.addEventListener('mouseenter', entra)
zom.addEventListener('mouseout', sai)

movimentacao.addEventListener('click', clicou)
movimentacao.addEventListener('mouseenter', entrando)
movimentacao.addEventListener('mouseout', saindo)

for (let i = 0; i < zoom.length; i++) {
    zoom[i].addEventListener('click', clica);
    zoom[i].addEventListener('mouseenter', entra);
    zoom[i].addEventListener('mouseout', sai);
}


function entra(){
    this.style.color = '#001858';
    this.style.transition = '1s';
}
function clica(){
    this.style.color = '#a6a6a6';
}
function sai(){
    this.style.color = '#ffff';
    this.style.transition = '1s';
}

function entrando(){
    this.style.padding = '40px';
    this.style.background = '#6cb6f1';
    this.style.transition = '1s';

}

function clicou(){
    this.style.background = '#a47754';
}

function saindo(){
  this.style.padding = '20px';
  this.style.background = '#3a8acb'
}
