let userName = prompt("Ingresa tu nombre")
if(!userName){
    alert('Usted no inserto nombre de usuario, por favor vuelva a intentarlo')
}
else{
    alert(`Hola ${userName} ¿Como esta?`)
}
let userAge = parseInt(prompt('Que edad tiene?'))
if(userAge>=18){
    alert('Puede acceder')
}
else{
    alert('Denegado hasta que tenga 18 años')
}

