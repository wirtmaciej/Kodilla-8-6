var a = 1,
	b = 2,
	value = (a * a) + (2 * a * b) - (b * b);
console.log(value);

if (value > 0) {
	console.log('wynik dodatni');
} else if (value < 0) { 
	console.log('wynik ujemny');
} else {
	console.log('wynik nie jest ani dodatni ani ujemny');
}	

var isEqual = value === 0 ? 'wynik jest równy zero': 'wynik jest różny od zera';
console.log(isEqual);

if (value === 0) {
	console.log('wynik jest równy zero');
} else { 
	console.log('wynik jest różny od zera');
}

