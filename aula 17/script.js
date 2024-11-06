const FORMULARIO = document.querySelector('#formulario')
const ENTRADA = document.querySelector('.entrada')
const TAREFAS_CONTAINER = document.querySelector('.tarefas')

const MEMORIA_CACHE = JSON.parse(localStorage.getItem('tarefas'))

if (MEMORIA_CACHE){
    MEMORIA_CACHE.forEach((item) => {
        adicionar_tarefa(item)
    })
}

FORMULARIO.addEventListener('submit', (event) => {
    event.preventDefault()
    adicionar_tarefa()
})

function adicionar_tarefa(texto) {
    let entrada_texto = ENTRADA.value

    if (texto) {
        entrada_texto = texto.txt
    }

    const TAREFAS_LISTA = document.querySelectorAll('li')
    const QUANTIDADE_TAREFAS = TAREFAS_LISTA.length
    if (entrada_texto && QUANTIDADE_TAREFAS <= 13) {

        const ELEMENTO_TAREFA = document.createElement('li')
        if (texto && texto.Completed){
            ELEMENTO_TAREFA.classList.add('completada')
        }

        ELEMENTO_TAREFA.innerText = entrada_texto
        TAREFAS_CONTAINER.appendChild(ELEMENTO_TAREFA)

        completar_tarefa(ELEMENTO_TAREFA)
        remover_tarefa(ELEMENTO_TAREFA)
        ENTRADA.value = ''
        atualizar_cache()
    }
}

function completar_tarefa(tarefa_elemento) {
    tarefa_elemento.addEventListener('click', () => {
        tarefa_elemento.classList.toggle('completada')

    })
}

function remover_tarefa(tarefa_elemento) {
    tarefa_elemento.addEventListener('contextmenu', (e) => {
        e.preventDefault()
        tarefa_elemento.remove()
        atualizar_cache()
        ENTRADA.value = ''
        atualizar_cache()
    })
}

function atualizar_cache(){
    const ITENS_TAREFAS = document.querySelectorAll('li')
    const LISTA_TAREFAS = []
    ITENS_TAREFAS.forEach((elemento) => {
    LISTA_TAREFAS.push({
        txt: elemento.innerText,
        Completed: elemento.classList.contains ('completada')
    })
  }) 
  localStorage.setItem('tarefas' , JSON.stringify(LISTA_TAREFAS))

}