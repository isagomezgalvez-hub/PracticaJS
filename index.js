

import { teamSelected } from './team.js'
import { totalTeams } from './team.js'

console.log(' ')
console.log('===============================================')
console.log('===== COMIENZO DE LA FASE DE ELIMINATORIAS ====')
console.log('===============================================')
console.log(' ')
console.log('Equipos Participantes en Fase de Eliminatorias:')
console.log(' ')

teamSelected.forEach(element => {
	console.log(`${element}`)
})

//JUGAR PARTIDO 
import Partido from './classes/Play.js'

//CALCULAR EQUIPOS DE LA FASE
import calcularEquipos from './fases/calcularEquipos.js'


let localTeam = null
let awayTeam = null

//OCTAVOS
let fase = calcularEquipos(teamSelected)
const octavos = []

for (const item of fase) {
	const match = new Partido(
		localTeam = item.nameLocalTeam,
		awayTeam = item.nameawayTeam
	)
	octavos.push(match.play())
}
let resultados = []
const ganadoresOctavos = octavos.map(e => e.winner)
console.log(' ')
console.log(' ===== OCTAVOS DE FINAL ===== ')
console.log(' ')
octavos.forEach(result => {
	console.log(`${result.nameHomeTeam} ${result.goalsHomeTeam} - ${result.nameAwayTeam} ${result.goalsAwayTeam} ${'=>'} ${result.winner}`)
	resultados.push(result)
})

// CUARTOS
fase = calcularEquipos(ganadoresOctavos)
const cuartos = []
for (const item of fase) {
	const match = new Partido(
		localTeam = item.nameLocalTeam,
		awayTeam = item.nameawayTeam
	)
	cuartos.push(match.play())
}
resultados = []
const ganadoresCuartos = cuartos.map(e => e.winner)
console.log(' ')
console.log(' ===== CUARTOS DE FINAL ===== ')
console.log(' ')
cuartos.forEach(result => {
	console.log(`${result.nameHomeTeam} ${result.goalsHomeTeam} - ${result.nameAwayTeam} ${result.goalsAwayTeam} ${'=>'} ${result.winner}`)
	resultados.push(result)
})


// SEMIFINALES
fase = calcularEquipos(ganadoresCuartos)
const Semifinal = []
for (const item of fase) {
	const match = new Partido(
		localTeam = item.nameLocalTeam,
		awayTeam = item.nameawayTeam
	)
	Semifinal.push(match.play())
}

const ganadores = Semifinal.map(e => e.winner)
resultados = []
console.log(' ')
console.log(' ===== SEMIFINALES ===== ')
console.log(' ')
Semifinal.forEach(result => {
	console.log(`${result.nameHomeTeam} ${result.goalsHomeTeam} - ${result.nameAwayTeam} ${result.goalsAwayTeam} ${'=>'} ${result.winner}`)
	resultados.push(result)
})


// 3 y 4 PUESTO 
const perdedores = []
Semifinal.forEach(element => {
	if (element.nameHomeTeam !== element.winner) {
		const HomeTeam = element.nameHomeTeam
		perdedores.push(HomeTeam)
	}
	else if (element.nameAwayTeam !== element.winner) {
		const AwayTeam = element.nameAwayTeam
		perdedores.push(AwayTeam)
	}
});
fase = calcularEquipos(perdedores)
const clasificacionPerdedores = []
for (const item of fase) {
	const match = new Partido(
		localTeam = item.nameLocalTeam,
		awayTeam = item.nameawayTeam
	)
	clasificacionPerdedores.push(match.play())
}

console.log(' ')
console.log('===== TERCER Y CUARTO PUESTO =====')
console.log(' ')

clasificacionPerdedores.forEach(result => {
	console.log(`${result.nameHomeTeam} ${result.goalsHomeTeam} - ${result.nameAwayTeam} ${result.goalsAwayTeam} ${'=>'} ${result.winner}`)
	resultados.push(result)
})

/*
let tercerPuesto = null
let cuartoPuesto = null

clasificacionPerdedores.forEach(element => {
	if (element.nameHomeTeam === element.winner) {
		tercerPuesto = (element.nameHomeTeam)
	}
	else {
		tercerPuesto = (element.nameAwayTeam)
	}
});
clasificacionPerdedores.forEach(element => {
	if (element.nameHomeTeam !== element.winner) {
		cuartoPuesto = (element.nameHomeTeam)
	}
	else {
		cuartoPuesto = (element.nameAwayTeam)
	}
}); */



// FINAL
fase = calcularEquipos(ganadores)
const Final = []
for (const item of fase) {
	const match = new Partido(
		localTeam = item.nameLocalTeam,
		awayTeam = item.nameawayTeam
	)
	Final.push(match.play())
}

const ganador = Final.map(e => e.winner)

function resultadosFinal() {
	const resultados = []
	for (const item of Final) {
		const result = item.nameHomeTeam + ' ' + item.goalsHomeTeam + ' - ' +
			item.nameAwayTeam + ' ' + item.goalsAwayTeam + ' => ' +
			item.winner
		resultados.push(result)
	}
	return resultados[0]
}

console.log(' ')
console.log('============ FINAL ===========')
console.log(' ')
console.log(resultadosFinal())
console.log(' ')

console.log('=================================== ')
console.log(ganador[0], '=>' + ' ' + 'Equipo campeón del mundo.')
console.log('=================================== ')
console.log(' ')



