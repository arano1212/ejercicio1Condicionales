//numero 1
/*const question = prompt ('Eres bellisimo(a)? si/no');
if (question === "si") {
    alert('ciertamente');
    console.log('cietamente!');
    
} else {
    alert('No te creo');
    console.log('No te creo!');
}*/

//numero2

/*const number = prompt('Elige un Numero');
if (number%2 === 0) {
    alert(`${number}  es divisible entre 2`);
    console.log(number + 'es divisible entre dos');
    
} else 
    if( number%3 === 1){
    alert (`${number} no es divisible entre 2`);
console.log(number+ 'no es divisible entre 2');
}else{
    alert('eso no es un numero ');
}*/


//numero3
/*const number = prompt('Introduce un numero');
if (number%2 === 0) {
    alert(`${number}  es Par`);
    console.log(number + 'es par');
    
} else 
    if( number%3 === 1){
    alert (`${number} es Impar`);
console.log(number+ 'es Impar');
}else{
    alert('eso no es un numero ')
}*/
// en el ejercico 3 y 4 el numero tres en divisible entre 3 y no deja residuo por lo tanto me lo tomo como si no fuera un numero 

//numero 4 
/*const number = prompt('Juega con nosotros, Adivina el numero (1 al 1000) ? y llevate un premio');
if (number ==="1000") {
    alert('Felicidades ganaste un premio');
    
} else if( number <=1000) {
    alert(`lo sentimos ${number}, no es ganador, SIGUE PARTICIPANDO!  `);

    
}else{
    alert('eso no es un  numero');
}*/

//numero 5 
/*const number = prompt('Introduce un numero ');
const number2 = prompt ('introduce otro numero');
const comperNumber = number<=number2;
const comperNumber2 = number2<=number;
if (comperNumber) {
    alert(` el ${number} es menor`);
    console.log(`el ${number} es menor`);
    
} else if(comperNumber2){
    alert(` el ${number2} es menor`);
    console.log(`el ${number2} es menor`);
    
}*/

//numero 6 
/*const number1 = parseFloat (prompt('ingresa un numero '));
const number2 =  parseFloat (prompt('ingresa otro un numero '));
const number3 = parseFloat (prompt('y por  ultimo un numero mas '));

if(number1> number2 && number1>number3) {
      alert(`el ${number1} es mayor`);    
} else if(number2>number1 && number2>number3){
    alert(`el ${number2}es mayor`);
}else if(number3>number1 && number3>number2){
    alert(`el ${number3} es mayor`);
}if(number1 === number2 && number1 < number3) {
    alert(`el ${number1} es igual a ${number2} , ${number3} es mayor`);    
} else if( number1 === number3 && number1<number2){
    alert(`el ${number1} es igual ${number3}, ${number2} es mayor`);
}else if(number2 === number3 && number2<number1){
    alert(`el ${number2} es igual ${number3}, ${number1} es mayor`);

}*/

//numero7
/*let day = prompt('que dia de la seman es hoy ?')
switch (day) {
    case 'lunes':
        alert(`hoy es Lunes, hoy toca danza y ejercico`);
        console.log(`hoy es Lunes, hoy toca danza y ejercico`);
        break;

    case 'martes':
        alert(`hoy es Martes, hoy toca recreacion libre, sugerencias : Videjuegos`);
        console.log(`hoy es Martes, hoy toca recrecacion libre, sugerencias : Videjuegos `);
        break;

    case 'miercoles':
        alert(`hoy es Miercoles, hoy toca recreacion libre, sugerencias : Lee un Libro`);
        console.log(`hoy es Miercoles, hoy toca recrecacion libre, sugerencias : Lee un libro `);
        break;

    case 'jueves':
        alert(`hoy es Jueves, hoy toca recreacion libre, sugerencias : Estudiar!`);
        console.log(`hoy es Jueves, hoy toca recrecacion libre, sugerencias : Estudiar!`);
        break;

    case 'viernes':
        alert(`hoy es Viernes, hoy toca Terapia , NO FALTES!`);
        console.log(`hoy es Viernes, hoy toca Terapia, NO FALTES!`);
        break;


    case 'sabado':
        alert(`hoy es Sabado, hoy tenemos Evento Familiar , QUITESE LA PIJAMA !`);
        console.log(`hoy es Sabado, hoy tenemos un Evento Familiar, QUITESE LA PIJAMA!`);
        break;

    case 'domingo':
        alert(`hoy es Domingo, hoy toca una CRISIS EXSITENCIAL, SUERTE!`);
        console.log(`hoy es Domingo, hoy toca una CRISIS EXISTENCIAL, SUERTE!`);
        break;

    default:
        alert(`eso no es un dia de la semana`);
        console.log(`eso no es un dia de la semana`);
        break;
}*/


