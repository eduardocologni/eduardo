let ponteiro = 1;


const quadrado = document.getElementById('quadrado');


quadrado.addEventListener('click', function() {
    if (ponteiro < 10) {
        
        ponteiro++;
      
        quadrado.textContent = `Ponteiro: ${ponteiro}`;
    } else {
        
        ponteiro = 1;
        quadrado.textContent = `Ponteiro: ${ponteiro}`;
    }

   
    if (ponteiro < 10) {
        quadrado.classList.add('mover');
    } else {
       
        quadrado.classList.remove('mover');
    }
});