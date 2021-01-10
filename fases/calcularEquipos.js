export default function calcularEquipos(fase, sigFase) {
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