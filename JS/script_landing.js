const contenedor = document.getElementById('container-card')
const btn = document.getElementById('mostrar')

btn.addEventListener('click', () => {
    contenedor.classList.toggle('oculto')
    body.classList.add('oscuro')
})