//numero 8 
/*let calification = prompt(` Que calificacion tienes?`)
switch (calification) {
    case '1':
        alert(`REPROBADO!`);
        break;

    case '2':
        alert(`REPROBADO!`)
        break;

    case '3':
        alert(`REPROBADO!`);
        break;

    case '4':
        alert(`REPROBADO!`)
        break;

    case '5':
        alert(`REPROBADO!`)
        break;

    case '6':
        alert(`REGULAR`)
        break;

    case '7':
        alert(`REGULAR`)
        break;


    case '8':
        alert(`REGULAR`)
        break;

    case '9':
        alert(`BIEN!`)
        break;

    case '10':
        alert(`EXCELENTE!`)
        break;


    default:
        alert(`ERROR!`)
        break;
}*/

//NUMERO 8 
/*let calificacion = prompt("Ingrese una calificación entre 1 y 10:");
calificacion = parseFloat(calificacion);
if (calificacion >= 1 && calificacion <= 10) {

    if (calificacion < 6) {
        alert(`REPROBADO!`);
    } else if (calificacion >= 6 && calificacion <= 8) {
        alert (`REGULAR`);
    } else if (calificacion === 9) {
        alert(`BIEN`);
    } else {
        alert(`EXCELENTE!`);
    }  

} else {
    alert('ERROR!');
}*/

//numero 9
/*let icecream = prompt(`BIENVENIDO A KING! QUIERE UN HELADO?
tenemos topping de oreo, kitkat , brownie, sin topping`);

switch (icecream) {
    case 'oreo':
        icecreamSinTopping = 50;
        oreo = 10;
        icecream2 = icecreamSinTopping + oreo;
        alert(`son ${icecream2} MXN`);
        break;

    case 'kitkat':
        icecreamSinTopping = 50;
        kitkat = 15;
        icecream3 = icecreamSinTopping + kitkat;
        alert(`son ${icecream3} MXN`);
        break;

    case 'brownie':
        icecreamSinTopping = 50;
        brownie = 20;
        icecream4 = icecreamSinTopping + brownie;
        alert(`son ${icecream4} MXN`);
        break;

    case 'sin topping':
        icecreamSinTopping = 50;
        alert(`son ${icecreamSinTopping} MXN`);
        break;

    default:

    alert(`no tenemos este topping, lo sentimos. el precio es de 50 mxn del Helado sin topping`)
        break;
}*/

//numero 10 
/* calcularCostoTotal(costoMensual, duracion) {
    return costoMensual * duracion;
}

function aplicarDescuento(costoMensual, descuento) {
    return costoMensual - (costoMensual * descuento);
}*/

//numero 10
/*const curso = {
    course: 4999,
    carrera: 3999,
    master: 2999,
}
const periodo = {
    course: 2,
    carrera: 6,
    master: 12,
};
const becas = {
    facebook: 0.2,
    google: 0.15,
    jesua: 0.5,
};

const opcionCurso = prompt('Bienvenido! manejamos los siguentes course, carrera y master!')
if (opcionCurso in curso) {

    const costoMensual = curso[opcionCurso];

    alert(`El costo Mensual es de ${costoMensual} MXN`);

} else {
    alert(`Lo sentimos! no ofrecemos ese curso!`);

}
const tieneBeca = prompt(' Usted tiene Beca? si/no');

if (tieneBeca === 'si') {

    const becaElegida = prompt(`que beca maneja  facebook, google, jesua?`);
    if (becaElegida in becas) {
    
        const discount = becas[becaElegida];
        const costosMensualeCondiscount = curso[opcionCurso] - (curso[opcionCurso]*discount);
        const costoTotal = costosMensualeCondiscount * periodo[opcionCurso];
        alert(`El costo mensual es $ ${costosMensualeCondiscount}`);
        alert(`El costo total es $ ${costoTotal}`);

    } else {
        alert('Beca no válida.');
    }

} else {
    alert(`El costo mensual es de ${curso[opcionCurso]} MXN y el costo total es ${curso[opcionCurso] * periodo[opcionCurso]}`);
}
*/

//numero11
/*const precioKilometro={
    coche: 0.20,
    moto: 0.10,
    autobus: 0.5,
};


const vehiculo = prompt (`que vehiculo manejas`)
if (vehiculo in precioKilometro) {
    const precio = precioKilometro[vehiculo];
    alert(` tu precio es ${precio}`);


    const kilometrosRecorridos= parseInt(prompt (`cuantos kilometros has recorrido?`));

if (precio <=100) {
    const  extra = 5;
    const cobro= precio*kilometrosRecorridos;
    const costoTotal = cobro + extra;
    alert(`el costo es ${costoTotal}`);
    
} else if( precio >= 101) {
    const  extra = 10;
    const cobro= precio*kilometrosRecorridos;
    const costoTotal = cobro + extra;
    alert(`el costo es ${costoTotal}`);

    
    
}else{
    alert(`opcion no valida`)
}

    
}else{
alert(`vehiculo invalido`)
}*/

