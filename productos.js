const productos = [
  { nombre: "Brownie", precio: 8900, imagen: "img/browni.png" },
  { nombre: "Macarons", precio: 4900, imagen: "img/macarons.png" },
  { nombre: "Croissant", precio: 3200, imagen: "img/croasan.png" },
  { nombre: "Red Velvet", precio: 8200, imagen: "img/redvelvet.png" },
  { nombre: "Pavlova", precio: 8700, imagen: "img/pavlova.png" },
  { nombre: "NY Cookie", precio: 2500, imagen: "img/galleta.png" },
  { nombre: "Cheesecake", precio: 4300, imagen: "img/cheese.png" },
  { nombre: "Carrot Cake", precio: 7900, imagen: "img/carrot.png" },
  { nombre: "Cinnamon Roll", precio: 4600, imagen: "img/cinnamon.png" },
  { nombre: "Blueberry Scone", precio: 3800, imagen: "img/scon_blu.png" },
  { nombre: "Blondie", precio: 4000, imagen: "img/blondi.png" },
  { nombre: "Bagel Azul", precio: 5200, imagen: "img/bluebagel.png" }
];

const container = document.getElementById("productos-container");

productos.forEach(producto => {
  const card = document.createElement("div");
  card.className = "col s12 m6 l4"; // 3 por fila en desktop, 2 en tablet, 1 en móvil

  card.innerHTML = `
    <div class="card z-depth-3">
      <div class="card-image">
        <img src="${producto.imagen}" alt="${producto.nombre}" style="height: 200px; object-fit: cover;">
        <span class="card-title">${producto.nombre}</span>
      </div>
      <div class="card-content">
        <p class="pink-text text-darken-3"><strong>$${producto.precio.toLocaleString('es-CL')}</strong></p>
      </div>
      <div class="card-action center-align">
        <button class="btn pink darken-2">Agregar</button>
      </div>
    </div>
  `;

  container.appendChild(card);
});
