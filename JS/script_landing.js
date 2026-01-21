const contenedor = document.getElementById('the_container-card')
const btn = document.getElementById('mostrar')

btn.addEventListener('click', () => {
    contenedor.classList.toggle('oculto')
    body.classList.add('oscuro')
})

