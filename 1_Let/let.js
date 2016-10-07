'use strict';
/*Diferencia entre let y var*/

if (true){
	let variable =12;
	var variable2=20;
	console.log(variable);//12
	console.log(variable2);	//20
}
/*Los let solo pueden ser usados en el ambito donde fueron declarados*/
console.log(variable);//ERROR
console.log(variable2);//20