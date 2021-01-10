export default class Partido {
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

