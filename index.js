

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


//OCTAVOS
const fase = []
let localTeam = null
let awayTeam = null
for (const team of teamSelected) {
	if (localTeam === null) {
		//Si no tengo equipo local
		localTeam = team //guardo equipo local
	}
	else {//Si si tengo equipo local
		const match = { //Montar el partido 
			nameLocalTeam: localTeam,
			nameawayTeam: team,
		}
		fase.push(match)//Añadir el partido a la fase
		localTeam = null //Volver a indicar que no tengo equipo local
	}
}
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

const faseCuartos = []
localTeam = null
for (const item of ganadoresOctavos) {
	if (localTeam === null) {
		localTeam = item
	}
	else {
		const match = {
			nameLocalTeam: localTeam,
			nameawayTeam: item,
		}
		faseCuartos.push(match)
		localTeam = null
	}
}
const cuartos = []
for (const item of faseCuartos) {
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
const faseSemifinal = []
localTeam = null
for (const item of ganadoresCuartos) {
	if (localTeam === null) {
		localTeam = item
	}
	else {
		const match = {
			nameLocalTeam: localTeam,
			nameawayTeam: item,
		}
		faseSemifinal.push(match)
		localTeam = null
	}
}

const Semifinal = []
for (const item of faseSemifinal) {
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

// FINAL
const faseFinal = []
localTeam = null
for (const item of ganadores) {
	if (localTeam === null) {
		localTeam = item
	}
	else {
		const match = {
			nameLocalTeam: localTeam,
			nameawayTeam: item,
		}
		faseFinal.push(match)
		localTeam = null
	}
}

const Final = []
for (const item of faseFinal) {
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
console.log('======= FINAL =======')
console.log(' ')
console.log(resultadosFinal())
console.log(' ')


console.log('=================================== ')
console.log(ganador[0], '=>' + ' ' + 'Equipo campeón del mundo.')
console.log('=================================== ')
console.log(' ')

