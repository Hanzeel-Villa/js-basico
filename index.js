/* ------------------- DECLARACION DE VARIABLES LET Y VAR ------------------- */
let saludo = "Hola mundo"; //local
var numero = 5; //global

/* --------------------------- IMPRIMIR EN CONSOLA -------------------------- */
//console.log(numero);

/* --------------------------------- ALERTAS -------------------------------- */
//alert(saludo);


/* ------------------------ FUNCIONES SIN PARAMETROS ------------------------ */
function buenosDias(){
    alert("Buenos días");
}
//buenosDias();

/* ------------------------ FUNCIONES CON PARAMETROS ------------------------ */
function saludar(nombre){
    alert(`Hola ${nombre}`);
}
//saludar("hanzeel");

/* --------------------------------- PROMPT --------------------------------- */
//edad = prompt("cuál es tu edad?")

/* ----------------------------- STRING A NUMERO ---------------------------- */
/*
console.log(typeof(edad));
//edad = parseInt(edad);
console.log(typeof(edad));
*/

/* --------------------------------- ARRAYS --------------------------------- */
/*
numeros = [10, "Hanzeel", 3.14, 50, 60];
console.log(numeros); //Arreglo
console.log(numeros[0]); //Posicion 0 = 10
console.log(numeros.length); //Cantidad de elementos = 5

numeros.push(100); //Añadir 100 al arreglo
console.log(numeros);

numeros.pop(); //Elimina el último elemento
console.log(numeros);
*/

/* -------------------------- USO DE CONDICIONALES -------------------------- */

/* -------------------------------- IF NORMAL ------------------------------- */
let edad_hanzeel = 18;
if (edad_hanzeel => 18){
    //console.log("Hanzeel es mayor de edad");
}
else{
    //console.log("Hanzeel es menor de edad")
}

/* --------------------------------- IF ELSE -------------------------------- */

num1 = 0
num2 = 1
num3 = 2

console.log(`Números: ${num1}, ${num2}, ${num3}`)

if(num1 > num2 && num1 > num3){
    //console.log(`número: ${num1} es el mayor`);
}
else if(num2 > num1 && num2 > num3){
    //console.log(`número: ${num2} es el mayor`);
}
else{
    //console.log(`número: ${num3} es el mayor`); 
}

/* --------------------------------- SWTICH --------------------------------- */

//valor = parseInt(prompt("Dame un número del 1 al 3: "));

/*
switch (valor){
    case 1:
        console.log("Número 1");
        break;
    case 2:
        console.log("Número 2");
        break;
    case 3:
        console.log("Número 3");
        break; 
    default: 
        console.log("Número fuera de rango");
}
*/

/* ----------------------------------- FOR ---------------------------------- */

for (let i = 0; i < 10; i++) {
    console.log(`Posición de i = ${i}`);
}

/* ---------------------------------- WHILE --------------------------------- */

/*
opcion = true;
while (opcion) {
    respuesta = parseInt(prompt('Quieres salir del ciclo? "1" para si "2" para no'))

    if (respuesta == 1){
        opcion = false;
        console.log("Fin del ciclo");
    }
    else if(respuesta == 2){
        console.log("=======================");
    }
    else{
        console.log("Número fuera de rango")
    }
}
*/