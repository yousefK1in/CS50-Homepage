const body = document.querySelector('body');
const dmtoggle = document.querySelector('.darkmode-toggle');
const nav = document.querySelector('nav');

if (localStorage.getItem('darkMode') === 'enabled') {
    body.classList.add('dark-mode');
    dmtoggle.classList.toggle('active');
    nav.classList.toggle('navbar-dark');
    nav.classList.toggle('bg-light');
    nav.classList.toggle('bg-dark');
}

dmtoggle.addEventListener('click', () => {
    dmtoggle.classList.toggle('active');
    body.classList.toggle('dark-mode');
    nav.classList.toggle('navbar-dark');
    nav.classList.toggle('bg-light');
    nav.classList.toggle('bg-dark');

    if (body.classList.contains('dark-mode')) {
        localStorage.setItem('darkMode', 'enabled');
    }
    else {
        localStorage.setItem('darkMode', 'disabled');
    }
});


