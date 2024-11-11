// Função para navegação suave entre as seções
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();
      const targetId = this.getAttribute('href').substring(1);
      const targetElement = document.getElementById(targetId);
  
      if (targetElement) {
        targetElement.scrollIntoView({
          behavior: 'smooth'
        });
      }
    });
  });
  
  // Exibe uma mensagem de boas-vindas quando a página carrega
  window.addEventListener('load', () => {
    alert('Bem-vindo ao meu portfólio!');
  });
  
  // Animação simples para exibir cada projeto com um efeito de fade-in
  const projects = document.querySelectorAll('.project');
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('fade-in');
        observer.unobserve(entry.target); // remove o observador para que a animação ocorra apenas uma vez
      }
    });
  }, {
    threshold: 0.1 // Exibe quando 10% do elemento é visível
  });
  
  projects.forEach(project => {
    observer.observe(project);
  });
  