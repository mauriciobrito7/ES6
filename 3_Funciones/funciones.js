'use strict';

//ES5
var funcion= function(a){
	console.log(a);
};

funcion('Hello');

//ES6
//Functions arrow
var func=(b)=>{
	console.log(b)
};

func('Hello');
//Devolver
var mayusculas= (a)=>a.toUpperCase();
console.log(mayusculas('hello'));

//Números de parametros indefinidos
var varios=(... values)=>{

	values.forEach((value)=>{
		console.log(value.toUpperCase());
	});
};

varios('hello', 'world');

//Valores por defecto
var porDefecto=(a,b=25)=>{
	console.log(a+b);
}

porDefecto(15);//40
