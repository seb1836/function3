var array = [3,6,4,2,6,3,7];
var array2 = [];
var array3 = [5,2,9,32,6,4];

var arrayFindIndex = function (a, element) {
	let i = 0;
	var c;
	while (i < a.length) {
		if (element === a[i]) {
			return i;
		}
		i = i+1;
	}
	return b
}


var arrayLastIndexOf = function (a, element) {
	let i = 0;
	var c = 0;
	while (i < a.length) {
		if (element === a[i]) {						//wtf?
			c = a[i];
				if (i === a.length -1) {				
				return c ;
				}
		}
		i = i+1;
	}
	return -1;
}


var arrayAddElement = function(a, element) {
	let i = 0;
	var newarray = [];
	var arrayele = [];
	while (i <= a.length) {							//bloquer sur l'ajout d'une case supplémentaire
		if (i === a.length) {
			arrayele = [element];
			//a[i+1] = element;
			//console.log(a[i+1]);
			newarray = [[a]+[arrayele]];
		}
		i = i+1;
	}
	return newarray;
}


var array4 = ['first','second','third','fourth'];
var array5 = ['random','hasard','8','tableau']

var arrayJoin = function(a) {
	let i = 0;
	var b = 0;
	var stock;
	var concat; 
	while (i < a.length) {						//bloquage stockage informations b est perdu à chaque fois
		b = a[i] ;
		i = i+1;
			//if (i === a.length ){
			//	concat = b + a[i+1]	
			//}
	}
	return b;
}