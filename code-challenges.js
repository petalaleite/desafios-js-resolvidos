// Print all even numbers from 0 - 10
let n_ = 11;
for (let i = 0; i < n_; i += 1) {
	if (i % 2 === 0) {
		console.log(i);
	}
}

// função para retornar o nth número de uma string;

function myFunction(a, n) {
	return console.log(a[n]);
}

myFunction("abcd", 2);

function myFunction(a, n) {
	return a[n - 1];
}

let a = "abcd";
let n = 1;

console.log(a[n]);

function myFunction2(a, b, c, d, e, f) {
	let sum = a + b;
	let sub = sum - c;
	let mult = (sub * d) / e;
	return mult ** f;
}

// reposta oficial

function myFunction2(a, b, c, d, e, f) {
	return (((a + b - c) * d) / e) ** f;
}

// escreva uma função que receba uma string a como argumento e remova os 3 primeiros caracteres de a. devolva o resultado;

function funcao(a) {
	return a.slice(3, a.length);
}

funcao("abcdefg");

// resposta oficial -- o endIndex é opcional, sendo ocultado ele retira até o ultimo elemento da string.

function funcao(a) {
	return a.slice(3);
}

funcao(a);

// escreva uma função que pega uma string como argumento e extraia os 3 últimos caracteres da string e imprima o resultado

function funcao(str) {
	return str.slice(-3);
}

funcao(str);

// convert celsius to fahrenheit

const convertCelsiusToFahrenheit = (celsius) => {
	let fahrenheit = Math.round((celsius * 1.8) + 32);
	return `${celsius}°C is ${fahrenheit}°F`;
}

console.log(convertCelsiusToFahrenheit(26));
