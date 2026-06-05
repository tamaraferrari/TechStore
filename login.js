// Lógica exclusiva del formulario de Login
const form = document.getElementById('form-login');

form.addEventListener('submit', (event) => {
    event.preventDefault(); 

    const datos = Object.fromEntries(new FormData(event.target));

    // Imprime los datos en la consola
    console.log('Login:', { email: datos.email, password: datos.password });
    
    // Limpia el formulario
    form.reset();
});