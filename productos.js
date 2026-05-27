class Producto {
#precio;
#stock;

constructor(nombre, marca, precio, stock) {
    this.nombre = nombre;
    this.marca = marca;
    this.#precio = precio;
    this.#stock = stock;
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