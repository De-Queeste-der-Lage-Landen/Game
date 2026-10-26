import types from '@/static/data/types';
import animationTypes from '@/static/data/animation-types';

export default [
	// {
	// 	name: 'text-cloud-1',
	// 	text: 'JE SCORE IS {score}! JE HEBT DUS GENOEG PUNTEN GESCOORD OM KANS TE MAKEN OP DE HOOFDPRIJS!',
	// 	hasTextCloud: 'normal',
	// 	hasScore: true,
	// 	hasCompetePriceBtn: true,
	// 	competeLink:
	// 		'https://docs.google.com/forms/d/e/1FAIpQLScTXN7hxEjd58U6_n4GO4xsEj3qPz2Em1zEFhd7T8bKp5Tyhw/viewform',
	// 	organisation: 'rivm',
	// 	goToGame: 'whack-a-mole',
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
		text: 'BEDANKT VOOR JE HULP! JE HEBT NEDERLAND BESCHERMD TEGEN EEN CYBERAANVAL.',
		hasTextCloud: 'normal',
		positionY: 105,
		positionX: 565,
		fontSize: 10,
		lineHeight: 20,
		fill: '#000000',
		wordWrap: true,
		wordWrapWidth: 204,
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
		text: 'HEB JE WEL EENS GEDACHT AAN EEN CARRIÈRE BIJ HET RIVM?',
		hasTextCloud: 'vacancy-big',
		hasVacancyBtn: true,
		organisation: 'rivm',
		// meetUsLink:
		// 	'https://c.spotler.com/ct/m15/k1/D0Rqonu78lPtdPhrjWErLvbSbo5g_0DbY5xjFyaB9bci-XEk9yyXxo89_N5m5aR2/M5efwbDSfVkbhpV',
		link: 'https://www.werkenvoornederland.nl/organisaties/ministerie-van-volksgezondheid-welzijn-en-sport/rijksinstituut-voor-volksgezondheid-en-milieu?utm_source=tweakers&utm_medium=tweakers&utm_campaign=24q2_lead_i-amc&utm_term=think',
		positionY: 45,
		positionX: 560,
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
