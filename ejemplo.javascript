/* familia = ['Milos','Claudio','Patricia','Jan']
familia.push('Nicole')
var ultimo = familia[familia.length - 1];
alert(ultimo)
familia.push(prompt('Adicione un miembro a la familia'))
console.log(familia); */

var empleados = [{nombre:'Juan', apellido:'Pedro',edad: 40 }, 
{nombre: 'Ana', apellido: 'Garcia', edad: 25},
{nombre: 'Maria', apellido: 'Zarate', edad: 34}]


var titulo = document.getElementById('titulo')
var arreglo = document.getElementById('arreglo')

var rol =  prompt('Cual es su rol?').toLowerCase() 
if(rol == 'admin' || rol == 'recursos'){
    var clave = prompt('Cual es su clave?')
}else{
    titulo.innerHTML = 'Ha habido un error, pregunte a su supervisor rol y contraseñas correctas.'
}
if(clave == 1234){
    var usuario = prompt('Cual es su nombre de usuario?')
}else{
    titulo.innerHTML = 'Ha habido un error, pregunte a su supervisor rol y contraseñas correctas.'
}

if(rol && clave && usuario != undefined){    
    titulo.innerHTML = `Hola ${usuario} bienvenido a nuestra aplicación`

    for(var i=0; i < empleados.length;i++){
        arreglo.innerHTML += `<li>${empleados[i].nombre} ${empleados[i].apellido} ${empleados[i].edad}</li>`
    }


    
}    