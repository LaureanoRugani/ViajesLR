// let userName = prompt("Ingresa tu nombre")
// if(!userName){
//     alert('Usted no inserto nombre de usuario, por favor vuelva a intentarlo')
// }
// else{
//     alert(`Hola ${userName} ¿Como esta?`)
// }
// let userAge = parseInt(prompt('Que edad tiene?'))
// if(userAge>=18){
//     alert('Puede acceder')
// }
// else{
//     alert('Denegado hasta que tenga 18 años')
// }


//WHILE
let repetir = true

while(repetir) {
    let nro = parseInt(prompt("Ingrese un numero mayor a 18"))
    if (nro >= 18) {
        repetir = false
        console.log("Ingresaste el numero correctamente!", nro)
    }
}

// let entrada = prompt("Ingresar un dato");

// while (entrada != "ESC") {
// alert ("El usuario ingreso "+ entrada);
// entrada = prompt ("Ingresar otro dato");
// }
