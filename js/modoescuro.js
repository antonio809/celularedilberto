const darkModeButton = document.getElementById('darkMode');

// Checa o tema salvo
if (localStorage.getItem('theme') === 'dark') {
    document.body.classList.add('dark-mode');
}

darkModeButton.addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');
    const currentTheme = document.body.classList.contains('dark-mode') ? 'dark' : 'light';
    localStorage.setItem('theme', currentTheme);
});

// sistema de modo escuro que deixa salvo no localstorage.