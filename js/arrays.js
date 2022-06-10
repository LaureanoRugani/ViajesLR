// function generadorAutomatico() {
//     productos.push(new Producto(1234, "Viajes a Roma", 2600))
//     productos.push(new Producto(2345, "Viajes a Amsterdam", 2300))
//     productos.push(new Producto(3456, "Viajes a Paris", 2700))
//     productos.push(new Producto(4567, "Viajes a Tokyo", 3200))
//     productos.push(new Producto(5678, "Viajes a Cancun", 2200))
//     productos.push(new Producto(6789, "Viajes a Panama", 2600))
//     productos.push(new Producto(7890, "Viajes a Nueva York", 2900))
//     productos.push(new Producto(8900, "Viajes a Iguazu", 1100))
// }
// generadorAutomatico()

const IVA = 1.21
const paises = ['Roma', 'Amsterdam', 'Paris', 'Tokyo', 'Cancun', 'Panama']

const productos = []
const carrito = []

function recorrerArray () {
    for (let i = 0; i < 6; i++) {
        console.log(paises[i])
    }
}

function listarPaises() {
    console.clear()
    console.table(paises)
}


function agregarPais() { 
    let nuevoPais = prompt("Ingresa un nuevo país:")
        paises.push(nuevoPais)
        listarPaises()
}

function quitarPais() {
    let paisAquitar = prompt("Ingresa el país a quitar")
    let indice = paises.indexOf(paisAquitar)
    let resultado = paises.splice(indice, 1)
        alert("Se ha eliminado el país: " + resultado)
        listarPaises()
}

function buscarPais() {
    let paisAbuscar = prompt("Ingresa el país a buscar:")
    let resultado = paises.includes(paisAbuscar)
        if (resultado) {
            console.log("El país se encuentra cargado.")
        } else {
            console.warn("No se encontró el país:", paisAbuscar)
        }
}