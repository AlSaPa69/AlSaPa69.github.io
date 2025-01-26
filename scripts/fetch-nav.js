// Este módulo es utilizado para fetchear el contenido de la tabla de navegación.
const htmlRoute = 'https://alsapa69.github.io/sidebar_src.html'; // Ruta para acceder al contenido de la sidebar.

const sidebar = document.getElementsByClassName('sidebar')[0];
fetch(htmlRoute).then(res => res.text()).then(res => {
    sidebar.innerHTML = res;
    console.log(res);
});