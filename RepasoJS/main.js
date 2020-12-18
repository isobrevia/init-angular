var nombre = "Iván";
var altura = 180;
/*
var concatenacion = nombre + " " + altura;
//document.write(concatenacion);

var datos = document.getElementById("datos");

datos.innerHTML = `
    <h1>Soy la caja de daots</h1>
    <h2>Mi nombre es : ${nombre}</h2>
    <h3> Mido: ${altura} cm </h3>
`;

if(altura >=180){
    datos.innerHTML += '<h1> eres alto </h1>';
}else{
    datos.innerHTML += '<h1> eres bajo </h1>';
}

for(var i=2000; i<=2020; i++){
    // bloque instrucciones
    datos.innerHTML += "<h2>Estamos en el año: "+i;
}
*/
function MuestraMiNombre(nombre,altura){

var misDatos =`
    <h1>Soy la caja de datos</h1>
    <h2>Mi nombre es : ${nombre}</h2>
    <h3> Mido: ${altura} cm </h3>
`;
return misDatos;
}

function imprimir(){
    var datos = document.getElementById("datos");

datos.innerHTML = MuestraMiNombre("Iván", 180);
}

imprimir();

var nomrbes = ['Iván','José','María'];

document.write('<h1>Lista de nombres</h1>');
for(i=0; i<nomrbes.length; i++){
    document.write(nomrbes[i] + '<br/>');
};

document.write('<h1>Lista de nombres con forEach</h1>');
nomrbes.forEach(function(nombre){
    document.write(nombre + '<br/>');
});

document.write('<h1>Lista de nombres con forEach</h1>');
nomrbes.forEach((nombre) => {
    document.write(nombre + '<br/>');
});

var coche = {
    modelo: 'Mercedes Clase A',
    maxima: 500,
    antiguedad: 2020,
    mostrarDatos(){
        console.log(this.modelo, this.maxima, this.antiguedad)
    },
    propiedad1: "valor aleatorio"
};

document.write("<h1>" + coche.modelo + "</h1>");
coche.mostrarDatos();
 
var saludar = new Promise((resolve, reject) => {
    setTimeout( () => {
        let saludo = "Hola muy buenas a todos chavales!";

        if(saludo){
            resolve(saludo);
        }else{
            reject('No hay saludo disponible');
        }
    },2000);
});

saludar.then(resultado => {
    alert(resultado);
})
.catch(err => {
    alert(err);
});