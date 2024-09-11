// 1 passo
const QUADRADO = document.querySelector('div')


// 2 passo
QUADRADO.addEventListener('click', clicado)
QUADRADO.addEventListener('dblclick', clicado2x)
QUADRADO.addEventListener('mousedown', segurar)
QUADRADO.addEventListener('mouseenter', passaremcima)
QUADRADO.addEventListener('mouseleave', tirardecima)
QUADRADO.addEventListener('mousemove', moverimg)

// 3 passo
function clicado(){
     QUADRADO.style.backgroundColor = 'black'
}

function clicado2x() {
QUADRADO.innerText = 'obrigado'
}

function segurar(){
    QUADRADO.innerHTML = 'bom dia'
}

function passaremcima(){
QUADRADO.style.transform = 'scale(1.5)';
}

function tirardecima(){
QUADRADO.style.transform = 'scale(1)';
}

function moverimg(){
    QUADRADO.style.filter = 'blur(5px)';
}