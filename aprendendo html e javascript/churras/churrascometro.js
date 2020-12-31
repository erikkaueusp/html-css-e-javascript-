// carne 400g por pessoa + de 6h -650
//cerveja - 1200ml por pessoa + 6h - 2000ml
// refri/agua - 1000ml por pessoa + 6h 1500ml

//crianças valem por 0,5

let inputPeople = document.getElementById("people");
let inputKids = document.getElementById("kids");
let inputTime = document.getElementById("time");

let resultado = document.getElementById("resultado");

function calcular() {
	console.log("Calculando...");

	let adultos = inputPeople.value;
	let criancas = inputKids.value;
	let duracao = inputTime.value;

	let qtdtotcarne = carnepp(duracao)*adultos + (carnepp(duracao)*0.5*criancas);
	let qtdtotalcerveja = cervejapp(duracao)*adultos;
	let qtdtotalbebida = bebidapp(duracao)*adultos + (bebidapp(duracao)*0.5*criancas);

	resultado.innerHTML = `<p>Carne: ${qtdtotcarne/1000} kg</p>`
	resultado.innerHTML += `<p>Cerveja: ${Math.ceil(qtdtotalcerveja/350)} latas de 350ml</p>`
	resultado.innerHTML += `<p>Refrigenrantes: ${Math.ceil(qtdtotalbebida/2000)} garrafas de 2L</p>`
}

function carnepp(duracao) {
	if (duracao>=6) {
		return 650;
	}
	else {
		return 400;
	}
}

function cervejapp(duracao) {
	if (duracao>=6) {
		return 2000;
	}
	else {
		return 1200;
	}
}

function bebidapp(duracao) {
	if (duracao>=6) {
		return 1500;
	}
	else {
		return 1000;
	}
}