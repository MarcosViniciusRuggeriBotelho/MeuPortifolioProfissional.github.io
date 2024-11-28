window.addEventListener('scroll', function() {
    const sections = document.querySelectorAll('section');
    const triggerPoint = window.innerHeight / 1.3;

    sections.forEach(section => {
        const sectionTop = section.getBoundingClientRect().top;
        
        if (sectionTop < triggerPoint) {
            section.classList.add('aparecer');
        } else {
            section.classList.remove('aparecer');
        }
    });
});

// Seleciona o botão de alternância
const themeSwitch = document.getElementById('theme-switch');
const body = document.body;

// Carrega a preferência do tema ao carregar a página
const savedTheme = localStorage.getItem('theme');
if (savedTheme === 'dark-mode') {
    body.classList.add('dark-mode');
    themeSwitch.checked = true; // Mantém o botão no estado correto
}

// Alterna entre os temas ao clicar no botão
themeSwitch.addEventListener('change', () => {
    if (themeSwitch.checked) {
        body.classList.add('dark-mode');
        localStorage.setItem('theme', 'dark-mode'); // Salva no localStorage
    } else {
        body.classList.remove('dark-mode');
        localStorage.setItem('theme', 'light-mode'); // Salva no localStorage
    }
});

document.getElementById('toggle-theme').addEventListener('click', function () {
    document.body.classList.toggle('dark-mode');
    this.textContent = document.body.classList.contains('dark-mode') ? '☀️' : '🌙';
});
