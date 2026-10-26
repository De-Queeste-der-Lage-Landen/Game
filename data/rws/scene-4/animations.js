import types from '@/static/data/types';
import animationTypes from '@/static/data/animation-types';

export default [
	// {
	// 	name: 'text-cloud-1',
	// 	text: 'JE SCORE IS {score}! JE HEBT DUS GENOEG PUNTEN GESCOORD OM KANS TE MAKEN OP DE HOOFDPRIJS!',
	// 	hasTextCloud: 'normal',
	// 	hasScore: true,
	// 	competeLink:
	// 		'https://docs.google.com/forms/d/e/1FAIpQLSfbQGECHYjqazjoMfq9xbFANVvbN2_lWnQh3NrZCHI848IeIg/viewform',
	// 	hasCompetePriceBtn: true,
	// 	organisation: 'rws',
	// 	goToGame: 'frogger',
	// 	positionY: 40,
	// 	positionX: 40,
	// 	fontSize: 10,
	// 	lineHeight: 20,
	// 	hasColor: '-green',
	// 	fill: '#000000',
	// 	wordWrap: true,
	// 	wordWrapWidth: 180,
	// 	align: 'center',
	// 	interaction: {
	// 		type: types.GO_TO_NEXT_ANIMATION_ELEMENT
	// 	},
	// 	animation: {
	// 		type: animationTypes.FADE_IN,
	// 		pauseAfter: true,
	// 		reverseAnimation: true
	// 	}
	// },
	{
		name: 'text-cloud-2',
		text: 'DANK VOOR JOUW HULP AAN EEN VEILIG, BEREIKBAAR EN LEEFBAAR NEDERLAND.',
		hasTextCloud: 'normal',
		positionY: 120,
		positionX: 440,
		fontSize: 10,
		lineHeight: 20,
		fill: '#000000',
		wordWrap: true,
		wordWrapWidth: 228,
		nextIsVacancy: true,
		align: 'center',
		interaction: {
			type: types.GO_TO_NEXT_ANIMATION_ELEMENT
		},
		animation: {
			type: animationTypes.FADE_IN,
			pauseAfter: true,
			reverseAnimation: true
		}
	},
	{
		name: 'text-cloud-3',
		text: 'HEB JE WEL EENS GEDACHT AAN EEN CARRIÈRE BIJ RIJKSWATERSTAAT?',
		hasTextCloud: 'vacancy-big',
		hasVacancyBtn: true,
		organisation: 'rws',
		// meetUsLink:
		// 	'https://c.spotler.com/ct/m15/k1/3gAycpDjjXdVHAHInPdPnamZ2vG8cLo7COO8mbxDr9XrlcmtdkuVhcYNyW3M7oeZ/Fee8fv3Bz8HUZBB',
		link: 'https://werkenbij.rijkswaterstaat.nl/vakgebieden/ict?utm_source=tweakers&utm_medium=tweakers&utm_campaign=2405_lead_amc-ict&utm_term=think',
		positionY: 35,
		positionX: 440,
		fontSize: 10,
		lineHeight: 20,
		fill: '#000000',
		wordWrap: true,
		wordWrapWidth: 220,
		align: 'center',
		hideElOnStart: true,
		interaction: {
			type: types.CLOSE_TEXT_CLOUD
		},
		animation: {
			type: animationTypes.FADE_IN
		}
	},
	{
		name: 'text-cloud-4',
		text: 'BEKIJK ALLE CHALLENGES',
		hasTextCloud: 'vacancy-big',
		hasColor: '-green',
		positionY: 40,
		positionX: 40,
		fontSize: 10,
		lineHeight: 20,
		fill: '#298941',
		wordWrap: true,
		wordWrapWidth: 105,
		align: 'center',
		interaction: {
			type: types.TOGGLE_MENU
		},
		animation: {
			type: animationTypes.FADE_IN
		}
	}
];
