const totalTeams = ['Brasil', 'Ecuador', 'Japón', 'Francia', 'Inglaterra', 'Argentina', 'Holanda',
	'Alemania', 'España', 'Jamaica', 'Portugal', 'Suecia', 'Suiza',
	'México', 'Costa Rica', 'Corea del Sur', 'Arabia Saudita', 'Marruecos', 'Islandia', 'Senegal',
	'Nigeria', 'Croacia', 'Bélgica', 'Irán', 'Australia', 'Túnez', 'Panamá', 'Uruguay', 'Colombia',
	'Egipto', 'Dinamarca', 'Rusia']

const shuffled = totalTeams.sort(() => Math.random() - 0.5)
const teamSelected = shuffled.slice(0, 16)


//JUGAR PARTIDO 
class Partido {
	constructor(localTeam, awayTeam) {
		this.localTeam = localTeam
		this.awayTeam = awayTeam
	}

	play() {
		// genera los goles aleatorios
		const goals = {
			goalsHomeTeam: Math.floor(Math.random() * (10 - 1) + 1),
			goalsAwayTeam: Math.floor(Math.random() * (10 - 1) + 1)
		}
		if (goals.goalsHomeTeam > goals.goalsAwayTeam) { // gana equipo local
			const homeWinner = this.localTeam
			return {
				nameHomeTeam: this.localTeam,
				goalsHomeTeam: goals.goalsHomeTeam,
				nameAwayTeam: this.awayTeam,
				goalsAwayTeam: goals.goalsAwayTeam,
				winner: homeWinner,
			}
		}
		else if (goals.goalsHomeTeam < goals.goalsAwayTeam) { // gana equipo visitante
			const awayWinner = this.awayTeam
			return {
				nameHomeTeam: this.localTeam,
				goalsHomeTeam: goals.goalsHomeTeam,
				nameAwayTeam: this.awayTeam,
				goalsAwayTeam: goals.goalsAwayTeam,
				winner: awayWinner,
			}
		} else { // empate
			while (goals.goalsHomeTeam === goals.goalsAwayTeam) {
				return this.play()
			}
		}
	}
}

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


//OCTAVOS
const fase = []
let localTeam = null
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
		this.localTeam = item.nameLocalTeam,
		this.awayTeam = item.nameawayTeam
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
		this.localTeam = item.nameLocalTeam,
		this.awayTeam = item.nameawayTeam
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
		this.localTeam = item.nameLocalTeam,
		this.awayTeam = item.nameawayTeam
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
		this.localTeam = item.nameLocalTeam,
		this.awayTeam = item.nameawayTeam
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

