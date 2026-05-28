class Producto {
#precio;
#stock;

constructor(nombre, marca, precio, stock, imagen) {
    this.nombre = nombre;
    this.marca = marca;
    this.#precio = precio;
    this.#stock = stock;
    this.imagen = imagen;
}

get precio() { return this.#precio; }
get stock() { return this.#stock; }

set precio(valor) {
    if (valor < 0) throw new Error("El precio no puede ser negativo");
    this.#precio = valor;
}

set stock(valor) {
    if (valor < 0) throw new Error("El stock no puede ser negativo");
    this.#stock = valor;
}

get estaDisponible() { return this.#stock > 0; }
get precioFormateado() { return `$${this.#precio.toLocaleString('es-AR')}`; }

fichaTecnica() {
    return `${this.nombre} - ${this.marca}`;
}
}


class Notebook extends Producto {
constructor(nombre, marca, precio, stock, procesador, ramGB, almacenamientoGB, pantallaPulgadas) {
    super(nombre, marca, precio, stock);
    this.procesador = procesador;
    this.ramGB = ramGB;
    this.almacenamientoGB = almacenamientoGB;
    this.pantallaPulgadas = pantallaPulgadas;
}

fichaTecnica() {
    return `${this.nombre} - ${this.procesador} - ${this.ramGB}GB RAM - ${this.almacenamientoGB}GB - ${this.pantallaPulgadas}"`;
}
}


class Celular extends Producto {
constructor(nombre, marca, precio, stock, pantallaPulgadas, bateriaMah, camaraMp, almacenamientoGB) {
    super(nombre, marca, precio, stock);
    this.pantallaPulgadas = pantallaPulgadas;
    this.bateriaMah = bateriaMah;
    this.camaraMp = camaraMp;
    this.almacenamientoGB = almacenamientoGB;
}

fichaTecnica() {
    return `${this.nombre} - ${this.pantallaPulgadas}" - ${this.bateriaMah}mAh - ${this.camaraMp}MP - ${this.almacenamientoGB}GB`;
}
}


class Auricular extends Producto {
constructor(nombre, marca, precio, stock, tipo, wireless, cancelacionRuido) {
    super(nombre, marca, precio, stock);
    this.tipo = tipo;
    this.wireless = wireless;
    this.cancelacionRuido = cancelacionRuido;
}

fichaTecnica() {
    return `${this.nombre} - ${this.tipo} - Wireless: ${this.wireless} - Cancelación de ruido: ${this.cancelacionRuido}`;
}
}


class Monitor extends Producto {
constructor(nombre, marca, precio, stock, pulgadas, resolucion, panelTipo, hz) {
    super(nombre, marca, precio, stock);
    this.pulgadas = pulgadas;
    this.resolucion = resolucion;
    this.panelTipo = panelTipo;
    this.hz = hz;
}

fichaTecnica() {
    return `${this.nombre} - ${this.pulgadas}" - ${this.resolucion} - ${this.panelTipo} - ${this.hz}Hz`;
}
}


class PCEscritorio extends Producto {
constructor(nombre, marca, precio, stock, procesador, ramGB, almacenamientoGB, placaVideo, fuenteW) {
    super(nombre, marca, precio, stock);
    this.procesador = procesador;
    this.ramGB = ramGB;
    this.almacenamientoGB = almacenamientoGB;
    this.placaVideo = placaVideo;
    this.fuenteW = fuenteW;
}

fichaTecnica() {
    return `${this.nombre} - ${this.procesador} - ${this.ramGB}GB RAM - ${this.almacenamientoGB}GB - ${this.placaVideo} - ${this.fuenteW}W`;
}

}

// ── Catálogo de productos ────────────────────────────────────
// Array global — definido fuera de cualquier función o clase
const catalogo = [
new Producto(
    'MacBook Air M2', 'Apple', 2100000, 4,
    'https://images.unsplash.com/photo-1517336714731-489689fd1ca8?w=400'
),
new Producto(
    'iPhone 15', 'Apple', 1650000, 12,
    'https://images.unsplash.com/photo-1695048133142-1a20484d2569?w=400'
),
new Producto(
    'Sony WH-1000XM5', 'Sony', 420000, 0,
    'https://images.unsplash.com/photo-1618366712010-f4ae9c647dcb?w=400'
),
new Producto(
    'LG UltraGear 27GP850', 'LG', 480000, 6,
    'https://images.unsplash.com/photo-1527443224154-c4a3942d3acf?w=400'
),
new Producto(
    'PC Gamer Entry Level', 'Armada', 1200000, 5,
    'https://images.unsplash.com/photo-1587202372634-32705e3bf49c?w=400'
),
];

function crearTarjeta(producto) {
const article = document.createElement('article');
article.className = 'tarjeta';

  // Imagen
const img = document.createElement('img');
img.src = producto.imagen;
img.alt = producto.nombre;

  // Nombre
const h3 = document.createElement('h3');
h3.textContent = producto.nombre;

  // Precio
const precio = document.createElement('p');
precio.textContent = producto.precioFormateado;

  // Ficha técnica
const ficha = document.createElement('p');
ficha.textContent = producto.fichaTecnica();

  // Lista de características
const ul = document.createElement('ul');

const liMarca = document.createElement('li');
liMarca.textContent = `Marca: ${producto.marca}`;

const liStock = document.createElement('li');
liStock.textContent = producto.estaDisponible
    ? `Stock: ${producto.stock} unidades`
    : 'Sin stock';

ul.appendChild(liMarca);
ul.appendChild(liStock);

  // Botón
const btn = document.createElement('button');
btn.textContent = producto.estaDisponible ? 'Agregar al carrito' : 'Sin stock';
btn.disabled = !producto.estaDisponible;

  // Armar la tarjeta
const info = document.createElement('div');
info.className = 'tarjeta-info';
info.appendChild(h3);
info.appendChild(precio);
info.appendChild(ficha);
info.appendChild(ul);
info.appendChild(btn);

article.appendChild(img);
article.appendChild(info);

return article;
}

// Insertar todas las tarjetas en el div#productos
const contenedor = document.getElementById('productos');
catalogo.forEach(producto => contenedor.appendChild(crearTarjeta(producto)));