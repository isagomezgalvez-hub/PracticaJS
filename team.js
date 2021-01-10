export const totalTeams = ['Brasil', 'Ecuador', 'Japón', 'Francia', 'Inglaterra', 'Argentina', 'Holanda',
	'Alemania', 'España', 'Jamaica', 'Portugal', 'Suecia', 'Suiza',
	'México', 'Costa Rica', 'Corea del Sur', 'Arabia Saudita', 'Marruecos', 'Islandia', 'Senegal',
	'Nigeria', 'Croacia', 'Bélgica', 'Irán', 'Australia', 'Túnez', 'Panamá', 'Uruguay', 'Colombia',
	'Egipto', 'Dinamarca', 'Rusia']

export const shuffled = totalTeams.sort(() => Math.random() - 0.5)
export const teamSelected = shuffled.slice(0, 16)

/* export default {
	totalTeams: totalTeams,
	teamSelected: teamSelected
} */