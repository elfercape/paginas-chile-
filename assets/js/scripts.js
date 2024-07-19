



//este codigo hace smooth cada que seleccion una opcion en el navbar

//aqui recorremos todo el navbar
document.addEventListener('DOMContentLoaded', function () {
    var navbarHeight = document.querySelector('.navbar').offsetHeight;
    // aqui paracada ancla (#) se activa el smooth alhacer click
    document.querySelectorAll('.navbar-nav a').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            var targetId = this.getAttribute('href').substring(1);
            var targetElement = document.getElementById(targetId);
            var targetPosition = targetElement.offsetTop - navbarHeight;

            window.scrollTo({
                top: targetPosition,
                behavior: 'smooth'
            });
        });
    });
});


//este codigo envia un alert cuando se hace click en el boton "enviar"

const alertaClick = document.getElementById("enviarMensaje")
alertaClick.addEventListener("click", function (eventoClick) {
    eventoClick.preventDefault()

    // aqui usamos jQuery para enviar el alert
    $("#enviarMensaje").click(function () {
        alert("El mensaje fue enviado correctamente");
    });


});