
function setupScrollAnimation() {
  
  const elementsToAnimate = document.querySelectorAll('.card-sem-imagem, .frase');

  
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      
      if (entry.isIntersecting) {
       
        entry.target.classList.add('visible');
        
        observer.unobserve(entry.target);
      }
    });
  }, {
    threshold: 0.1 
  });

 
  elementsToAnimate.forEach(el => {
    observer.observe(el);
  });
}


document.addEventListener('DOMContentLoaded', setupScrollAnimation);

// Função que cria o efeito de digitação
function typeWriter(elemento) {
  const textoOriginal = elemento.innerHTML;
  const textoArray = textoOriginal.split('');
  elemento.innerHTML = ''; 
  
  textoArray.forEach((letra, i) => {
    setTimeout(() => {
      elemento.innerHTML += letra;
    }, 75 * i); 
  });
}

// Função principal que será executada quando a página carregar
function setupTypingEffect() {
 
  const titulo = document.querySelector('header h1');
  
  if (titulo) {
    typeWriter(titulo);
  }
}


document.addEventListener('DOMContentLoaded', setupTypingEffect);