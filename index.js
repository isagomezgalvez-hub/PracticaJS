

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
let localTeam = null
let awayTeam = null

function calcularEquipos(fase, sigFase) {
	sigFase = []
	let localTeam = null
	let awayTeam = null
	for (const team of fase) {
		if (localTeam === null) {
			//Si no tengo equipo local
			localTeam = team //guardo equipo local
		}
		else {//Si si tengo equipo local
			const match = { //Montar el partido 
				nameLocalTeam: localTeam,
				nameawayTeam: team,
			}
			sigFase.push(match)//Añadir el partido a la fase
			localTeam = null //Volver a indicar que no tengo equipo local
		}
	}
	return sigFase
}
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
console.log('======= FINAL =======')
console.log(' ')
console.log(resultadosFinal())
console.log(' ')


console.log('=================================== ')
console.log(ganador[0], '=>' + ' ' + 'Equipo campeón del mundo.')
console.log('=================================== ')
console.log(' ')


/* const fase = []
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
} */


