

   let tema = document.getElementById('switch');
    
   //funcion que maneja el cambio de tema
    function temaDark(){
        document.body.classList.toggle('dark-tema');
    }
    
    tema = addEventListener('change', temaDark);
    
//=====================================================================


//matrices de cada numero en un objeto
const numeros = {
    'cero' : [1,2,3,4,5,6,10,11,15,16,20,21,22,23,24,25],
    'uno' : [4,8,9,12,14,19,24],
    'dos' : [1,2,3,4,5,10,11,12,13,14,15,16,21,22,23,24,25],
    'tres' : [1,2,3,4,5,10,11,12,13,14,15,20,21,22,23,24,25],
    'cuatro' : [1,6,9,11,12,13,14,15,19,24],
    'cinco' : [1,2,3,4,5,6,11,12,13,14,15,20,21,22,23,24,25],
    'seis' : [1,6,11,12,13,14,15,16,20,21,22,23,24,25],
    'siete' : [1,2,3,4,5,9,13,17,21],
    'ocho' : [1,2,3,4,5,6,10,11,12,13,14,15,16,20,21,22,23,24,25],
    'nueve' : [1,2,3,4,5,6,10,11,12,13,14,15,20,25],
    'puntos' : [8,18],
    'pm' : [12,13,14,17,18,19,22],
    'am' : [12,14,17,18,19,22,24]
};

//simbolos opcionales para formar el numero
const simbolo1 = "⁑";
const simbolo2 = "*"
const simbolo3 = "❚"  
const simbolo4 = "0"

const simbolo =  simbolo1

//===================================================================================   
function iniciarReloj() {
    setInterval(() => {
        const hora = new Date(); 
        const h1 = Math.floor(hora.getHours() / 10);
        const h2 = hora.getHours() % 10;
        const m1 = Math.floor(hora.getMinutes() / 10);
        const m2 = hora.getMinutes() % 10;
        const s1 = Math.floor(hora.getSeconds() / 10);
        const s2 = hora.getSeconds() % 10;

        actualizarReloj(h1,h2,m1,m2,s1,s2);
    }, 1000);
}


//===================================================================================      

function actualizarReloj(h1, h2, m1, m2, s1, s2) {
    const relojContainer = document.getElementById('relojContainer');
    relojContainer.innerHTML = '';

    // Muestra los números
    mostrarNumeros(numeros[nombreNumero(h1.toString())], relojContainer); // horas
    mostrarNumeros(numeros[nombreNumero(h2.toString())], relojContainer); // horas
    mostrarNumeros(numeros['puntos'], relojContainer);
    mostrarNumeros(numeros[nombreNumero(m1.toString())], relojContainer); // minutos
    mostrarNumeros(numeros[nombreNumero(m2.toString())], relojContainer); // minutos
    mostrarNumeros(numeros['puntos'], relojContainer);
    mostrarNumeros(numeros[nombreNumero(s1.toString())], relojContainer); // segundos
    mostrarNumeros(numeros[nombreNumero(s2.toString())], relojContainer); // segundos

    relojContainer.appendChild(document.createElement('br'));
    relojContainer.appendChild(document.createElement('br'));
    relojContainer.appendChild(document.createElement('br'));
}


//===================================================================================     

// Función que retorna el nombre del número en formato string
function nombreNumero(number) {
    switch (number) {
        case '1': return 'uno';
        break;
        case '2': return 'dos';
        break;
        case '3': return 'tres';
        break;
        case '4': return 'cuatro';
        break;
        case '5': return 'cinco';
        break;
        case '6': return 'seis';
        break;
        case '7': return 'siete';
        break;
        case '8': return 'ocho';
        break;
        case '9': return 'nueve';
        break
        default: 
            return 'cero';
    }
}

//===================================================================================   

function mostrarNumeros(numero, container) {
    const div = document.createElement('div');
    div.classList.add('digito');

    for (let x = 1; x <= 5; x++) {
        for (let y = 1; y <= 7; y++) {
            if ((numero.includes(5 * (x - 1) + y)) && y <= 5) {
                div.appendChild(document.createTextNode(simbolo));
            } else {
                div.appendChild(document.createTextNode("\u00A0\u00A0")); // Espacio no rompible
            }
        }
         div.appendChild(document.createElement('br'));
    }
    container.appendChild(div);
}


//===================================================================================   

// Ejecucion del reloj al iniciar la pagina
// window.onload = iniciarReloj; //opcion1 funciona 50/50 como de mehh..

//opcion2, esta mas pro :V
document.addEventListener("DOMContentLoaded", iniciarReloj);


//===================================================================================   
// EN DESARROLLO


// let icono = document.getElementById('miIcono');
// let cuadroEntrada = document.getElementById('cuadroEntrada');

// icono.addEventListener('click', function(){
//     cuadroEntrada.style.display = 'block';
// })



