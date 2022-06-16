// // const IVA = 1.21
// const paises = ['Roma', 'Amsterdam', 'Paris', 'Tokyo', 'Cancun', 'Panama']

// const productos = []
// const carrito = []

// function recorrerArray () {
//     for (let i = 0; i < 6; i++) {
//         console.log(paises[i])
//     }
// }

// function listarPaises() {
//     console.clear()
//     console.table(paises)
// }


// function agregarPais() { 
//     let nuevoPais = prompt("Ingresa un nuevo país:")
//         paises.push(nuevoPais)
//         listarPaises()
// }

// function quitarPais() {
//     let paisAquitar = prompt("Ingresa el país a quitar")
//     let indice = paises.indexOf(paisAquitar)
//     let resultado = paises.splice(indice, 1)
//         alert("Se ha eliminado el país: " + resultado)
//         listarPaises()
// }

// function buscarPais() {
//     let paisAbuscar = prompt("Ingresa el país a buscar:")
//     let resultado = paises.includes(paisAbuscar)
//         if (resultado) {
//             console.log("El país se encuentra cargado.")
//         } else {
//             console.warn("No se encontró el país:", paisAbuscar)
//         }
// }

// function agregarProducto() {
//     let id = creoID()
//     let nombre = prompt("Ingresa el nombre del producto:")
//     let precio = parseInt(prompt("Ingresa el precio:"))
//         productos.push(new Producto(id, nombre, precio))
// }

// function buscarProducto() {
//     debugger
//     let aBuscar = prompt("Ingrese el nombre del producto a buscar:").toUpperCase()
//         let resultado = productos.find((producto)=> producto.nombre.includes(aBuscar))
//         if (resultado !== undefined) {
//             console.clear()
//             console.table(resultado) 
//         }
//     }




const listadoViajes = document.getElementById("listadoViajes")
const listadoCarrito = document.getElementById("listadoCarrito")


const titulo = document.getElementById("titulo")


titulo.innerText = "NUEVA YORK"





function listarServicios() {
    console.clear()
    console.table(servicios)
}

function existeServicio() {
    let bs = prompt("Ingresa el servicio a buscar:")
    let respuesta = servicios.includes(bs)
        if (respuesta) {
            console.log(bs, "existe como servicio")  
        } else {
            console.warn(bs, "no existe como servicio")  

        }
}

function eliminarServicio(){
    let es = prompt("Ingresa el servicio a eliminar:")
        let indice = servicios.indexOf(es)
            servicios.splice(indice, 1)
}


class Servicio {
    constructor (cod, desc, precio) {
        this.codigo = cod
        this.description = desc
        this.precio = precio
    }
    precioFinal() {
        return (this.precio * 1.15)
    }
}


const servicios = []


function cargoArrayObj() {
    servicios.push(new Servicio(123, "VIAJES A ROMA", 2600))
    servicios.push(new Servicio(453, "VIAJES A AMSTERDAM", 2300))
    servicios.push(new Servicio(234, "VIAJES A PARIS", 2700))
    servicios.push(new Servicio(456, "VIAJES A TOKYO", 3200))
    servicios.push(new Servicio(432, "VIAJES A CANCUN", 2100))
    servicios.push(new Servicio(134, "VIAJES A PANAMA", 2800))
    servicios.push(new Servicio(654, "VIAJES A NUEVA YORK", 3400))
    servicios.push(new Servicio(657, "VIAJES A IGUAZU", 1700))
    servicios.push(new Servicio(974, "VIAJES A RIO DE JANEIRO", 1900))
    servicios.push(new Servicio(752, "VIAJES A BERLIN", 2400))
    servicios.push(new Servicio(425, "VIAJES A PRAGA", 2700))
    servicios.push(new Servicio(537, "VIAJES A VENECIA", 2300))

}
cargoArrayObj()

function filtrarServicio() {
    let aBuscar = prompt("Ingrese el destino").toUpperCase()
    let respuesta = servicios.filter( servicio => servicio.description.includes(aBuscar))
            console.table(respuesta) 

}

function precioImpuestos() {
    const arrayConvertido = servicios.map( servicios => {
                                        return {
                                            codigo: servicios.codigo,
                                            description: servicios.description.toLowerCase(),
                                            precio: servicios.precio * 1.21
                                        }
    })
    console.table(arrayConvertido)


}

// function calculaCarrito() {
//     const totalCarrito = carrito1.reduce((total, producto) => total + producto.precio, 0)
//     console.log("TOTAL DEL CARRITO:", total)
// }















