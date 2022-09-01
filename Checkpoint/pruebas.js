/* Ejercicio 03
let arr = [
    { nombre: "leche", peso: 30 },
    { nombre: "fideos", peso: 15 },
];

function Stack() {
    this.array = [];
}

Stack.prototype.push = function (elemento) {
    this.array.push(elemento);
};
let stack = new Stack();
let counter = 0;
if (arr.length === 0) console.log("Error");
for (let i = 0; i < arr.length; i++) {
    counter += arr[i].peso;
    stack.push(arr[i].nombre)
}
if (counter <= 50) console.log(stack);
if (counter > 50) console.log("No se puede crear la pila");
console.log(stack instanceof Stack) */

/*

function Queue() {
    this.array = [];
}

Queue.prototype.enqueue = function (elemento) {
    return this.array.push(elemento);
}

Queue.prototype.dequeue = function () {
    return this.array.shift();
}

Queue.prototype.size = function () {
    return this.array.length;
}
const clientes1 = new Queue();
const clientes3 = new Queue();

clientes1.enqueue({
    nombre: "Jorge",
    dinero: 1500,
    precioProductos: 1000,
});

clientes1.enqueue({
    nombre: "Mateo",
    dinero: 2000,
    precioProductos: 1900,
});

clientes1.enqueue({
    nombre: "Mora",
    dinero: 5000,
    precioProductos: 5800,
});

clientes3.enqueue({
    nombre: "Jorge",
    dinero: 1500,
    precioProductos: 1000,
});

clientes3.enqueue({
    nombre: "Mateo",
    dinero: 2000,
    precioProductos: 1900,
});

clientes3.enqueue({
    nombre: "Mora",
    dinero: 5000,
    precioProductos: 10,
});

function cobrarClientes(clientes) {
    // Tu código aquí:
    let nombres = [];
    //if (clientes.size() === 0) return false;
    let ver = clientes.dequeue()
    let din = ver.dinero;
    din
    let pr = ver.precio
    pr
    ver
    while (clientes.size() > 0) {
        let cliente = clientes.dequeue();
        if (cliente.dinero >= cliente.precioProductos) {
            nombres.push(cliente.nombre);
            if (clientes.size() === 0) return false;
        } else {
            return nombres;
        }
    }
    return nombres;
}

let cobrar = cobrarClientes(clientes1);


const productos = {
    Leche: 100,
    Queso: 150,
    Pan: 50,
    Frutas: 110,
    Arroz: 40,
    Jugo: 80,
};*/

/*Ejercicio 06

if(!productos.hasOwnProperty(nombreProducto)) return "Producto inexistente"
if(nombreProducto === this.value) return "Ya existe el producto";
if(productos.nombreProducto < this.value){
  if (this.left === null) {
    return this.left.agregarProductos(agregarProductos, productos);
  }
  if (this.right === null) {
    return this.right.agregarProductos(agregarProductos, productos);
  }
}*/

/*Ejercicio 07
function ordenarPrecios(arr) {
    // Tu código aquí:
    let swap = true;
    let max = arr.length - 1;
    let p = arr.includes(0);
    p
    if (arr.includes(0)) {
        return false;
    }
    while (swap) {
        swap = false;
        for (let i = 0; i < max; i++) {
            if (arr[i] > arr[i + 1]) {
                let aux = arr[i];
                arr[i] = arr[i + 1];
                arr[i + 1] = aux;
                swap = true;
            }
        }
        max--;
    }
    return (arr);
}

let ord = ordenarPrecios([20, 15, 0, 10, 5]);
ord
*/

//Ejercicio 8

/*

function BinarySearchTree(valor) {
    this.value = valor;
    this.left = null;
    this.right = null;
}

BinarySearchTree.prototype.searchMax = function () {
    // Tu código aquí:
    if (this.right) return this.right.searchMax();
    // if left tree is null, indicate i'm the smallest available, return me instead.
    else return this.value;
};
BinarySearchTree.prototype.insert = function (value) {

    if (value < this.value) {
        if (this.left === null) {
            var newTree = new BinarySearchTree(value);
            this.left = newTree;
        } else {
            this.left.insert(value);
        }
    } else {
        if (this.right === null) {
            var newTree = new BinarySearchTree(value);
            this.right = newTree;
        } else {
            this.right.insert(value);
        }
    }
}

const miArbol1 = new BinarySearchTree(17);
miArbol1.insert(7);
miArbol1.insert(24);
miArbol1.insert(32);
miArbol1.insert(18);
miArbol1.insert(3);
miArbol1.insert(15);
miArbol1.insert(4);
miArbol1.insert(45);
let max = miArbol1.searchMax();
max*/

//Ejercicio 10

let empleados = [
    { nombre: "Jorge", ingresoA: 9 },
    { nombre: "Mora", ingresoA: 8 },
    { nombre: "Mati", ingresoA: 10 },
    { nombre: "Juani", ingresoA: 7 },
];

function ingresoEmpleado(horario) {
    // Tu código aquí:
    let arr = [];
    return function ingresosHorario(empleados) {
        empleados.filter(objeto => { //aca puedo usar filter o forEach
            if (objeto.ingresoA <= horario) {
                arr.push(objeto.nombre);
            }
        });
        return arr;
    }
}

const ingresosHorario = ingresoEmpleado(9);
console.log(ingresosHorario(empleados));

