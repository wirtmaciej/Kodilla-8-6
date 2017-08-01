var a = 1,
	b = 2,
	value = (a * a) + (2 * a * b) - (b * b);
console.log(value);

if (value > 0) {
	console.log('wynik dodatni');
} else { 
	console.log('wynik ujemny');
}

var value = value === 0 ? 'wynik jest równy zero': 'wynik jest różny od zera';
console.log(value);

if (value === 0) {
	console.log('wynik jest równy zero');
} else { 
	console.log('wynik jest różny od zera');
}