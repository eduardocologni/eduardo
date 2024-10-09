const questoes_quiz = [
    {
    questoes: 'qual meu prato de comida preferido',
    a: 'arros,feijao,ovo frito',
    b: 'arroz e bife aparmdna',
    c: 'strogonof de frango',
    d: 'strogonof de carne',
    correta: 'c',
    },

    {
    questoes: 'qual carro eu prefiro',
    a: 'feerrari',
    b: 'bmw',
    c: 'porche',
    d: 'nissan',
    correta: 'd',
    },
    {
    questoes: 'qual e anime eu prefiro entre esses',
    a: 'one pirce',
    b: 'naruto',
    c: 'demons leier',
    d: 'felimi x spy',
    correta: 'c',
    },
    {
    questoes: 'qual e a melhor raça de cachorro para tocar gado',
    a: 'border coliie',
    b: 'spit alemao',
    c: 'buslaitier',
    d: 'pastor alemao',
    correta: 'a',
    },
    {
    questoes: 'quem eu salvaria ',
    a: 'um cachorro ',
    b: 'uma pessoa qualquer ',
    c: 'uma peesoa da minha escola',
    d: 'minha professora de portugues que paasa trarefa na sexta para entregar segunda',
    correta: 'a',
    },
    {
    questoes: 'qual materia e minha preferida ',
    a: 'PORTUGUES!!!!!!',
    b: 'ciencias',
    c: 'historia',
    d: 'nem uma pq sao todas chatas',
    correta: 'b',
    },
    {
    questoes: 'sabemdo as questoes acima,qual materia eu escluiria',
    a: 'portugues',
    b: 'ciencia',
    c: 'historia',
    d: 'orientaçao de estudos',
    correta: 'd',
    },
    {
    questoes: 'qual e minha paixao',
    a: 'ir na robotica',
    b: 'acordar cedo para lavar louça',
    c: 'ir ver minha diretora',
    d: 'tomar um sorvete do mc ou do bk nos dias quentes e assistir you cine no celular no ar condicionado',
    correta: 'a',
    },
    {
    questoes: 'quando eu faço um quiz eu espero que',
    a: 'responda tudo',
    b: 'ler tudo pelo menos',
    c: 'tanto faz pq isso nao muda minha vida',
    d: 'tabom',
    correta: 'c',
    },
    {
    questoes: 'em gravy falls qual e o tema principal',
    a: 'monstros',
    b: 'suspence',
    c: 'comedia',
    d: 'todos a cima',
    correta: 'd',
    },
]

const QUIZ_TITULO = document.querySelector('h1')
const ALTERNATIVA_A = document.querySelector('#text_a')
const ALTERNATIVA_B = document.querySelector('#text_b')
const ALTERNATIVA_C = document.querySelector('#text_c')
const ALTERNATIVA_D = document.querySelector('#text_d')
const BOTAO = document.querySelector('button')
const  QUIZ_CONTAINER = document.querySelector('.containers')
const ALTERNATIVAS = document.querySelectorAll('.resposta')

let questao_atual = 0
let acertos = 0 
let verificou = false

window.onload = carregar_quiz

BOTAO.addEventListener('click' , verificar)



function carregar_quiz() {

    ALTERNATIVAS.forEach((alternativa) => {
        alternativa.checked = false
        document.querySelector(`label[for=${alternativa.id}  ]`).classList.remove('correta', 'incoreta')

    })

    const QUESTAO = questoes_quiz[questao_atual]
    QUIZ_TITULO.innerText = QUESTAO.questoes
    ALTERNATIVA_A.innerText = QUESTAO.a
    ALTERNATIVA_B.innerText = QUESTAO.b
    ALTERNATIVA_C.innerText = QUESTAO.c
    ALTERNATIVA_D.innerText = QUESTAO.d
    BOTAO.innerText = 'verificar'
    verificou = false
}

function verificar(){
    if (!verificou){
        verificar_resposta()
    }
    else{
        proxima_pergunta()
    }
}

function pegar_resposta(){
    let resposta = undefined

    ALTERNATIVAS.forEach((alternativa) => {
        if  (alternativa.checked) {
            resposta = alternativa.id
        }
        
    })
    return resposta
}


function verificar_resposta(){
    const RESPOSTAS_JOGADOR = pegar_resposta()
    const RESPOSTAS_CORETAS = questoes_quiz[questao_atual].correta
   ALTERNATIVAS.forEach((alternativa)  =>{
    const LABEL = document.querySelector(`label[for=${alternativa.id}]`)
    if (alternativa.id === RESPOSTAS_CORETAS){
        LABEL.classList.add('correta')
    }
    else if (alternativa.checked) {
        LABEL.classList.add('incoreta')
    }
   })

    if (RESPOSTAS_JOGADOR === RESPOSTAS_CORETAS){
        acertos++
    }
    BOTAO.innerText = 'proxima'
    verificou = true

}

function proxima_pergunta(){
    questao_atual++
    maximo_de_questoes = questoes_quiz.length
    
    if (questao_atual < maximo_de_questoes){
        carregar_quiz()
    }
    else{
        QUIZ_CONTAINER.innerHTML = `<h1 id="questao">voce acertou ${acertos} de ${maximo_de_questoes} perguntas!</h1>`
    }
}