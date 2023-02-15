// var listaDeCompras = [];
// listaDeCompras[3] = 'Tomates';
// listaDeCompras[1] = 'Lechuga';

// console.log(listaDeCompras);



//bucles
// for (let i = 0; i < 5; i++) {
//     suma = suma + i;
//     console.log('Variable de iteración: ', i);
//  }
//  console.log('Variable suma: ', suma);
 

//  while(suma < 3) {
//     suma = suma + 1;
//         console.log(suma);
//     };
    



//operadores logicos
// function mayorYMenorYPar(num) {
// 	if( num > 5 && num < 10  && num  % 2 === 0 ) console.log(true);
// 	else console.log(false);
// };
// mayorYMenorYPar(7);
// mayorYMenorYPar(8); 

// function operadorOr(str) {
//     if (str === 'Henry' || str.length < 2) console.log(true);
//     else console.log(false);
//  }
//  operadorOr('Henry');
//  operadorOr('Javascript');
//  operadorOr('H');


//  function negacion(permiso) {
//     if (permiso) console.log('Tiene permiso');
//  }
//  negacion(true);
//  negacion(false);
 

//Arrays
var comidaRapida = ["pizza","hamburguesa","hoy dog","lasagna"]

comidaRapida.push("sandwich")

// console.log(comidaRapida)

comidaRapida.pop()
// console.log(comidaRapida)

//Objetos
var deportes = {
    conBalón: ['Fútbol', 'Baloncesto', 'Golf'],
    sinBalon: ['Boxeo', 'Surf', 'Trekking'],
 };

 var persona = { nombre: 'Lucas', edad: 26, estudios: { esProgramador: true } };

//  console.log(persona.edad)

// DOT NOTATION
var atuendos = { manos: ['Guantes', 'Anillos'], pies: ['Zapatos', 'Soquetes'] };

//console.log(atuendos.manos)

// BRACKET NOTATION
atuendos['piernas'] = ['Bermudas', 'Pantalones'];
// console.log(atuendos);

// HAS OWN PROPERTY
var libro = { autor: 'Borges', genero: 'Policial', año: 1990 };
var tienePropiedad = libro.hasOwnProperty('nombre');

// console.log(tienePropiedad);

// KEYS
var libro = { autor: 'Borges', genero: 'Policial', año: 1990 };
var todasLasPropiedades = Object.keys(libro);

// console.log(todasLasPropiedades);

var mundo = { contnentes: 7, paises: 105, oceanos: 5};
// for (let prop in mundo) {
//     console.log('Esta es la propiedad: ', prop);
//     console.log('Este es el valor: ', mundo[prop]);
//  }


// //THIS
// var mascota = {
//     animal: 'Perro',
//     raza: 'Ovejero Alemán',
//     amistoso: true,
//     dueño: 'María López',
//     info: () => {
//        console.log('Mi perro es un  ' + this.raza);
//     },
//  };