
document.addEventListener('DOMContentLoaded', function() {
    const elems = document.querySelectorAll('.carousel');
    const instances = M.Carousel.init(elems, {
      fullWidth: true,    // hace el carrusel grande
        // agrega los puntitos indicadores
    });

    // Botón anterior
    document.getElementById('prevBtn').addEventListener('click', () => {
      instances[0].prev();
    });

    // Botón siguiente
    document.getElementById('nextBtn').addEventListener('click', () => {
      instances[0].next();
    });
});

document.addEventListener('DOMContentLoaded', function() {
  var elems = document.querySelectorAll('.dropdown-trigger');
  var instances = M.Dropdown.init(elems, {
    coverTrigger: false, // hace que no tape el botón
    constrainWidth: false // ancho automático según el contenido
  });
});

document.addEventListener('DOMContentLoaded', function() {
    var elems = document.querySelectorAll('.dropdown-trigger');
    M.Dropdown.init(elems, {coverTrigger: false});
    });